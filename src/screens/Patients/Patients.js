import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import CheckMark from '../../components/CheckMark/checkMark';
import DatePicker from '../../components/DatePicker/DatePicker';

/*** Styles ***/
import './patients.scss';
import AddUserIcon from '../../icons/add-user.svg';

/*** Utils ***/
import store from '../../store';
import { getCookie } from '../../utils/cookie';
import { Link } from 'react-router-dom';

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clinicians: null,
      patientData: null,
      tariffs: null,
      patient_name: '',
      patient_surname: '',
      patient_email: '',
      patient_phone: '',
      patient_nationality: '',
      patient_tcNumber: '',
      patient_birthDate: '',
      patient_Dentist: '',
      patient_tariff: 'no tariff',
      patient_currency: '',
      patient_city: '',
      patient_country: '',
      patient_address: '',
    };
  }

  componentDidMount = async () => {
    let clinicId = getCookie('user_id');
    let tariffs = await store.getClinicTariffs({ clinicId });
    let res = await store.getPatients({ clinicId });
    let clinic = await store.getClinicDetail({ clinicId });
    this.setState({ tariffs: tariffs.data });
    this.setState({ clinicians: clinic.data.Dentist });
    this.setState({
      patientData: {
        columns: [
          {
            label: 'Fotoğraf',
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
            label: 'Telefon',
            field: 'phone',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'TC/Pasaport No',
            field: 'passport_no',
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
        rows: res.data.map((patient) => {
          return {
            ...patient,
            avatar: (
              <div className="tableAvatar">
                <img src={patient.avatar} />
              </div>
            ),
            button: (
              <Link to={`/patients/${patient.id}`} className="tableAvatar">
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

  renderStep1 = () => {
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
                onChange={(event) =>
                  this.setState({ patient_name: event.target.value })
                }
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
                onChange={(event) =>
                  this.setState({ patient_surname: event.target.value })
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="inputTC">TC Kimlik No</label>
              <input
                type="text"
                className="form-control"
                id="inputTC"
                placeholder="000 0000 0000"
                onChange={(event) =>
                  this.setState({ patient_tcNumber: event.target.value })
                }
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault04">Currency</label>
              <select
                className="custom-select"
                id="validationDefault04"
                required
                onChange={(event) =>
                  this.setState({ patient_currency: event.target.value })
                }
              >
                <option selected disabled value="">
                  Seçiniz...
                </option>
                <option>TRY</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
          </div>
          <div className={'form-row'} style={{ marginBottom: '0' }}>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault04">Uyruk</label>
              <select
                className="custom-select"
                id="validationDefault04"
                required
                onChange={(event) =>
                  this.setState({ patient_nationality: event.target.value })
                }
              >
                <option selected disabled value="">
                  Seçiniz...
                </option>
                <option>Türk</option>
                <option>Yabancı</option>
              </select>
            </div>
            <div className="col-md-8 mb-3">
              <label htmlFor="dentistName">Diş Hekimi</label>
              <select
                className="custom-select"
                id="dentistName"
                required
                onChange={(event) =>
                  this.setState({ patient_Dentist: event.target.value })
                }
              >
                <option selected disabled value="">
                  Seçiniz...
                </option>
                {this.state.clinicians !== null &&
                  this.state.clinicians.map((doctor, index) => (
                    <option key={index} value={doctor.id}>
                      {doctor.name} {doctor.surname}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="form-row" style={{ marginTop: '0' }}>
            <div className="col-md-16 mb-3">
              <label htmlFor="validationDefault01">Doğum Tarihi</label>
              <DatePicker
                onChange={(event) => {
                  this.setState({ patient_birthDate: event._d });
                }}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="tariffs">Tarifler</label>
              <select
                className="custom-select"
                id="tarifName"
                required
                onChange={(event) =>
                  this.setState({ patient_tariff: event.target.value })
                }
              >
                <option selected disabled value="">
                  Seçiniz...
                </option>
                {this.state.tariffs !== null &&
                  this.state.tariffs.map((tarif, index) => (
                    <option key={index} value={tarif._id}>
                      {tarif.tariff}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </form>
      </div>
    );
  };

  renderStep2 = () => {
    return (
      <div className="stepWrapper">
        <form className="was-validated">
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault04">Şehir</label>
              <select
                className="custom-select"
                id="validationDefault04"
                required
                onChange={(event) =>
                  this.setState({ patient_city: event.target.value })
                }
              >
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
              <select
                className="custom-select"
                id="validationDefault04"
                required
                onChange={(event) =>
                  this.setState({ patient_country: event.target.value })
                }
              >
                <option selected disabled value="">
                  Seçiniz...
                </option>
                <option>Türkiye</option>
                <option>UAE</option>
                <option>USA</option>
              </select>
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
                onChange={(event) =>
                  this.setState({ patient_email: event.target.value })
                }
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12 mb-3">
              <label htmlFor="inputAddress">Telefon</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="+09 000 000 0000"
                onChange={(event) =>
                  this.setState({ patient_phone: event.target.value })
                }
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
                onChange={(event) =>
                  this.setState({ patient_address: event.target.value })
                }
              />
            </div>
          </div>
        </form>
      </div>
    );
  };

  renderStep3 = () => {
    return (
      <div className="stepWrapper">
        <CheckMark />
      </div>
    );
  };

  step1Validator() {
    //return a boolean
    return true;
  }

  step2Validator() {
    // return a boolean
    return true;
  }

  step3Validator() {
    // return a boolean
    return true;
  }

  getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return day + '.' + month + '.' + year;
  }

  onFormSubmit = async () => {
    let clinicId = getCookie('user_id');

    let birthdate = this.state.patient_birthDate
      ? this.getFormattedDate(this.state.patient_birthDate)
      : '';

    let patient = {
      name: this.state.patient_name,
      surname: this.state.patient_surname,
      email: this.state.patient_email,
      phone: this.state.patient_phone,
      nationality: this.state.patient_nationality,
      tcNumber: this.state.patient_tcNumber,
      birthDate: birthdate,
      Dentist: this.state.patient_Dentist,
      tariff: this.state.patient_tariff,
      currency: this.state.patient_currency,
      city: this.state.patient_city,
      country: this.state.patient_country,
      address: this.state.patient_address,
    };

    store.AddPatient(clinicId, patient);
  };

  render() {
    const step1Content = this.renderStep1();
    const step2Content = this.renderStep2();
    const step3Content = this.renderStep3();

    return (
      <div>
        <a
          type="button"
          data-toggle="modal"
          data-target="#addUserModal"
          className={'addUser'}
        >
          <img src={AddUserIcon}></img>
        </a>

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
                {this.state.clinicians !== null && (
                  <StepProgressBar
                    startingStep={0}
                    onSubmit={this.onFormSubmit}
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
                        validator: this.step2Validator,
                      },
                      {
                        label: 'Son',
                        subtitle: '100%',
                        name: 'step 3',
                        content: step3Content,
                        validator: this.step3Validator,
                      },
                    ]}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={'patientTable'}>
          {this.state.patientData !== null ? (
            <MDBDataTable
              small
              data={this.state.patientData}
              searchLabel={'Ara'}
              entriesLabel={'Girdileri Göster'}
              info={false}
              noRecordsFoundLabel={'Sonuç Bulunamadı'}
              paginationLabel={['Önceki', 'Sonraki']}
              noBottomColumns={true}
            />
          ) : (
            <p>YUKLENIYOR</p>
          )}
        </div>
      </div>
    );
  }
}

export default Patients;
