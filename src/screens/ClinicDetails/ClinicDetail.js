/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import store from '../../store';

/*** Styles ***/
import './style.scss';

/*** Components ***/
import ReactStars from 'react-rating-stars-component';
import Map from '../../components/Map/map';
import { Carousel } from 'react-responsive-carousel';

class ClinicDetail extends Component {
  state = { clinic: null, selectedTab: 0, carouselImages: [] };

  componentDidMount = async () => {
    let { match } = this.props;

    let clinicId = match.params.id;

    let res = await store.getClinicDetail({ clinicId });
    this.setState({ clinic: res.data });
    this.setState({ carouselImages: res.data.gallery });
  };

  setSelectedTab = (index) => {
    this.setState({ selectedTab: index });
  };

  renderOverviewTab = () => {
    let { clinic } = this.state;
    let clinics = [clinic];
    return (
      <div className={'aboutTab'}>
        <div className={'item'}>
          <h3>Hakkında</h3>
          <div className={'content'}>
            Kliniğimiz 2008 yılında ağız diş sağlığında uzman kadrosuyla
            Trabzon'un merkezi noktalarından Ortahisar bölgesinde hizmet vermeye
            başlamıştır. Kurucu hekimlerimiz akademisyen kimlikleriyle uzman
            oldukları alanlarda bilim ve sanatı birleştirerek bu adreste bilgi
            ve deneyimlerini sizlerle paylaşmaktadır.
          </div>
        </div>

        <div className={'item'}>
          <h3>Konum</h3>
          <div className={'content'}>{clinic?.address}</div>
          {clinic && <Map clinics={clinics} />}
        </div>
      </div>
    );
  };

  renderTreatmentTab = () => {
    let { clinic } = this.state;
    return (
      <div className={'tabWrapper'}>
        {clinic?.treatmentType?.map((treatment, i) => {
          return (
            <div className={'card'} key={i}>
              <div className={'image'}>
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div className={'name'}>{treatment}</div>
            </div>
          );
        })}
      </div>
    );
  };

  renderDentistTab = () => {
    let { clinic } = this.state;
    return (
      <div className={'tabWrapper'}>
        {clinic?.Dentist.map((dentist, i) => {
          return (
            <div className={'card'} key={i}>
              <div className={'image'}>
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div
                className={'name'}
              >{`${dentist?.name} ${dentist?.surname}`}</div>

              <div className={'rating'}>
                <ReactStars value={dentist?.rate} size={16} edit={false} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  renderCommentsTab = () => {};

  renderGalleryTab = () => {
    return (
      <>
        <div className="settingsWrapper" style={{ marginBottom: '-500px' }}>
          <div className="row">
            <div style={{ width: '750px', height: '750px' }}>
              <Carousel>
                {this.state.carouselImages.map((carouselImage) => {
                  return (
                    <>
                      <div key={carouselImage._id}>
                        <img src={carouselImage.link} />
                      </div>
                    </>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </>
    );
  };

  render() {
    let { clinic, selectedTab } = this.state;

    return (
      <div className={'Profile'}>
        <div className={'profileCard'}>
          <img className={'profileImage'} src={clinic?.avatar} alt="avatar" />
          <div className={'createAppointment'}>
            <button
              onClick={() =>
                (window.location = `/appointment/create/${clinic.id}`)
              }
            >
              Randevu Oluştur
            </button>
          </div>
        </div>

        <div className={'profileName'}>{clinic?.name}</div>
        <div
          className={'location'}
        >{`${clinic?.city}, ${clinic?.country}`}</div>

        <div className={'tabs'}>
          <div
            onClick={() => this.setSelectedTab(0)}
            className={`${'tab'} ${selectedTab === 0 ? 'selected' : ''}`}
          >
            Hakkında
          </div>
          <div
            onClick={() => this.setSelectedTab(1)}
            className={`${'tab'} ${selectedTab === 1 ? 'selected' : ''}`}
          >
            Tedavi Türleri
          </div>
          <div
            onClick={() => this.setSelectedTab(2)}
            className={`${'tab'} ${selectedTab === 2 ? 'selected' : ''}`}
          >
            Diş Hekimi listesi
          </div>
          <div
            onClick={() => this.setSelectedTab(3)}
            className={`${'tab'} ${selectedTab === 3 ? 'selected' : ''}`}
          >
            Yorumlar
          </div>
          <div
            onClick={() => this.setSelectedTab(4)}
            className={`${'tab'} ${selectedTab === 4 ? 'selected' : ''}`}
          >
            Galeri
          </div>
        </div>

        <div>
          {selectedTab === 0 && this.renderOverviewTab()}
          {selectedTab === 1 && this.renderTreatmentTab()}
          {selectedTab === 2 && this.renderDentistTab()}
          {selectedTab === 3 && this.renderCommentsTab()}
          {selectedTab === 4 && this.renderGalleryTab()}
        </div>
      </div>
    );
  }
}

export default ClinicDetail;
