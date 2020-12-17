import React, { Component } from "react";
import store from "../../store";
import { MDBDataTable } from "mdbreact";

/*** Styles ***/
import styles from "./patientdetail.scss";
import PaymentIcon from "../../icons/credit-cards-payment.svg"

/*** Components ***/
import DatePicker from "../../components/DatePicker/DatePicker"
import StepProgressBar from 'react-step-progress';


/*** Teeth Images ***/
import tooth1 from "../../assets/images/tooth/tooth-1.jpg";
import tooth2 from "../../assets/images/tooth/tooth-2.jpg";
import tooth3 from "../../assets/images/tooth/tooth-3.jpg";
import tooth4 from "../../assets/images/tooth/tooth-4.jpg";
import tooth5 from "../../assets/images/tooth/tooth-5.jpg";
import tooth6 from "../../assets/images/tooth/tooth-6.jpg";
import tooth7 from "../../assets/images/tooth/tooth-7.jpg";
import tooth8 from "../../assets/images/tooth/tooth-8.jpg";
import tooth9 from "../../assets/images/tooth/tooth-9.jpg";
import tooth10 from "../../assets/images/tooth/tooth-10.jpg";
import tooth11 from "../../assets/images/tooth/tooth-11.jpg";
import tooth12 from "../../assets/images/tooth/tooth-12.jpg";
import tooth13 from "../../assets/images/tooth/tooth-13.jpg";
import tooth14 from "../../assets/images/tooth/tooth-14.jpg";
import tooth15 from "../../assets/images/tooth/tooth-15.jpg";
import tooth16 from "../../assets/images/tooth/tooth-16.jpg";
import tooth17 from "../../assets/images/tooth/tooth-17.jpg";
import tooth18 from "../../assets/images/tooth/tooth-18.jpg";
import tooth19 from "../../assets/images/tooth/tooth-19.jpg";
import tooth20 from "../../assets/images/tooth/tooth-20.jpg";
import tooth21 from "../../assets/images/tooth/tooth-21.jpg";
import tooth22 from "../../assets/images/tooth/tooth-22.jpg";
import tooth23 from "../../assets/images/tooth/tooth-23.jpg";
import tooth24 from "../../assets/images/tooth/tooth-24.jpg";
import tooth25 from "../../assets/images/tooth/tooth-25.jpg";
import tooth26 from "../../assets/images/tooth/tooth-26.jpg";
import tooth27 from "../../assets/images/tooth/tooth-27.jpg";
import tooth28 from "../../assets/images/tooth/tooth-28.jpg";
import tooth29 from "../../assets/images/tooth/tooth-29.jpg";
import tooth30 from "../../assets/images/tooth/tooth-30.jpg";
import tooth31 from "../../assets/images/tooth/tooth-31.jpg";
import tooth32 from "../../assets/images/tooth/tooth-32.jpg";
import ContractIMG from "../../assets/icons/contract.svg";
import ProformaIMG from "../../assets/icons/proforma.svg";
import Modal from "../../components/Modal/modal";

class PatientDetail extends Component {
  constructor() {
    super();
    this.state = {
      patient: null,
      selectedTab: 0,
      selectedPlan: "Planlama 0",
      selectedTooth: "",
      treatmentPlan0Data: null,
      treatmentPlan1Data: null,
      treatmentData: null,
      treatmentList: null,
      paidTreatmentData: null,
    };
  }

  fillTreatmentTables = () => {
    this.setState({
      treatmentPlan0Data: {
        columns: [
          {
            label: "Tarih",
            field: "tarih",
            sort: "asc",
            width: 150,
          },
          {
            label: "Dis",
            field: "dis",
            sort: "asc",
            width: 100,
          },
          {
            label: "Tedavi",
            field: "tedavi",
            sort: "asc",
            width: 150,
          },
          {
            label: "Dis Hekimi",
            field: "dis_hekimi",
            sort: "asc",
            width: 70,
          },
          {
            label: "Toplam",
            field: "toplam",
            sort: "asc",
            width: 80,
          },
          {
            label: "TRY/USD",
            field: "para_birimi",
            sort: "asc",
            width: 150,
          },
          {
            label: "T. Aktar",
            field: "button1",
            sort: "asc",
            width: 150,
          },
          {
            label: "Sil",
            field: "button2",
            sort: "asc",
            width: 150,
          },
        ],
        rows: [
          {
            tarih: "12.01.2020",
            dis: "24",
            tedavi: "Komposit Dolgu",
            dis_hekimi: "Fatih Atmaca",
            toplam: 250,
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "24.03.2020",
            dis: "12",
            tedavi: "Kanal Tedavisi",
            dis_hekimi: "Fatih Atmaca",
            toplam: 250,
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "02.02.2020",
            dis: "26",
            tedavi: "Koplikasyonlu Dis cekimi",
            dis_hekimi: "Hasan Demirkiran",
            toplam: 450,
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "16.03.2020",
            dis: "31",
            tedavi: "Implant",
            dis_hekimi: "Fatih Atmaca",
            toplam: 2500,
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "08.08.2020",
            dis: "05",
            tedavi: "Komposit Dolgu",
            dis_hekimi: "Fatih Atmaca",
            toplam: 250,
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" class="btn btn-danger">
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
            label: "Tarih",
            field: "tarih",
            sort: "asc",
            width: 50,
          },
          {
            label: "Dis",
            field: "dis",
            sort: "asc",
            width: 150,
          },
          {
            label: "Tedavi",
            field: "tedavi",
            sort: "asc",
            width: 150,
          },
          {
            label: "Dis Hekimi",
            field: "dis_hekimi",
            sort: "asc",
            width: 150,
          },
          {
            label: "Toplam",
            field: "toplam",
            sort: "asc",
            width: 150,
          },
          {
            label: "TRY/USD",
            field: "para_birimi",
            sort: "asc",
            width: 150,
          },
          {
            label: "T. Aktar",
            field: "button1",
            sort: "asc",
            width: 150,
          },
          {
            label: "Sil",
            field: "button2",
            sort: "asc",
            width: 150,
          },
        ],
        rows: [
          {
            tarih: "12.01.2020",
            dis: "24",
            tedavi: "Komposit Dolgu",
            dis_hekimi: "Fatih Atmaca",
            toplam: 250,
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "24.03.2020",
            dis: "12",
            tedavi: "Kanal Tedavisi",
            dis_hekimi: "Fatih Atmaca",
            toplam: 250,
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "02.02.2020",
            dis: "26",
            tedavi: "Koplikasyonlu Dis cekimi",
            dis_hekimi: "Hasan Demirkiran",
            toplam: 450,
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "16.03.2020",
            dis: "31",
            tedavi: "Implant",
            dis_hekimi: "Fatih Atmaca",
            toplam: 2500,
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "08.08.2020",
            dis: "05",
            tedavi: "Komposit Dolgu",
            dis_hekimi: "Fatih Atmaca",
            toplam: 250,
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Aktar
              </button>
            ),
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
        ],
      },
    });
    this.setState({
      treatmentData: {
        columns: [
          {
            label: "Tarih",
            field: "tarih",
            sort: "asc",
            width: 50,
          },
          {
            label: "Dis",
            field: "dis",
            sort: "asc",
            width: 150,
          },
          {
            label: "Tedavi",
            field: "tedavi",
            sort: "asc",
            width: 150,
          },
          {
            label: "Dis Hekimi",
            field: "dis_hekimi",
            sort: "asc",
            width: 150,
          },
          {
            label: "Toplam",
            field: "toplam",
            sort: "asc",
            width: 150,
          },
          {
            label: "TRY/USD",
            field: "para_birimi",
            sort: "asc",
            width: 150,
          },
          {
            label: "Sil",
            field: "button2",
            sort: "asc",
            width: 150,
          },
        ],
        rows: [
          {
            tarih: "12.01.2020",
            dis: "24",
            tedavi: "Komposit Dolgu",
            dis_hekimi: "Fatih Atmaca",
            toplam: 250,
            para_birimi: "TRY",
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "24.03.2020",
            dis: "12",
            tedavi: "Kanal Tedavisi",
            dis_hekimi: "Fatih Atmaca",
            toplam: 250,
            para_birimi: "TRY",
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "02.02.2020",
            dis: "26",
            tedavi: "Koplikasyonlu Dis cekimi",
            dis_hekimi: "Hasan Demirkiran",
            toplam: 450,
            para_birimi: "TRY",
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "16.03.2020",
            dis: "31",
            tedavi: "Implant",
            dis_hekimi: "Fatih Atmaca",
            toplam: 2500,
            para_birimi: "TRY",
            button2: (
              <button type="button" class="btn btn-danger">
                Sil
              </button>
            ),
          },
          {
            tarih: "08.08.2020",
            dis: "05",
            tedavi: "Komposit Dolgu",
            dis_hekimi: "Fatih Atmaca",
            toplam: 250,
            para_birimi: "TRY",
            button2: (
              <button type="button" class="btn btn-danger">
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
            label: "Tarih",
            field: "tarih",
            sort: "asc",
            width: 170,
          },
          {
            label: "Ödeme Tipi",
            field: "odeme_tipi",
            sort: "asc",
            width: 150,
          },
          {
            label: "Dis Hekimi",
            field: "dis_hekimi",
            sort: "asc",
            width: 150,
          },
          {
            label: "Tutar",
            field: "tutar",
            sort: "asc",
            width: 150,
          },
          {
            label: "TRY/USD",
            field: "para_birimi",
            sort: "asc",
            width: 100,
          },
          {
            label: "Yazdır",
            field: "button_yazdir",
            sort: "asc",
            width:100,
          },
        ],
        rows: [
          {
            tarih: "12.01.2020",
            odeme_tipi: "Nakit",
            dis_hekimi: "Fatih Atmaca",
            tutar: 250,
            para_birimi: "TRY",
            button_yazdir: (
              <button type="button" class="btn btn-secondary">
                Yazdır
              </button>
            ),
          },
          {
            tarih: "16.02.2020",
            odeme_tipi: "Kredi Kartı",
            dis_hekimi: "Fatih Atmaca",
            tutar: 1350,
            para_birimi: "TRY",
            button_yazdir: (
              <button type="button" class="btn btn-secondary">
                Yazdır
              </button>
            ),
          },
          {
            tarih: "22.03.2020",
            odeme_tipi: "Nakit",
            dis_hekimi: "Fatih Atmaca",
            tutar: 1200,
            para_birimi: "TRY",
            button_yazdir: (
              <button type="button" class="btn btn-secondary">
                Yazdır
              </button>
            ),
          },
        ],
      },
      
    });
  };

  fillTreatmentList = () => {
    this.setState({
      treatmentList: {
        columns: [
          {
            label: "Tedavi",
            field: "tedavi",
            sort: "asc",
            width: 270,
          },
          {
            label: "Toplam",
            field: "toplam",
            sort: "asc",
            width: 150,
          },
          {
            label: "P. Birimi",
            field: "para_birimi",
            sort: "asc",
            width: 100,
          },
          {
            label: "Ekle",
            field: "button1",
            sort: "asc",
            width: 70,
          },
        ],
        rows: [
          {
            tedavi: "Dis Cekimi",
            toplam: "180,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Gomulu Dis Operasyonu",
            toplam: "600,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Implant(Standart-Alman)",
            toplam: "2300,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Implant(Ekonomik-Yerli)",
            toplam: "3200,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Frenektomi Operasyonu",
            toplam: "1000,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Biyopsi",
            toplam: "445,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Apse Drenaji ve tedavisi",
            toplam: "180,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Botoks Uygulama",
            toplam: "1500,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Botoks Uygulama 2",
            toplam: "1400,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Botoks Uygulama 3",
            toplam: "1200,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Botoks Uygulama 4",
            toplam: "1500,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Botoks Uygulama 5",
            toplam: "1400,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
          {
            tedavi: "Botoks Uygulama 6",
            toplam: "1200,00",
            para_birimi: "TRY",
            button1: (
              <button type="button" class="btn btn-success">
                Ekle
              </button>
            ),
          },
        ],
      },
    });
  };

  componentDidMount = async () => {
    this.fillTreatmentTables();
    this.fillTreatmentList();

    let { match } = this.props;
    console.log(match, "MATCH");

    let patientId = match.params.id;
    console.log(patientId);
    let res = await store.getPatientsDetail(patientId);
    console.log(res.data, "RES>DATA");
    this.setState({ patient: res.data });
  };

  setSelectedTab = (index) => {
    this.setState({ selectedTab: index });
  };

  renderPatientInfoTab = () => {
    let { patient } = this.state;
    return (
      <div className={"aboutTab"}>
        <form>
          <div className={"item patientInfoPart"}>
            <div className={"header"}>Kişisel Bilgiler</div>
            <div className={"content"}>

              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label for="validationDefault01">İsim</label>
                  <input type="text" class="form-control" id="validationDefault01" placeholder="Hasan" required />
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault02">Soyisim</label>
                  <input type="text" class="form-control" id="validationDefault02" placeholder="Demirkıran" required />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="inputTC">TC Kimlik No</label>
                  <input type="text" class="form-control" id="inputTC" placeholder="000 0000 0000" />
                </div>
              </div>
              <div className={"form-row"} style={{ marginBottom: "0" }}>
                <div className={"col-md-3 mb-3"}>
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
                <div class="col-md-3 mb-3">
                  <label for="validationDefault04">Uyruk</label>
                  <select class="custom-select" id="validationDefault04" required>
                    <option selected disabled value="">Seçiniz...</option>
                    <option>Türk</option>
                    <option>Yabancı</option>
                  </select>
                </div>
                <div class="col-md-6 mb-3">
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
            </div>
          </div>

          <div className={"item patientInfoPart"}>
            <div className={"header"}>İletişim Bilgileri</div>
            <div className={"content"}>
              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label for="validationDefault04">İlçe</label>
                  <select class="custom-select" id="validationDefault04" required>
                    <option selected disabled value="">Seçiniz...</option>
                    <option>Başakşehir</option>
                    <option>Sarıyer</option>
                  </select>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault04">Şehir</label>
                  <select class="custom-select" id="validationDefault04" required>
                    <option selected disabled value="">Seçiniz...</option>
                    <option>İstanbul</option>
                    <option>Ankara</option>
                    <option>Eskişehir</option>
                    <option>Çanakkale</option>
                  </select>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault04">Ülke</label>
                  <select class="custom-select" id="validationDefault04" required>
                    <option selected disabled value="">Seçiniz...</option>
                    <option>Türkiye</option>
                    <option>USA</option>
                  </select>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault05">Posta Kodu</label>
                  <input type="text" class="form-control" id="validationDefault05" required />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="exampleFormControlInput1">E-mail adresi</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="hasan@gmail.com" />
                </div>
                <div class="col-md-3 mb-3">
                  <label for="inputAddress">Telefon1</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="+09 000 000 0000" />
                </div>
                <div class="col-md-3 mb-3">
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
            </div>
          </div>
        </form>
      </div>
    );
  };

  renderTreatmentPlanningTab = () => {
    let { patient } = this.state;
    return (
      <div>
        <div className={"createAppointment"}>
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle plansDropdown"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.selectedPlan}
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {this.state.selectedPlan === "Planlama 0" ? (
                <a
                  class="dropdown-item disabled"
                  href="#"
                  onClick={() => {
                    this.setState({ selectedPlan: "Planlama 0" });
                  }}
                  aria-disabled="true"
                >
                  Planlama 0
                </a>
              ) : (
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => {
                      this.setState({ selectedPlan: "Planlama 0" });
                    }}
                  >
                    Planlama 0
                  </a>
                )}

              {this.state.selectedPlan === "Planlama 1" ? (
                <a
                  class="dropdown-item disabled"
                  href="#"
                  onClick={() => {
                    this.setState({ selectedPlan: "Planlama 1" });
                  }}
                  aria-disabled="true"
                >
                  Planlama 1
                </a>
              ) : (
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => {
                      this.setState({ selectedPlan: "Planlama 1" });
                    }}
                  >
                    Planlama 1
                  </a>
                )}

              {this.state.selectedPlan === "Tedavi" ? (
                <a
                  class="dropdown-item disabled"
                  href="#"
                  onClick={() => {
                    this.setState({ selectedPlan: "Tedavi" });
                  }}
                  aria-disabled="true"
                >
                  Tedavi
                </a>
              ) : (
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => {
                      this.setState({ selectedPlan: "Tedavi" });
                    }}
                  >
                    Tedavi
                  </a>
                )}
            </div>
          </div>
        </div>

        {this.state.selectedPlan === "Planlama 0" && (
          <div>
            {this.renderTeeth()}
            {this.renderNewTreatmentButton(true)}
            {this.renderTreatmentPlan0Table()}
            {this.renderUnderTablebuttons()}
          </div>
        )}
        {this.state.selectedPlan === "Planlama 1" && (
          <div>
            {this.renderTeeth()}
            {this.renderNewTreatmentButton(true)}
            {this.renderTreatmentPlan1Table()}
          </div>
        )}
        {this.state.selectedPlan === "Tedavi" && (
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
    return(
      <div>
        <div className={"row"}>
          <div className={"paymentTreatmentTableWrapper"}>
          <h2 className={"tableHeader"}>Tedaviler</h2>
            {this.renderTreatmentTable()}
          </div>
          <div className={"paymentPaidTreatmentTableWrapper"}>

          {/* ADD payment Button */}
          <a type="button" data-toggle="modal" data-target="#addUserModal" className={"addPayment"}>Ödeme Ekle<img src={PaymentIcon}></img></a>

            <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ödeme Ekle</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">

                  ÖDEME KISMI 

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
                    <button type="button" class="btn btn-primary">Ödeme Ekle</button>
                  </div>
                </div>
              </div>
            </div>

            <h2 className={"tableHeader"}>Alınan Paralar</h2>
            {this.renderPaidtreatmentsTable()}
          </div>
        </div>
      </div>
    )
  };

  renderNotesTab = () => { };

  renderTeeth = () => {
    return (
      <div className={"row teeth"}>
        <div className={"row teethrow"}>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth1" })}
          >
            <img src={tooth1} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth2" })}
          >
            <img src={tooth2} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth3" })}
          >
            <img src={tooth3} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth4" })}
          >
            <img src={tooth4} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth5" })}
          >
            <img src={tooth5} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth6" })}
          >
            <img src={tooth6} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth7" })}
          >
            <img src={tooth7} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth8" })}
          >
            <img src={tooth8} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth9" })}
          >
            <img src={tooth9} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth10" })}
          >
            <img src={tooth10} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth11" })}
          >
            <img src={tooth11} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth12" })}
          >
            <img src={tooth12} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth13" })}
          >
            <img src={tooth13} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth14" })}
          >
            <img src={tooth14} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth15" })}
          >
            <img src={tooth15} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth16" })}
          >
            <img src={tooth16} />
          </button>
        </div>
        <div className={"row teethrow"}>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth17" })}
          >
            <img src={tooth17} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth18" })}
          >
            <img src={tooth18} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth19" })}
          >
            <img src={tooth19} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth20" })}
          >
            <img src={tooth20} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth21" })}
          >
            <img src={tooth21} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth22" })}
          >
            <img src={tooth22} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth23" })}
          >
            <img src={tooth23} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth24" })}
          >
            <img src={tooth24} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth25" })}
          >
            <img src={tooth25} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth26" })}
          >
            <img src={tooth26} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth27" })}
          >
            <img src={tooth27} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth28" })}
          >
            <img src={tooth28} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth29" })}
          >
            <img src={tooth29} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth30" })}
          >
            <img src={tooth30} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth31" })}
          >
            <img src={tooth31} />
          </button>
          <button
            className={"teethClass"}
            onClick={() => this.setState({ selectedTooth: "tooth32" })}
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
            striped
            bordered
            small
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
            bordered
            small
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
        {this.state.patientData !== null ? (
          <MDBDataTable
            striped
            paging={false}
            scrollY
            maxHeight="50vh"
            bordered
            small
            data={this.state.treatmentList}
          />
        ) : (
            <p>YUKLENIYOR</p>
          )}
      </div>
    );
  };

  renderPaidtreatmentsTable = () => {
    return(
      <div>
        {this.state.paidTreatmentList !== null ? (
          <MDBDataTable
            striped
            scrollY
            maxHeight="50vh"
            bordered 
            small
            data={this.state.paidTreatmentData}
          />
        ) : (
            <p>YUKLENIYOR</p>
          )}
      </div>
    )
  }

  renderNewTreatmentButton = (isPlan) => {
    return (
      <div>
        {this.state.selectedTooth !== "" ? (
          <div>
            {isPlan ? (
              <button
                type="button"
                class="btn btn-success addTreatmentButton"
                data-toggle="modal"
                data-target="#newTreatmentPlan"
              >
                Yeni Tedavi Plani Ekle
              </button>
            ) : (
                <button
                  type="button"
                  class="btn btn-success addTreatmentButton"
                  data-toggle="modal"
                  data-target="#newTreatmentPlan"
                >
                  Yeni Tedavi Ekle
                </button>
              )}
          </div>
        ) : (
            <span
              class="d-inline-block"
              data-toggle="popover"
              data-content="Lütfen, önce bir diş seçimi yapınız."
            >
              <button
                class="btn btn-secondary addTreatmentButton"
                style={{ pointerEvents: null }}
                type="button"
                disabled
              >
                Lütfen, önce diş seçiniz.
            </button>
            </span>
          )}
        <Modal
          modalId={"newTreatmentPlan"}
          modalFooterButtonTitle={"Kapat"}
          modalTitle={"Tedavi Plani Seciniz"}
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
          className={"underTableIcon1"}
          data-toggle="tooltip"
          title="Make Contract"
        >
          <img src={ContractIMG}></img>
        </a>
        <a
          href="#"
          className={"underTableIcon2"}
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
      <div className={"Profile"}>
        <div className={"patientProfileCard"}>
          <img className={"profileImage"} src={patient?.avatar} alt="avatar" />
        </div>

        <div className={"profileName"}>{patient?.name}</div>
        <div
          className={"location"}
        >{`${patient?.city}, ${patient?.country}`}</div>

        <div className={"tabs"}>
          <div
            onClick={() => this.setSelectedTab(0)}
            className={`${"tab"} ${selectedTab === 0 ? "selected" : ""}`}
          >
            Hasta Bilgileri
          </div>
          <div
            onClick={() => this.setSelectedTab(1)}
            className={`${"tab"} ${selectedTab === 1 ? "selected" : ""}`}
          >
            Tedavi ve Planlama
          </div>
          <div
            onClick={() => this.setSelectedTab(2)}
            className={`${"tab"} ${selectedTab === 2 ? "selected" : ""}`}
          >
            Ödeme
          </div>
          <div
            onClick={() => this.setSelectedTab(3)}
            className={`${"tab"} ${selectedTab === 3 ? "selected" : ""}`}
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
}

export default PatientDetail;
