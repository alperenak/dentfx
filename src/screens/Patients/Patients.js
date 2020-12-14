import React, { Component } from "react";
import { MDBDataTable } from 'mdbreact';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import CheckMark from '../../components/CheckMark/checkMark'
import DatePicker from "../../components/DatePicker/DatePicker"

/*** Styles ***/
import styles from "./patients.scss";
import AddUserIcon from "../../icons/add-user.svg"

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";
import { Link } from "react-router-dom";

const Step1 = () => {
  return (
    <div className="stepWrapper">
      <form class="needs-validation" novalidate>

        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationDefault01">İsim</label>
            <input type="text" class="form-control" id="validationDefault01" placeholder="Hasan" required />
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationDefault02">Soyisim</label>
            <input type="text" class="form-control" id="validationDefault02" placeholder="Demirkıran" required />
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-9 mb-3">
            <label for="inputTC">TC Kimlik No</label>
            <input type="text" class="form-control" id="inputTC" placeholder="000 0000 0000" />
          </div>
          <div className={"col-md-3 mb-3"} style={{paddingLeft: "2rem"}}>
            <label for="sexRadio1">Cinsiyet</label>
            <div className={"row"} style={{ marginTop: "0" }}>
              <div class="form-check" style={{ marginRight: "5px" }}>
                <input class="form-check-input" type="radio" name="exampleRadios" id="sexRadio1" value="option1" checked />
                <label class="form-check-label" for="exampleRadios1">
                  Erkek
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="sexRadio2" value="option2" />
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
            <select class="custom-select" id="validationDefault04" required>
              <option selected disabled value="">Seçiniz...</option>
              <option>Türk</option>
              <option>Yabancı</option>
            </select>
          </div>
          <div class="col-md-8 mb-3">
            <label for="dentistName">Diş Hekimi</label>
            <input id="dentistName" type="text" class="form-control" placeholder="Diş Hekimi" />
          </div>
        </div>
        <div class="form-row" style={{ marginTop: "0" }}>
          <div class="col-md-6 mb-3">
            <label for="validationDefault01">Doğum Tarihi</label>
            <DatePicker />
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationDefault02">Kayıt Tarihi</label>
            <DatePicker />
          </div>
        </div>
      </form>
    </div>
  );
}
const Step2 = () => {
  return (
    <div className="stepWrapper">
      <form class="was-validated">
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationDefault04">İlçe</label>
            <select class="custom-select" id="validationDefault04" required>
              <option selected disabled value="">Seçiniz...</option>
              <option>Başakşehir</option>
              <option>Sarıyer</option>
            </select>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationDefault04">Şehir</label>
            <select class="custom-select" id="validationDefault04" required>
              <option selected disabled value="">Seçiniz...</option>
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
            <select class="custom-select" id="validationDefault04" required>
              <option selected disabled value="">Seçiniz...</option>
              <option>Türkiye</option>
              <option>USA</option>
            </select>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationDefault05">Posta Kodu</label>
            <input type="text" class="form-control" id="validationDefault05" required />
          </div>
        </div>

        <div class="form-row">
          <div class="col-md-12 mb-3">
            <label for="exampleFormControlInput1">E-mail adresi</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="hasan@gmail.com" />
          </div>
        </div>

        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="inputAddress">Telefon1</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="+09 000 000 0000" />
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationDefault05">Telefon2</label>
            <input type="text" class="form-control" id="validationDefault05" placeholder="+09 000 000 0000" />
          </div>
        </div>

        <div class="form-row">
          <div class="col-md-12 mb-3">
            <label for="exampleFormControlInput1">Adres</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Rumeli Hisarüstü Mah..." />
          </div>
        </div>
      </form>
    </div>
  );
}


const Step3 = () => {
  return (
    <div className="stepWrapper">
      <CheckMark />
    </div>
  );
}


class Patients extends Component {

  constructor() {
    super();
    this.state = {
      clinicians: null,
      patientData: null
    };
  }

  componentDidMount = async () => {
    let clinicId = getCookie("user_id");
    let res = await store.getPatients({ clinicId });
    this.setState({ clinicians: res.data.Dentist });
    console.log(this.state.clinicians)
    this.setState({
      patientData: {
        columns: [
          {
            label: 'Avatar',
            field: 'avatar',
            sort: 'asc',
            width: 50
          },
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Surname',
            field: 'surname',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Phone',
            field: 'phone',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Visit',
            field: 'button',
            sort: 'asc',
            width: 150
          },
        ],
        rows: res.data.map((patient) => {
          return {
            ...patient,
            avatar: <div class="tableAvatar"><img src={patient.avatar} /></div>,
            button:
              <Link to={`/patients/${patient.id}`} className="tableAvatar">
                <button type="button" class="btn btn-secondary">View</button>
              </Link>
          }
        })

      }
    })
    console.log(this.state.patientData)

  };


  render() {

    const step1Content = <Step1 />;
    const step2Content = <Step2 />;
    const step3Content = <Step3 />;

    function step1Validator() {
      //return a boolean
      return true;
    }

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
        <a type="button" data-toggle="modal" data-target="#addUserModal" className={"addUser"}><img src={AddUserIcon}></img></a>

        <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Hasta Ekle</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">


                <StepProgressBar
                  startingStep={0}
                  onSubmit={onFormSubmit}
                  steps={[
                    {
                      label: 'Kişisel Bilgiler',
                      subtitle: '0%',
                      name: 'step 1',
                      content: step1Content
                    },
                    {
                      label: 'İletişim Bilgileri',
                      subtitle: '50%',
                      name: 'step 2',
                      content: step2Content,
                      validator: step2Validator
                    },
                    {
                      label: 'Son',
                      subtitle: '100%',
                      name: 'step 3',
                      content: step3Content,
                      validator: step3Validator
                    }
                  ]}
                />


              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
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
            />)
            :
            <p>YUKLENIYOR</p>
          }
        </div>

      </div>
    );
  }
}

export default Patients;
