/* eslint-disable no-console */
import React, { Component } from 'react';
import store from '../../store';
import { MDBDataTable } from 'mdbreact';
import { getCookie } from '../../utils/cookie';

/*** Styles ***/
import './patientdetail.scss';
import PaymentIcon from '../../icons/credit-cards-payment.svg';
import NotesIcon from '../../icons/writing.svg';

/*** Components ***/
import DatePicker from '../../components/DatePicker/DatePicker';

/*** Teeth Images ***/
import tooth1 from '../../assets/images/tooth/tooth-1.jpg';
import tooth2 from '../../assets/images/tooth/tooth-2.jpg';
import tooth3 from '../../assets/images/tooth/tooth-3.jpg';
import tooth4 from '../../assets/images/tooth/tooth-4.jpg';
import tooth5 from '../../assets/images/tooth/tooth-5.jpg';
import tooth6 from '../../assets/images/tooth/tooth-6.jpg';
import tooth7 from '../../assets/images/tooth/tooth-7.jpg';
import tooth8 from '../../assets/images/tooth/tooth-8.jpg';
import tooth9 from '../../assets/images/tooth/tooth-9.jpg';
import tooth10 from '../../assets/images/tooth/tooth-10.jpg';
import tooth11 from '../../assets/images/tooth/tooth-11.jpg';
import tooth12 from '../../assets/images/tooth/tooth-12.jpg';
import tooth13 from '../../assets/images/tooth/tooth-13.jpg';
import tooth14 from '../../assets/images/tooth/tooth-14.jpg';
import tooth15 from '../../assets/images/tooth/tooth-15.jpg';
import tooth16 from '../../assets/images/tooth/tooth-16.jpg';
import tooth17 from '../../assets/images/tooth/tooth-17.jpg';
import tooth18 from '../../assets/images/tooth/tooth-18.jpg';
import tooth19 from '../../assets/images/tooth/tooth-19.jpg';
import tooth20 from '../../assets/images/tooth/tooth-20.jpg';
import tooth21 from '../../assets/images/tooth/tooth-21.jpg';
import tooth22 from '../../assets/images/tooth/tooth-22.jpg';
import tooth23 from '../../assets/images/tooth/tooth-23.jpg';
import tooth24 from '../../assets/images/tooth/tooth-24.jpg';
import tooth25 from '../../assets/images/tooth/tooth-25.jpg';
import tooth26 from '../../assets/images/tooth/tooth-26.jpg';
import tooth27 from '../../assets/images/tooth/tooth-27.jpg';
import tooth28 from '../../assets/images/tooth/tooth-28.jpg';
import tooth29 from '../../assets/images/tooth/tooth-29.jpg';
import tooth30 from '../../assets/images/tooth/tooth-30.jpg';
import tooth31 from '../../assets/images/tooth/tooth-31.jpg';
import tooth32 from '../../assets/images/tooth/tooth-32.jpg';
import ContractIMG from '../../assets/icons/contract.svg';
import ProformaIMG from '../../assets/icons/proforma.svg';
import Modal from '../../components/Modal/modal';

class PatientDetail extends Component {
  constructor() {
    super();
    this.state = {
      patient: null,
      selectedTab: 0,
      modalShow: false,
      selectedPlan: 'Planlama 0',
      selectedTooth: '',
      treatmentPlan0Data: null,
      treatmentPlan1Data: null,
      treatmentData: null,
      treatmentList: null,
      paidTreatmentData: null,
      notesForPatientData: null,
      tariffs: null,
      tarifList: null,
      selectedTarif: null,
      payments: null,
      clinicians: null,
      modalPaymentDate: null,
      modalPaymentType: null,
      modalPrice: null,
      modalCurrency: null,
      modalDescription: null,
      modalDentist: null,
      newNote: null,

      // ! about patient details

      patientName: '',
      patientId: '',
      patientSurname: '',
      patientTCNumber: '',
      patientGender: '',
      patientNationality: '',
      patientDentist: '',
      patientBirthday: '',
      patientDistrict: '',
      patientCity: '',
      patientCountry: '',
      patientPostCode: '',
      patientEmail: '',
      patientNumberOne: '',
      patientNumberTwo: '',
      patientAddress: '',
    };
  }

  fillTreatmentTables = () => {
    this.setState({
      treatmentPlan0Data: {
        columns: [
          {
            label: 'Tarih',
            field: 'tarih',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Dis',
            field: 'dis',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Tedavi',
            field: 'tedavi',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Dis Hekimi',
            field: 'dis_hekimi',
            sort: 'asc',
            width: 70,
          },
          {
            label: 'Toplam',
            field: 'toplam',
            sort: 'asc',
            width: 80,
          },
          {
            label: 'TRY/USD',
            field: 'para_birimi',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'T. Aktar',
            field: 'button1',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Sil',
            field: 'button2',
            sort: 'asc',
            width: 150,
          },
        ],
        rows: [
          {
            tarih: '12.01.2020',
            dis: '24',
            tedavi: 'Komposit Dolgu',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 250,
            para_birimi: 'TRY',
            button1: (
              <button type="button" className="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" className="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: '24.03.2020',
            dis: '12',
            tedavi: 'Kanal Tedavisi',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 250,
            para_birimi: 'TRY',
            button1: (
              <button type="button" className="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" className="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: '02.02.2020',
            dis: '26',
            tedavi: 'Koplikasyonlu Dis cekimi',
            dis_hekimi: 'Hasan Demirkiran',
            toplam: 450,
            para_birimi: 'TRY',
            button1: (
              <button type="button" className="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" className="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: '16.03.2020',
            dis: '31',
            tedavi: 'Implant',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 2500,
            para_birimi: 'TRY',
            button1: (
              <button type="button" className="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" className="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: '08.08.2020',
            dis: '05',
            tedavi: 'Komposit Dolgu',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 250,
            para_birimi: 'TRY',
            button1: (
              <button type="button" className="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" className="btn btn-danger">
                Sil
              </button>
            ),
          },
        ],
      },
    });
    this.setState({
      treatmentPlan1Data: {
        columns: [
          {
            label: 'Tarih',
            field: 'tarih',
            sort: 'asc',
            width: 50,
          },
          {
            label: 'Dis',
            field: 'dis',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Tedavi',
            field: 'tedavi',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Dis Hekimi',
            field: 'dis_hekimi',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Toplam',
            field: 'toplam',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'TRY/USD',
            field: 'para_birimi',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'T. Aktar',
            field: 'button1',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Sil',
            field: 'button2',
            sort: 'asc',
            width: 150,
          },
        ],
        rows: [
          {
            tarih: '12.01.2020',
            dis: '24',
            tedavi: 'Komposit Dolgu',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 250,
            para_birimi: 'TRY',
            button1: (
              <button type="button" className="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" className="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: '24.03.2020',
            dis: '12',
            tedavi: 'Kanal Tedavisi',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 250,
            para_birimi: 'TRY',
            button1: (
              <button type="button" className="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" className="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: '02.02.2020',
            dis: '26',
            tedavi: 'Koplikasyonlu Dis cekimi',
            dis_hekimi: 'Hasan Demirkiran',
            toplam: 450,
            para_birimi: 'TRY',
            button1: (
              <button type="button" className="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" className="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: '16.03.2020',
            dis: '31',
            tedavi: 'Implant',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 2500,
            para_birimi: 'TRY',
            button1: (
              <button type="button" className="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" className="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: '08.08.2020',
            dis: '05',
            tedavi: 'Komposit Dolgu',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 250,
            para_birimi: 'TRY',
            button1: (
              <button type="button" className="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" className="btn btn-danger">
                Sil
              </button>
            ),
          },
        ],
      },
    });
    this.setState({
      paidTreatmentData: {
        columns: [
          {
            label: 'Tarih',
            field: 'tarih',
            sort: 'asc',
            width: 170,
          },
          {
            label: 'Ödeme Tipi',
            field: 'odeme_tipi',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Dis Hekimi',
            field: 'dis_hekimi',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Tutar',
            field: 'tutar',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'TRY/USD',
            field: 'para_birimi',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Yazdır',
            field: 'button_yazdir',
            sort: 'asc',
            width: 100,
          },
        ],
        rows: this.state.payments.map((payment) => {
          return {
            tarih: payment.paymentTime,
            odeme_tipi: payment.paymentType,
            dis_hekimi: `Dr. ${payment.Dentist.name} ${payment.Dentist.surname}`,
            tutar: payment.amount,
            para_birimi: payment.currency,
            button_yazdir: (
              <button type="button" className="btn btn-secondary">
                Yazdir
              </button>
            ),
          };
        }),
      },
    });
    this.setState({
      notesForPatientData: {
        columns: [
          {
            label: 'Tarih',
            field: 'tarih',
            sort: 'asc',
          },
          {
            label: 'Not',
            field: 'not',
            sort: 'asc',
          },
          {
            label: 'Düzenle',
            field: 'button_düzenle',
            sort: 'asc',
          },
          {
            label: 'Sil',
            field: 'button_sil',
            sort: 'asc',
          },
        ],
        rows: this.state.patient.notes.map((note) => {
          return {
            tarih: note.created.substr(1, 10),
            not: note.body,
            button_düzenle: (
              <button type="button" className="btn btn-secondary">
                Duzenle
              </button>
            ),
            button_sil: (
              <button
                type="button"
                className="btn btn-danger"
                onClick={async () => {
                  await store.clinicDeleteNote(
                    getCookie('user_id'),
                    this.state.patient.id,
                    note._id
                  );
                  window.location.reload();
                }}
              >
                Sil
              </button>
            ),
          };
        }),
      },
    });
    this.setState({
      treatmentData: {
        columns: [
          {
            label: 'Tarih',
            field: 'tarih',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Dis',
            field: 'dis',
            sort: 'asc',
            width: 50,
          },
          {
            label: 'Tedavi',
            field: 'tedavi',
            sort: 'asc',
            width: 250,
          },
          {
            label: 'Dis Hekimi',
            field: 'dis_hekimi',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Toplam',
            field: 'toplam',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'TRY/USD',
            field: 'para_birimi',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Sil',
            field: 'button2',
            sort: 'asc',
            width: 50,
          },
        ],
        rows: this.state.patient.treatments.map((treatment) => {
          return {
            tarih: treatment.createdAt,
            dis: treatment.teeth,
            tedavi: treatment.treatment,
            dis_hekimi: `Dr. ${treatment.Dentist.name} ${treatment.Dentist.surname}`,
            toplam: treatment.price,
            para_birimi: treatment.currency,
            button2: (
              <button type="button" className="btn btn-danger">
                Sil
              </button>
            ),
          };
        }),
      },
    });
  };

  fillTreatmentList = (list) => {
    this.setState({
      treatmentList: {
        columns: [
          {
            label: 'Tedavi',
            field: 'treatment',
            sort: 'asc',
            width: 270,
          },
          {
            label: 'Toplam',
            field: 'price',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'P. Birimi',
            field: 'currency',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Ekle',
            field: 'button1',
            sort: 'asc',
            width: 70,
          },
        ],
        rows: list.map((treatment) => {
          return {
            treatment: treatment.treatment,
            price: treatment.price,
            currency: treatment.currency,
            button1: (
              <button type="button" className="btn btn-success">
                Ekle
              </button>
            ),
          };
        }),
      },
    });
  };

  componentDidMount = async () => {
    // let clinicResponse = await store.getClinicDetail({
    //   clinicId: getCookie('user_id'),
    // });
    let { match } = this.props;
    let clinicId = getCookie('user_id');
    let patientId = match.params.id;
    let tariffs = await store.getClinicTariffs({ clinicId });
    let clinic = await store.getClinicDetail({ clinicId });

    this.setState({ tariffs: tariffs.data });
    this.setState({ clinicians: clinic.data.Dentist });

    let patientDetails = await store.getPatientsDetail({ clinicId, patientId });
    let payments = await store.getPatientPayments(clinicId, patientId);

    console.log(payments);

    // ! about patient details
    let pt = patientDetails.data;
    this.setState({
      patientId: pt?.id,
      patientName: pt?.name,
      patientSurname: pt?.surname,
      patientTCNumber: pt?.tcNumber,
      patientGender: pt?.name,
      patientNationality: pt?.nationality,
      patientDentist: `${pt?.Dentist.name} ${pt?.Dentist.surname}`,
      patientBirthday: pt?.birthDate,
      patientDistrict: pt?.district,
      patientCity: pt?.city,
      patientCountry: pt?.country,
      patientPostCode: pt?.postCode,
      patientEmail: pt?.email,
      patientNumberOne: pt?.phone,
      patientNumberTwo: pt?.phone2,
      patientAddress: pt?.address,
    });

    this.setState({ patient: patientDetails.data });
    this.setState({ payments: payments.data });

    this.fillTreatmentTables();
  };

  setSelectedTab = (index) => {
    this.setState({ selectedTab: index });
  };

  renderPatientInfoTab = () => {
    let { patient } = this.state;

    return (
      <div className={'aboutTab'}>
        <form>
          <div className={'item patientInfoPart'}>
            <div className="GenerallyTitle">Kişisel Bilgiler</div>
            <div className={'content'}>
              <div className="form-row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault01">İsim</label>
                  <input
                    type="text"
                    value={this.state.patientName}
                    className="form-control"
                    id="validationDefault01"
                    onChange={(e) =>
                      this.setState({ patientName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault02">Soyisim</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault02"
                    value={this.state.patientSurname}
                    onChange={(e) =>
                      this.setState({ patientSurname: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="inputTC">TC Kimlik No</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputTC"
                    value={this.state.patientTCNumber}
                    onChange={(e) =>
                      this.setState({ patientTCNumber: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className={'form-row'} style={{ marginBottom: '0' }}>
                <div className={'col-md-3 mb-3'}>
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
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
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
                        disabled
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        Kadın
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault04">Uyruk</label>
                  <select
                    className="custom-select"
                    id="validationDefault04"
                    value={this.state.patientNationality}
                    onChange={(e) =>
                      this.setState({ patientNationality: e.target.value })
                    }
                    required
                  >
                    {/* <option
                      selected
                      disabled
                      value={this.state.patientNationality}
                    ></option> */}
                    <option>Türk</option>
                    <option>Yabancı</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="dentistName">Diş Hekimi</label>
                  <input
                    id="dentistName"
                    type="text"
                    className="form-control"
                    value={this.state.patientDentist}
                    onChange={(e) =>
                      this.setState({ patientDentist: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row" style={{ marginTop: '0' }}>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationDefault01">Doğum Tarihi</label>
                  {patient?.birthDate && (
                    <DatePicker
                      onChange={(e) => this.setState({ patientBirthday: e })}
                      initialValue={new Date(this.state.patientBirthday)}
                    />
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationDefault02">Kayıt Tarihi</label>
                  {patient?.createdAt && (
                    <DatePicker initialValue={patient?.createdAt} />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={'item patientInfoPart'}>
            <div className={'GenerallyTitle'}>İletişim Bilgileri</div>
            <div className={'content'}>
              <div className="form-row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="ilce">İlçe</label>
                  <input
                    id="ilce"
                    type="text"
                    className="form-control"
                    value={this.state.patientDistrict}
                    onChange={(e) =>
                      this.setState({ patientDistrict: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="Sehir">Şehir</label>
                  <input
                    id="Sehir"
                    type="text"
                    className="form-control"
                    value={this.state.patientCity}
                    onChange={(e) =>
                      this.setState({ patientCity: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="ulke">Ülke</label>
                  <input
                    id="ulke"
                    type="text"
                    className="form-control"
                    value={this.state.patientCountry}
                    onChange={(e) =>
                      this.setState({ patientCountry: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault05">Posta Kodu</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault05"
                    required
                    value={this.state.patientPostCode}
                    onChange={(e) =>
                      this.setState({ patientPostCode: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="exampleFormControlInput1">Email adresi</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={this.state.patientEmail}
                    onChange={(e) =>
                      this.setState({ patientEmail: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="inputAddress">Telefon</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    value={this.state.patientNumberOne}
                    onChange={(e) =>
                      this.setState({ patientNumberOne: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault05">2. Telefon</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault05"
                    value={this.state.patientNumberTwo}
                    onChange={(e) =>
                      this.setState({ patientNumberTwo: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-8 mb-3">
                  <label htmlFor="exampleFormControlInput1">Adres</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={this.state.patientAddress}
                    onChange={(e) =>
                      this.setState({ patientAddress: e.target.value })
                    }
                  />
                </div>
                <div className="d-flex align-items-end justify-content-center mb-3 ml-3 col-md-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      // eslint-disable-next-line no-unused-vars
                      let payload = {
                        id: this.state.patientId,
                        country: this.state.patientCountry,
                        city: this.state.patientCity,
                        address: this.state.patientAddress,
                        phone: this.state.patientNumberOne,
                        phone2: this.state.patientNumberTwo,
                        tcNumber: this.state.patientTCNumber,
                        postCode: this.state.patientPostCode,
                        email: this.state.patientEmail,
                        birthDate: this.state.patientBirthday,
                      };
                      store.updateClinicPatientProfile(
                        getCookie('user_id'),
                        this.state.patientId
                      );
                    }}
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };

  renderTreatmentPlanningTab = () => {
    return (
      <div>
        <div className={'createAppointment'}>
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle plansDropdown"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.selectedPlan}
            </a>

            <div
              className="dropdown-menu myDropdownMenu"
              aria-labelledby="dropdownMenuLink"
            >
              {this.state.selectedPlan === 'Planlama 0' ? (
                <a
                  className="dropdown-item disabled"
                  href="#"
                  onClick={() => {
                    this.setState({ selectedPlan: 'Planlama 0' });
                  }}
                  aria-disabled="true"
                >
                  Planlama 0
                </a>
              ) : (
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    this.setState({ selectedPlan: 'Planlama 0' });
                  }}
                >
                  Planlama 0
                </a>
              )}

              {this.state.selectedPlan === 'Planlama 1' ? (
                <a
                  className="dropdown-item disabled"
                  href="#"
                  onClick={() => {
                    this.setState({ selectedPlan: 'Planlama 1' });
                  }}
                  aria-disabled="true"
                >
                  Planlama 1
                </a>
              ) : (
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    this.setState({ selectedPlan: 'Planlama 1' });
                  }}
                >
                  Planlama 1
                </a>
              )}

              {this.state.selectedPlan === 'Tedavi' ? (
                <a
                  className="dropdown-item disabled"
                  href="#"
                  onClick={() => {
                    this.setState({ selectedPlan: 'Tedavi' });
                  }}
                  aria-disabled="true"
                >
                  Tedavi
                </a>
              ) : (
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    this.setState({ selectedPlan: 'Tedavi' });
                  }}
                >
                  Tedavi
                </a>
              )}
            </div>
          </div>
        </div>

        {this.state.selectedPlan === 'Planlama 0' && (
          <div>
            {this.renderTeeth()}
            {this.renderNewTreatmentButton(true)}
            {this.renderTreatmentPlan0Table()}
            {this.renderUnderTablebuttons()}
          </div>
        )}
        {this.state.selectedPlan === 'Planlama 1' && (
          <div>
            {this.renderTeeth()}
            {this.renderNewTreatmentButton(true)}
            {this.renderTreatmentPlan1Table()}
          </div>
        )}
        {this.state.selectedPlan === 'Tedavi' && (
          <div>
            {this.renderTeeth()}
            {this.renderNewTreatmentButton(false)}
            {this.renderTreatmentTable()}
          </div>
        )}
      </div>
    );
  };

  renderPaymentTab = () => {
    return (
      <div>
        <div className={'row'}>
          <div className={'paymentTreatmentTableWrapper'}>
            <h2 className={'tableHeader'}>Tedaviler</h2>
            {this.renderTreatmentTable()}
          </div>
          <div className={'paymentPaidTreatmentTableWrapper'}>
            {/* ADD payment Button */}
            <a
              type="button"
              data-toggle="modal"
              data-target="#addUserModal"
              className={'addPayment'}
            >
              Ödeme Ekle<img src={PaymentIcon}></img>
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
                      Ödeme Ekle
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
                    <form>
                      <div className="form-row" style={{ marginTop: '0' }}>
                        <div className="col-md-6 mb-3">
                          <label>Ödeme Tarihi</label>
                          <DatePicker
                            onChange={(event) => {
                              this.setState({ modalPaymentDate: event._d });
                            }}
                          />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                          <label htmlFor="exampleFormControlSelect1">
                            Ödeme Tipi
                          </label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            required
                            onChange={(event) =>
                              this.setState({
                                modalPaymentType: event.target.value,
                              })
                            }
                          >
                            <option selected value="Nakit">
                              Nakit
                            </option>
                            <option value="Kredi Kartı">Kredi Kartı</option>
                            <option value="Senet">Senet</option>
                            <option value="Havale">Havale</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="formGroupExampleInput">Tutar</label>
                          <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            onChange={(event) =>
                              this.setState({ modalPrice: event.target.value })
                            }
                          />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                          <label htmlFor="exampleFormControlSelect2">
                            Para Birimi
                          </label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect2"
                            onChange={(event) =>
                              this.setState({
                                modalCurrency: event.target.value,
                              })
                            }
                          >
                            <option selected value="TRY">
                              TRY
                            </option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-12 mb-3">
                          <label htmlFor="exampleFormControlTextarea1">
                            Açıklama
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            onChange={(event) =>
                              this.setState({
                                modalDescription: event.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-12 mb-3">
                          <label htmlFor="exampleFormControlSelect2">
                            Diş Hekimi
                          </label>
                          <select
                            className="form-control"
                            reuired
                            onChange={(event) =>
                              this.setState({
                                modalDentist: event.target.value,
                              })
                            }
                          >
                            <option selected disabled value="">
                              Seçiniz...
                            </option>
                            {this.state.clinicians !== null &&
                              this.state.clinicians.map((clinician) => (
                                <option key={clinician.id} value={clinician.id}>
                                  {clinician.name} {clinician.surname}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Kapat
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={async () => {
                        await store.clinicAddPayment(
                          getCookie('user_id'),
                          this.state.patient.id,
                          {
                            paymentTime: this.getFormattedDate(
                              this.state.modalPaymentDate
                            ),
                            paymentType: this.state.modalPaymentType,
                            amount: this.state.modalPrice,
                            currency: this.state.modalCurrency,
                            description: this.state.modalDescription,
                            Dentist: this.state.modalDentist,
                          }
                        );
                        window.location.reload();
                      }}
                    >
                      Ödeme Ekle
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h2 className={'tableHeader'}>Alınan Paralar</h2>
            {this.renderPaidtreatmentsTable()}
          </div>
        </div>
      </div>
    );
  };

  renderNotesTab = () => {
    return (
      <div>
        <div className={'patientNotesWrapper'}>
          {/* ADD payment Button */}
          <a
            type="button"
            data-toggle="modal"
            data-target="#addUserModal"
            className={'addNotes'}
          >
            Not Ekle<img src={NotesIcon}></img>
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
                    Not Ekle
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
                <div className="modal-body container">
                  <form>
                    <div className="form-row" style={{ marginTop: '0' }}></div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Lütfen Not Ekleyiniz.
                      </label>
                      <textarea
                        onChange={(e) => {
                          this.setState({ newNote: e.target.value });
                        }}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="8"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Kapat
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={async () => {
                      await store.clinicAddNote(
                        getCookie('user_id'),
                        this.state.patient.id,
                        { body: this.state.newNote }
                      );
                      window.location.reload();
                    }}
                  >
                    Not Ekle
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h2 className={'tableHeader'}>Notlar</h2>
          {this.renderPatientsNotes()}
        </div>
      </div>
    );
  };

  renderTeeth = () => {
    return (
      <div className={'teeth'}>
        <div className={'row teethrow'}>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth1' })}
          >
            <img src={tooth1} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth2' })}
          >
            <img src={tooth2} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth3' })}
          >
            <img src={tooth3} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth4' })}
          >
            <img src={tooth4} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth5' })}
          >
            <img src={tooth5} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth6' })}
          >
            <img src={tooth6} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth7' })}
          >
            <img src={tooth7} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth8' })}
          >
            <img src={tooth8} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth9' })}
          >
            <img src={tooth9} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth10' })}
          >
            <img src={tooth10} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth11' })}
          >
            <img src={tooth11} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth12' })}
          >
            <img src={tooth12} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth13' })}
          >
            <img src={tooth13} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth14' })}
          >
            <img src={tooth14} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth15' })}
          >
            <img src={tooth15} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth16' })}
          >
            <img src={tooth16} />
          </button>
        </div>
        <div className={'row teethrow'}>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth17' })}
          >
            <img src={tooth17} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth18' })}
          >
            <img src={tooth18} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth19' })}
          >
            <img src={tooth19} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth20' })}
          >
            <img src={tooth20} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth21' })}
          >
            <img src={tooth21} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth22' })}
          >
            <img src={tooth22} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth23' })}
          >
            <img src={tooth23} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth24' })}
          >
            <img src={tooth24} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth25' })}
          >
            <img src={tooth25} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth26' })}
          >
            <img src={tooth26} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth27' })}
          >
            <img src={tooth27} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth28' })}
          >
            <img src={tooth28} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth29' })}
          >
            <img src={tooth29} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth30' })}
          >
            <img src={tooth30} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth31' })}
          >
            <img src={tooth31} />
          </button>
          <button
            className={'teethClass'}
            onClick={() => this.setState({ selectedTooth: 'tooth32' })}
          >
            <img src={tooth32} />
          </button>
        </div>
      </div>
    );
  };

  renderTreatmentPlan0Table = () => {
    return (
      <div>
        {this.state.treatmentPlan0Data !== null ? (
          <MDBDataTable
            className={'myTableClass'}
            striped
            bordered
            small
            searchLabel={'Ara'}
            entriesLabel={'Girdileri Göster'}
            info={false}
            paginationLabel={['Önceki', 'Sonraki']}
            data={this.state.treatmentPlan0Data}
          />
        ) : (
          <p>YUKLENIYOR</p>
        )}
      </div>
    );
  };
  renderTreatmentPlan1Table = () => {
    return (
      <div>
        {this.state.treatmentPlan1Data !== null ? (
          <MDBDataTable
            striped
            bordered
            small
            searchLabel={'Ara'}
            entriesLabel={'Girdileri Göster'}
            info={false}
            data={this.state.treatmentPlan1Data}
          />
        ) : (
          <p>YUKLENIYOR</p>
        )}
      </div>
    );
  };
  renderTreatmentTable = () => {
    return (
      <div>
        {this.state.treatmentData !== null ? (
          <MDBDataTable
            striped
            scrollY
            maxHeight="50vh"
            bordered
            small
            searchLabel={'Ara'}
            entriesLabel={'Girdileri Göster'}
            paginationLabel={['Önceki', 'Sonraki']}
            info={false}
            data={this.state.treatmentData}
          />
        ) : (
          <p>YUKLENIYOR</p>
        )}
      </div>
    );
  };

  renderTreatmentList = () => {
    return (
      <div>
        {this.state.tariffs !== null ? (
          <>
            <div className="col-md-6 mb-3">
              <label htmlFor="tariffs">Tarifler</label>
              <select
                className="custom-select"
                id="tarifName"
                required
                onChange={(event) => {
                  this.setState({ selectedTarif: event.target.value });
                  this.setState({
                    tarifList: this.state.tariffs.filter(
                      (tarif) => tarif._id === event.target.value
                    ),
                  });
                  this.fillTreatmentList(
                    this.state.tariffs.filter(
                      (tarif) => tarif._id === event.target.value
                    )[0]?.list
                  );
                }}
              >
                <option selected disabled value="">
                  Seçiniz...
                </option>
                {this.state.tariffs !== null &&
                  this.state.tariffs.map((tarif) => (
                    <option key={tarif.id} value={tarif._id}>
                      {tarif.tariff}
                    </option>
                  ))}
              </select>
            </div>
            {this.state.tarifList !== null ? (
              <MDBDataTable
                striped
                paging={false}
                scrollY
                maxHeight="50vh"
                bordered
                small
                searchLabel={'Ara'}
                entriesLabel={'Girdileri Göster'}
                paginationLabel={['Önceki', 'Sonraki']}
                info={false}
                data={this.state.treatmentList}
              />
            ) : (
              <p>Lutfen bir tarif seciniz</p>
            )}
          </>
        ) : (
          <p>YUKLENIYOR</p>
        )}
      </div>
    );
  };

  renderPaidtreatmentsTable = () => {
    return (
      <div>
        {this.state.paidTreatmentList !== null ? (
          <MDBDataTable
            striped
            scrollY
            maxHeight="50vh"
            bordered
            small
            searchLabel={'Ara'}
            entriesLabel={'Girdileri Göster'}
            paginationLabel={['Önceki', 'Sonraki']}
            info={false}
            data={this.state.paidTreatmentData}
          />
        ) : (
          <p>YUKLENIYOR</p>
        )}
      </div>
    );
  };

  renderPatientsNotes = () => {
    return (
      <div>
        {this.state.notesForPatientData !== null ? (
          <MDBDataTable
            striped
            scrollY
            maxHeight="50vh"
            bordered
            small
            searchLabel={'Ara'}
            entriesLabel={'Girdileri Göster'}
            paginationLabel={['Önceki', 'Sonraki']}
            info={false}
            data={this.state.notesForPatientData}
          />
        ) : (
          <p>YUKLENIYOR</p>
        )}
      </div>
    );
  };

  renderNewTreatmentButton = (isPlan) => {
    return (
      <div>
        {this.state.selectedTooth !== '' ? (
          <div>
            {isPlan ? (
              <button
                type="button"
                className="btn btn-success addTreatmentButton"
                data-toggle="modal"
                onClick={() => this.setState({ modalShow: true })}
                data-target="#newTreatmentPlan"
              >
                Yeni Tedavi Plani Ekle
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success addTreatmentButton"
                data-toggle="modal"
                onClick={() => this.setState({ modalShow: true })}
                data-target="#newTreatmentPlan"
              >
                Yeni Tedavi Ekle
              </button>
            )}
          </div>
        ) : (
          <span
            className="d-inline-block"
            data-toggle="popover"
            data-content="Lütfen, önce bir diş seçimi yapınız."
          >
            <button
              className="btn btn-secondary addTreatmentButton"
              style={{ pointerEvents: null }}
              type="button"
              disabled
            >
              Lütfen, önce diş seçiniz.
            </button>
          </span>
        )}
        <Modal
          modalShow={this.state.modalShow}
          modalHandleClose={() => this.setState({ modalShow: false })}
          modalId={'newTreatmentPlan'}
          modalFooterButtonTitle={'Kapat'}
          modalFooterSecondButtonVisibility={false}
          modalTitle={'Tedavi Plani Seciniz'}
        >
          {this.renderTreatmentList()}
        </Modal>
      </div>
    );
  };

  renderUnderTablebuttons = () => {
    return (
      <div>
        <a
          href="#"
          className={'underTableIcon1'}
          data-toggle="tooltip"
          title="Make Contract"
        >
          <img src={ContractIMG}></img>
        </a>
        <a
          href="#"
          className={'underTableIcon2'}
          data-toggle="tooltip"
          title="Make Proforma"
        >
          <img src={ProformaIMG}></img>
        </a>
      </div>
    );
  };

  render() {
    let { patient, selectedTab } = this.state;

    return (
      <div className={'Profile'}>
        <div className={'patientProfileCard'}>
          <img className={'profileImage'} src={patient?.avatar} alt="avatar" />
        </div>

        <div className={'profileName'}>{patient?.name}</div>
        <div className={'location'}>{patient?.email ? patient.email : ''}</div>

        <div className={'tabs'}>
          <div
            onClick={() => this.setSelectedTab(0)}
            className={`${'tab'} ${selectedTab === 0 ? 'selected' : ''}`}
          >
            Hasta Bilgileri
          </div>
          <div
            onClick={() => this.setSelectedTab(1)}
            className={`${'tab'} ${selectedTab === 1 ? 'selected' : ''}`}
          >
            Tedavi ve Planlama
          </div>
          <div
            onClick={() => this.setSelectedTab(2)}
            className={`${'tab'} ${selectedTab === 2 ? 'selected' : ''}`}
          >
            Ödeme
          </div>
          <div
            onClick={() => this.setSelectedTab(3)}
            className={`${'tab'} ${selectedTab === 3 ? 'selected' : ''}`}
          >
            Not
          </div>
        </div>

        <div>
          {selectedTab === 0 && this.renderPatientInfoTab()}
          {selectedTab === 1 && this.renderTreatmentPlanningTab()}
          {selectedTab === 2 && this.renderPaymentTab()}
          {selectedTab === 3 && this.renderNotesTab()}
        </div>
      </div>
    );
  }

  getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return day + '.' + month + '.' + year;
  }
}

export default PatientDetail;
