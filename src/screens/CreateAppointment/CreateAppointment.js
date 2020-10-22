import React, { Component } from "react";

/*** Styles ***/
import styles from "./style.scss";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";

/*** Icons ***/
import illustration from "../../icons/illustration_2.svg";

/*** Components ***/
import Input from "../../components/Input";

class CreateAppointment extends Component {
  state = {
    user: null,
    clinic: null,
    dentist: null,
    treatmentType: null,
    startTime: null,
    endTime: null,
    isCheckIn: null,
    paymentType: null,
    clinicData: null,
    treatmentData: [],
    dentistData: [],
  };

  componentDidMount = async () => {
    let clinic = this.props.match.params.id;
    this.setState({ clinic });

    let resClinic = await store.getClinicDetail({ clinicId: clinic });
    this.setState({ clinicData: resClinic.data });
    console.log(resClinic.data);

    let treatmentData = [];
    resClinic.data.treatmentType.map((type, i) => {
      treatmentData.push({ key: i, value: type });
    });

    let dentistData = [];
    resClinic.data.Dentist.map((dentist, i) => {
      dentistData.push({
        key: i,
        value: `${dentist.name} ${dentist.surname}`,
      });
    });

    this.setState({ treatmentData, dentistData });

    let userId = getCookie("user_id");
    let responseUser = await store.getUserDetail({ userId });
    this.setState({ user: responseUser.data });
  };

  onClickCreate = async () => {
    //user, clinic, dentist, treatmentType, startTime, endTime, isCheckIn, paymentType
    let res = await store.createUserAppointment();
  };

  onChangeDentist = (i, value) => {
    this.setState({ dentist: value.value });
  };

  onChangeTreatmentType = (i, value) => {
    this.setState({ treatmentType: value.value });
  };

  onChangeDate = (value) => {
    this.setState({ startTime: new Date(value).toLocaleDateString() });
  };

  render() {
    let {
      treatmentData,
      dentistData,
      clinicData,
      user,
      dentist,
      treatmentType,
      startTime,
    } = this.state;
    return (
      <div className={styles.createAppointmentWrapper}>
        <div className={styles.header}>
          <img src={illustration} alt="" />
          <div className={styles.headerText}>
            <div className={styles.title}>Hi Peter,</div>
            <div className={styles.subtitle}>make an appointment easily!</div>
          </div>
        </div>

        <div className={styles.content}>
          <Input
            type={"select"}
            size={"full"}
            onChange={this.onChangeDentist}
            externalSource={dentistData && dentistData}
            label={"Select a dentist"}
          />
          <div style={{ marginBottom: "15px" }} />
          <Input
            type={"select"}
            size={"full"}
            onChange={this.onChangeTreatmentType}
            externalSource={treatmentData && treatmentData}
            label={"Select a treatment"}
          />
          <div style={{ marginBottom: "15px" }} />
          <Input
            type={"date"}
            size={"half"}
            onChange={this.onChangeDate}
            label={"Select a date"}
          />

          {clinicData && user && dentist && treatmentType && startTime && (
            <div className={styles.disclaimer}>
              <div className={styles.textBlue}>
                <span> {clinicData.name}</span> üzerinden <span>{dentist}</span>
                'a <span>{startTime} </span>
                tarihinde, 15:00 saatinde <span>{treatmentType}</span> için bir
                randevu oluşturuyorsunuz.
              </div>
              <div className={styles.textRed}>
                Randevunuzu <span>kontrol ettikten sonra </span> onaylamak için
                aşağıdaki butona tıklayınız.
              </div>
            </div>
          )}

          <button className={styles.submitBtn} onClick={this.submitAppointment}>
            Randevu Oluştur
          </button>
        </div>
      </div>
    );
  }
}

export default CreateAppointment;
