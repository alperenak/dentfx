import React, { Component } from 'react';

/*** Styles ***/
import styles from './appointment.scss';

/*** Components ***/
import Input from '../../components/Input';
import ReactStars from 'react-rating-stars-component';

/*** Icons ***/
import illustration from '../../icons/illustration_2.svg';
import store from '../../store';

class SearchAppointment extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    searchParams: {
      date: new Date().toLocaleDateString(),
      keyword: '',
      city: '',
      country: '',
    },
    searchResults: [],
  };

  scrollToMyRef = () => {
    // window.scrollTo(0, this.myRef.current.offsetTop);
    this.myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  submitAppointment = async () => {
    let { searchParams } = this.state;

    let res = await store.SearchAppointment(searchParams);

    if (res.data) {
      this.setState({ searchResults: res.data });
      this.scrollToMyRef();
    }
  };

  renderSearchResults = () => {
    let { searchResults } = this.state;

    if (searchResults.length < 1) return <div></div>;

    return (
      <div className={styles.searchResultsWrapper} ref={this.myRef}>
        {searchResults?.map((clinic, i) => {
          return (
            <div
              className={styles.card}
              key={i}
              onClick={() => this.props.history.push(`/clinic/${clinic?.id}`)}
            >
              <div className={styles.image}>
                <img src={clinic.avatar} alt="" />
              </div>
              <div className={styles.name}>{`${clinic?.name} `}</div>

              <div className={styles.rating}>
                <ReactStars value={clinic?.rate} size={16} edit={false} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className={styles.newAppointment}>
        <div className={styles.header}>
          <img src={illustration} alt="" />
          <div className={styles.headerText}>
            <div className={styles.title}>Hi Peter,</div>
            <div className={styles.subtitle}>make an appointment easily!</div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.inputContainer}>
            <Input
              type="text"
              size="full"
              label={'What are you looking for?'}
              placeholder="Ex.: Kanal Tedavisi"
              onChange={(keyword) => {
                this.setState({
                  searchParams: { ...this.state.searchParams, keyword },
                });
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <Input
              type="date"
              size="full"
              label={'From Date'}
              //defaultValue={new Date().toLocaleDateString()}
              name={'dateStart'}
              onChange={(date) => {
                let comdate = new Date(date).toLocaleDateString();
                this.setState({
                  searchParams: { ...this.state.searchParams, comdate },
                });
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <Input
              type="text"
              size="full"
              label={'City'}
              placeholder={'Istanbul'}
              onChange={(city) => {
                this.setState({
                  searchParams: { ...this.state.searchParams, city },
                });
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <Input
              type="text"
              size="full"
              label={'Country'}
              placeholder={'Turkey'}
              onChange={(country) => {
                this.setState({
                  searchParams: { ...this.state.searchParams, country },
                });
              }}
            />
          </div>

          <button className={styles.submitBtn} onClick={this.submitAppointment}>
            Randevu Ara
          </button>
        </div>

        {this.renderSearchResults()}
      </div>
    );
  }
}

export default SearchAppointment;
