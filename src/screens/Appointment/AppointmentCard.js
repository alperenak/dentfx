import React, { Component } from 'react';

/*** Styles ***/
import styles from './AppointmentCard.scss';

/*** Icons ***/
import dropdownIcon from '../../icons/dropdown-disabled.svg';
import dentHospitalIcon from '../../icons/dental-icon.png';
import toothPic from '../../icons/tooth.svg';

/*** Utils ***/
import store from '../../store';

class AppointmentCard extends Component {
  state = {
    status: '',
    accordionActive: styles.accordionInactive,
    data: [],
    isPatientArrived: undefined,
  };

  componentDidMount = () => {
    let { data } = this.props;

    if (data?.isDone) {
      return this.setState({ status: 'completed' });
    } else if (data?.isConfirmed) {
      return this.setState({ status: 'active' });
    } else if (data?.isCancelledByDentist || data?.isCancelledByUser) {
      return this.setState({ status: 'cancelled' });
    }
    return this.setState({ status: 'pending' });
  };

  onExpandClick = () => {
    this.setState({
      accordionActive:
        this.state.accordionActive === 'cardWrapper__accordionInactive'
          ? 'cardWrapper__accordionActive'
          : 'cardWrapper__accordionInactive',
    });
  };

  //Randevuya git butonu
  onClickRandevuyaGit = () => {};

  //Randevuyu Onayla butonu
  onClickApproveAppointment = async () => {
    console.log('Appointment Approved');
    let { data } = this.props;

    await store.approveAppointment({ appointmentID: data.id });
  };

  //Randevuyu iptal et butonu
  onClickCancelAppointment = async () => {
    let { data } = this.props;

    await store.CancelAppointment({ appointmentID: data.id });
  };

  renderDetailsButton = () => {
    let {
      isDone,
      isConfirmed,
      isCancelledByDentist,
      isCancelledByUser,
    } = this.props.data;

    let { userType } = this.props;

    if (isCancelledByDentist || isCancelledByUser) {
      return <div></div>;
    }

    if (isDone) {
      return (
        <button
          className={'cardWrapper__positiveBtn'}
          onClick={this.onClickRandevuyaGit}
        >
          Randevuya Git
        </button>
      );
    }

    if (userType !== 'user' && this.state.status === 'pending') {
      return (
        <>
          <button
            className={'cardWrapper__positiveBtn'}
            onClick={this.onClickApproveAppointment}
          >
            Randevuyu Onayla
          </button>
          <button
            className={'cardWrapper__negativeBtn'}
            onClick={this.onClickCancelAppointment}
          >
            Randevuyu İptal Et
          </button>
        </>
      );
    }

    return (
      <button
        className={'cardWrapper__negativeBtn'}
        onClick={this.onClickCancelAppointment}
      >
        Randevuyu İptal Et
      </button>
    );
  };

  renderBadge = (data) => {
    let { status } = this.state;

    if (status === 'completed')
      return (
        <div className={'cardWrapper__content__clinicInfo__badge completed'}>
          TAMAMLANDI
        </div>
      );
    else if (status === 'active')
      return (
        <div className={'cardWrapper__content__clinicInfo__badge active'}>
          HARİTADA GÖSTER
        </div>
      );
    else if (status === 'pending')
      return (
        <div className={'cardWrapper__content__clinicInfo__badge pending'}>
          ONAY BEKLENİYOR
        </div>
      );
    else if (status === 'cancelled')
      return (
        <div className={'cardWrapper__content__clinicInfo__badge cancelled'}>
          İPTAL EDİLDİ
        </div>
      );
  };

  renderRadioButton = () => {
    const { userType } = this.props;
    if (userType !== 'user' && this.state.status === 'completed') {
      return (
        <div>
          <div className='form-check'>
            <input
              onChange={(event) => this.setState({ isPatientArrived: true })}
              className='form-check-input'
              type='radio'
              name='exampleRadios'
              id='exampleRadios1'
              value='option1'
            />
            <label className='form-check-label' htmlFor='exampleRadios1'>
              Patient Arrived
            </label>
          </div>
          <div className='form-check'>
            <input
              onChange={(event) => this.setState({ isPatientArrived: false })}
              className='form-check-input'
              type='radio'
              name='exampleRadios'
              id='exampleRadios2'
              value='option2'
            />
            <label className='form-check-label' htmlFor='exampleRadios2'>
              Patient not Arrived
            </label>
          </div>
        </div>
      );
    }
  };
  render() {
    let { data } = this.props;
    let { status, accordionActive } = this.state;
    return (
      <div className={`${'cardWrapper'} ${status} ${accordionActive}  `}>
        <div className='cardWrapper__header'>
          <div className='cardWrapper__header__leftIcon'>
            <img src={dentHospitalIcon} alt='' />
          </div>
          <div className='cardWrapper__content__clinicInfo'>
            <div className={styles.title}> {data?.Clinic?.name} </div>
            {this.renderBadge(data)}
          </div>
        </div>
        <div className='cardWrapper__content'>
          <div className={'cardWrapper__appointmentInfoWrapper'}>
            <div className={'cardWrapper__appointmentInfoWrapper__dentist'}>
              {`${data?.Dentist?.name} ${data?.Dentist?.surname}`}
            </div>
            <div
              className={`${'cardWrapper__appointmentInfoWrapper__details'} ${accordionActive}`}
            >
              Kanal Tedavisi / Diş Tedavisi Açıklaması & Consectetur elit
              pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Etiam fringilla aliquet arcu.
              {this.renderDetailsButton()}
            </div>
            <div className='cardWrapper__appointmentInfoWrapper__appointmentInfo'>
              <div className='cardWrapper__appointmentInfoWrapper__appointmentInfo__date'>
                {data?.date}
              </div>
              <div className='cardWrapper__appointmentInfoWrapper__appointmentInfo__time'>
                {data?.startTime}
              </div>
              <div className='cardWrapper__appointmentInfoWrapper__appointmentInfo__price'>
                $70
              </div>
            </div>
          </div>
        </div>

        <div className='container row'>
          <div className='radioButtons'>{this.renderRadioButton()}</div>

          <div className='radioWrapper'>
            {this.state.isPatientArrived && (
              <div class='col-xl-4 col-lg-4 col-md-6 col-sm-1'>
                <a href='/addTreatment' className='addTreatment'>
                  <p>Add Treatment</p>
                  <img src={toothPic} alt={'logo'} />
                </a>
              </div>
            )}

            {this.state.isPatientArrived !== undefined &&
              !this.state.isPatientArrived &&
              this.state.status === 'completed' && (
                <div class='col-xl-4 col-lg-4 col-md-6 col-sm-1'>
                  <a to='' className='reportPatient'>
                    <p>Report Patient</p>
                    <img src={toothPic} alt={'logo'} />
                  </a>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentCard;
