import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import CheckMark from "../../components/CheckMark/checkMark";
import DatePicker from "../../components/DatePicker/DatePicker";

/*** Styles ***/
import styles from "./patients.scss";
import AddUserIcon from "../../icons/add-user.svg";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";
import { Link } from "react-router-dom";

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clinicians: null,
      patientData: null,
      patient_name: "",
      patient_surname: "",
      patient_email: "",
      patient_phone: "",
      patient_nationality: "",
      patient_tcNumber: "",
      patient_birthDate: "",
      patient_Dentist: "",
      patient_tariff: "",
      patient_currency: "",
      patient_district: "",
      patient_city: "",
      patient_country: "",
      patient_address: "",
      patient_registryDate: "",
      patient_postalCode: "",
    };
  }

  handleChange = (event) => {
    this.setState({ patient_name: event.target.value });
  };

  componentDidMount = async () => {
    let clinicId = getCookie("user_id");
    let res = await store.getPatients({ clinicId });
    this.setState({ clinicians: res.data.Dentist });
    console.log(this.state.clinicians);
    this.setState({
      patientData: {
        columns: [
          {
            label: "Fotoğraf",
            field: "avatar",
            sort: "asc",
            width: 50,
          },
          {
            label: "İsim",
            field: "name",
            sort: "asc",
            width: 150,
          },
          {
            label: "Soyisim",
            field: "surname",
            sort: "asc",
            width: 150,
          },
          {
            label: "Telefon",
            field: "phone",
            sort: "asc",
            width: 150,
          },
          {
            label: "TC/Pasaport No",
            field: "passport_no",
            sort: "asc",
            width: 150,
          },
          {
            label: "İncele",
            field: "button",
            sort: "asc",
            width: 150,
          },
        ],
        rows: res.data.map((patient) => {
          return {
            ...patient,
            avatar: (
              <div class="tableAvatar">
                <img src={patient.avatar} />
              </div>
            ),
            button: (
              <Link to={`/patients/${patient.id}`} className="tableAvatar">
                <button type="button" class="btn btn-secondary">
                  İncele
                </button>
              </Link>
            ),
          };
        }),
      },
    });
    console.log(this.state.patientData);
  };

  renderStep1 = () => {
    return (
      <div className="stepWrapper">
        <form class="needs-validation" novalidate>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault01">İsim</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Hasan"
                required
                onChange={(event) =>
                  this.setState({ patient_name: event.target.value })
                }
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationDefault02">Soyisim</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                placeholder="Demirkıran"
                required
                onChange={(event) =>
                  this.setState({ patient_surname: event.target.value })
                }
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-9 mb-3">
              <label for="inputTC">TC Kimlik No</label>
              <input
                type="text"
                class="form-control"
                id="inputTC"
                placeholder="000 0000 0000"
                onChange={(event) =>
                  this.setState({ patient_tcNumber: event.target.value })
                }
              />
            </div>
            <div className={"col-md-3 mb-3"} style={{ paddingLeft: "2rem" }}>
              <label for="sexRadio1">Cinsiyet</label>
              <div className={"row"} style={{ marginTop: "0" }}>
                <div class="form-check" style={{ marginRight: "5px" }}>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="sexRadio1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Erkek
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="sexRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    Kadın
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={"form-row"} style={{ marginBottom: "0" }}>
            <div class="col-md-4 mb-3">
              <label for="validationDefault04">Uyruk</label>
              <select
                class="custom-select"
                id="validationDefault04"
                onChange={(event) =>
                  this.setState({ patient_nationality: event.target.value })
                }
                required
              >
                <option selected disabled value="">
                  Seçiniz...
                </option>
                <option>Türk</option>
                <option>Yabancı</option>
              </select>
            </div>
            <div class="col-md-8 mb-3">
              <label for="dentistName">Diş Hekimi</label>
              <input
                id="dentistName"
                type="text"
                class="form-control"
                placeholder="Diş Hekimi"
                onChange={(event) =>
                  this.setState({ patient_Dentist: event.target.value })
                }
              />
            </div>
          </div>
          <div class="form-row" style={{ marginTop: "0" }}>
            <div class="col-md-6 mb-3">
              <label for="validationDefault01">Doğum Tarihi</label>
              <DatePicker
                onChange={(date) =>
                  this.setState({ patient_birthDate: date._d })
                }
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationDefault04">Tarife</label>
              <select
                class="custom-select"
                id="validationDefault04"
                required
                onChange={(event) =>
                  this.setState({ patient_tariff: event.target.value })
                }
              >
                <option selected disabled value="">
                  Seçiniz...
                </option>
                <option>TDB 2020</option>
                <option>TDB 2021</option>
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
        <form class="was-validated">
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault04">İlçe</label>
              <select
                class="custom-select"
                id="validationDefault04"
                required
                onChange={(event) =>
                  this.setState({ patient_district: event.target.value })
                }
              >
                <option selected disabled value="">
                  Seçiniz...
                </option>
                <option>Başakşehir</option>
                <option>Sarıyer</option>
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationDefault04">Şehir</label>
              <select
                class="custom-select"
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

          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault04">Ülke</label>
              <select
                class="custom-select"
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
            <div class="col-md-6 mb-3">
              <label for="validationDefault05">Posta Kodu</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault05"
                required
                onChange={(event) =>
                  this.setState({ patient_postalCode: event.target.value })
                }
              />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1">E-mail adresi</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="hasan@gmail.com"
                onChange={(event) =>
                  this.setState({ patient_email: event.target.value })
                }
              />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="inputAddress">Telefon1</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="+09 000 000 0000"
                onChange={(event) =>
                  this.setState({ patient_phone: event.target.value })
                }
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationDefault04">Kur</label>
              <select
                class="custom-select"
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
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-12 mb-3">
              <label for="exampleFormControlInput1">Adres</label>
              <input
                type="text"
                class="form-control"
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

  onFormSubmit = () => {
    // let clinicId = getCookie("user_id");
    // let res = await store.AddPatients( clinicId, this.state.patient );

    const patient = {
      name: this.state.patient_name,
      surname: this.state.patient_surname,
      email: this.state.patient_email,
      phone: this.state.patient_phone,
      nationality: this.state.patient_nationality,
      tcNumber: this.state.patient_tcNumber,
      birthDate: this.state.patient_birthDate,
      Dentist: this.state.patient_Dentist,
      tariff: this.state.patient_tariff,
      currency: this.state.patient_currency,
      district: this.state.patient_district,
      city: this.state.patient_city,
      country: this.state.patient_country,
      address: this.state.patient_address,
      postalCode: this.state.patient_postalCode,
    };

    console.log(patient);
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
          className={"addUser"}
        >
          <img src={AddUserIcon}></img>
        </a>

        <div
          class="modal fade"
          id="addUserModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Hasta Ekle
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <StepProgressBar
                  startingStep={0}
                  onSubmit={this.onFormSubmit}
                  previousBtnName={"Önceki"}
                  nextBtnName={"Sonraki"}
                  steps={[
                    {
                      label: "Kişisel Bilgiler",
                      subtitle: "0%",
                      name: "step 1",
                      content: step1Content,
                    },
                    {
                      label: "İletişim Bilgileri",
                      subtitle: "50%",
                      name: "step 2",
                      content: step2Content,
                      validator: this.step2Validator,
                    },
                    {
                      label: "Son",
                      subtitle: "100%",
                      name: "step 3",
                      content: step3Content,
                      validator: this.step3Validator,
                    },
                  ]}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Kapat
                </button>
                <button type="button" class="btn btn-primary">
                  Hasta Ekle
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={"patientTable"}>
          {this.state.patientData !== null ? (
            <MDBDataTable
              striped
              bordered
              small
              data={this.state.patientData}
              searchLabel={"Ara"}
              entriesLabel={"Girdileri Göster"}
              info={false}
              paginationLabel={["Önceki", "Sonraki"]}
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
