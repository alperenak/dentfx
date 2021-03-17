import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import CheckMark from '../../components/CheckMark/checkMark';
import DatePicker from '../../components/DatePicker/DatePicker';

/*** Styles ***/
import './clinician.scss';
// eslint-disable-next-line no-unused-vars
import AddUserIcon from '../../icons/add-user.svg';

/*** Utils ***/
import store from '../../store';
import { getCookie } from '../../utils/cookie';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';

const Step1 = () => {
  return (
    <div className="stepWrapper">
      <form className="needs-validation" noValidate>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault01">İsim</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="Hasan"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault02">Soyisim</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Demirkıran"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-9 mb-3">
            <label htmlFor="inputTC">TC Kimlik No</label>
            <input
              type="text"
              className="form-control"
              id="inputTC"
              placeholder="000 0000 0000"
            />
          </div>
          <div className={'col-md-3 mb-3'} style={{ paddingLeft: '2rem' }}>
            <label htmlFor="sexRadio1">Cinsiyet</label>
            <div className={'row'} style={{ marginTop: '0' }}>
              <div className="form-check" style={{ marginRight: '5px' }}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="sexRadio1"
                  value="option1"
                  checked
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Erkek
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="sexRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Kadın
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={'form-row'} style={{ marginBottom: '0' }}>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault04">Uyruk</label>
            <select className="custom-select" id="validationDefault04" required>
              <option selected disabled value="">
                Seçiniz...
              </option>
              <option>Türk</option>
              <option>Yabancı</option>
            </select>
          </div>
          <div className="col-md-8 mb-3">
            <label htmlFor="dentistName">Diş Hekimi</label>
            <input
              id="dentistName"
              type="text"
              className="form-control"
              placeholder="Diş Hekimi"
            />
          </div>
        </div>
        <div className="form-row" style={{ marginTop: '0' }}>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault01">Doğum Tarihi</label>
            <DatePicker />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault02">Kayıt Tarihi</label>
            <DatePicker />
          </div>
        </div>
      </form>
    </div>
  );
};
const Step2 = () => {
  return (
    <div className="stepWrapper">
      <form className="was-validated">
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault04">İlçe</label>
            <select className="custom-select" id="validationDefault04" required>
              <option selected disabled value="">
                Seçiniz...
              </option>
              <option>Başakşehir</option>
              <option>Sarıyer</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault04">Şehir</label>
            <select className="custom-select" id="validationDefault04" required>
              <option selected disabled value="">
                Seçiniz...
              </option>
              <option>İstanbul</option>
              <option>Ankara</option>
              <option>Eskişehir</option>
              <option>Çanakkale</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault04">Ülke</label>
            <select className="custom-select" id="validationDefault04" required>
              <option selected disabled value="">
                Seçiniz...
              </option>
              <option>Türkiye</option>
              <option>USA</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault05">Posta Kodu</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label htmlFor="exampleFormControlInput1">E-mail adresi</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="hasan@gmail.com"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="inputAddress">Telefon1</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="+09 000 000 0000"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault05">Telefon2</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              placeholder="+09 000 000 0000"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label htmlFor="exampleFormControlInput1">Adres</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Rumeli Hisarüstü Mah..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const Step3 = () => {
  return (
    <div className="stepWrapper">
      <CheckMark />
    </div>
  );
};

class Clinician extends Component {
  state = { clinicians: null, patientData: null };

  componentDidMount = async () => {
    let clinicId = getCookie('user_id');
    let res = await store.getClinicDetail({ clinicId });
    this.setState({ clinicians: res.data.Dentist });
    this.setState({
      patientData: {
        columns: [
          {
            label: 'Profil',
            field: 'avatar',
            sort: 'asc',
            width: 50,
          },
          {
            label: 'İsim',
            field: 'name',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Soyisim',
            field: 'surname',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Puan',
            field: 'rate',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'İncele',
            field: 'button',
            sort: 'asc',
            width: 150,
          },
        ],
        rows: res.data.Dentist.map((dentist) => {
          return {
            ...dentist,
            avatar: (
              <div className="tableAvatar">
                <img src={dentist.avatar} />
              </div>
            ),
            button: (
              <Link to={`/clinician/${dentist.id}`} className="tableAvatar">
                <button type="button" className="btn btn-secondary">
                  İncele
                </button>
              </Link>
            ),
          };
        }),
      },
    });
  };

  render() {
    const step1Content = <Step1 />;
    const step2Content = <Step2 />;
    const step3Content = <Step3 />;

    function step2Validator() {
      // return a boolean
      return true;
    }

    function step3Validator() {
      // return a boolean
      return true;
    }

    function onFormSubmit() {
      // handle the submit logic here
      // This function will be executed at the last step
      // when the submit button (next button in the previous steps) is pressed
    }

    return (
      <div>
        {/* <a
          type="button"
          data-toggle="modal"
          data-target="#addUserModal"
          className={'addUser'}
        >
          <img src={AddUserIcon}></img>
        </a> */}

        <div
          className="modal fade"
          id="addUserModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Hasta Ekle
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <StepProgressBar
                  startingStep={0}
                  onSubmit={onFormSubmit}
                  previousBtnName={'Önceki'}
                  nextBtnName={'Sonraki'}
                  steps={[
                    {
                      label: 'Kişisel Bilgiler',
                      subtitle: '0%',
                      name: 'step 1',
                      content: step1Content,
                    },
                    {
                      label: 'İletişim Bilgileri',
                      subtitle: '50%',
                      name: 'step 2',
                      content: step2Content,
                      validator: step2Validator,
                    },
                    {
                      label: 'Son',
                      subtitle: '100%',
                      name: 'step 3',
                      content: step3Content,
                      validator: step3Validator,
                    },
                  ]}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Kapat
                </button>
                <button type="button" className="btn btn-primary">
                  Klinisyen Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.patientData !== null ? (
          <div className={'cliniciansTable'}>
            <MDBDataTable
              small
              noBottomColumns
              data={this.state.patientData}
              searchLabel={'Ara'}
              entriesLabel={'Girdileri Göster'}
              info={false}
              paginationLabel={['Önceki', 'Sonraki']}
            />
          </div>
        ) : (
          <Loading innerScreen />
        )}
      </div>
    );
  }
}

export default Clinician;
