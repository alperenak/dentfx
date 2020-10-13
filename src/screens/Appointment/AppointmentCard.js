import React, { Component } from "react";

/*** Styles ***/
import styles from "./AppointmentCard.scss";

/*** Icons ***/
import dropdownIcon from "../../icons/dropdown-disabled.svg";
import dentHospitalIcon from "../../icons/dental-icon.png";

/*** Utils ***/
import store from "../../store";

class AppointmentCard extends Component {
  state = { status: "", accordionActive: styles.accordionInactive, data: [] };

  componentDidMount = () => {
    let { data } = this.props;

    if (data?.isDone) {
      return this.setState({ status: "completed" });
    } else if (data?.isConfirmed) {
      return this.setState({ status: "active" });
    } else if (data?.isCancelledByDentist || data?.isCancelledByUser) {
      return this.setState({ status: "cancelled" });
    }
    return this.setState({ status: "pending" });
  };

  onExpandClick = () => {
    this.setState({
      accordionActive:
        this.state.accordionActive === styles.accordionInactive
          ? styles.accordionActive
          : styles.accordionInactive,
    });
  };

  //Randevuya git butonu
  onClickRandevuyaGit = () => {};

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

    if (isCancelledByDentist || isCancelledByUser) {
      return <div></div>;
    }

    if (isDone) {
      return (
        <button
          className={styles.positiveBtn}
          onClick={this.onClickRandevuyaGit}
        >
          Randevuya Git
        </button>
      );
    }

    return (
      <button
        className={styles.negativeBtn}
        onClick={this.onClickCancelAppointment}
      >
        Cancel Appointment
      </button>
    );
  };

  renderBadge = (data) => {
    let { status } = this.state;

    if (status === "completed") return <div>TAMAMLANDI</div>;
    else if (status === "active") return <div>SHOW ON MAP</div>;
    else if (status === "pending") return <div>ONAY BEKLENİYOR</div>;
    else if (status === "cancelled") return <div>İPTAL EDİLDİ</div>;
  };

  render() {
    let { data } = this.props;
    let { status, accordionActive } = this.state;
    return (
      <div
        className={`${styles.cardWrapper} ${styles[status]} ${accordionActive}  `}
      >
        <div className={styles.header}>
          <div className={styles.lefticon}>
            <img src={dentHospitalIcon} alt="" />
          </div>

          <div className={styles.content}>
            <div className={styles.clinicInfo}>
              <div className={styles.title}> {data?.Clinic?.name} </div>

              <div className={styles.badge}>{this.renderBadge(data)}</div>
            </div>

            <div className={styles.appointmentInfoWrapper}>
              <div className={styles.dentist}>
                {`${data?.Dentist?.name} ${data?.Dentist?.surname}`}
              </div>
              <div className={`${styles.details} ${accordionActive}`}>
                Kanal Tedavisi / Diş Tedavisi Açıklaması & Consectetur elit pellentesque
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla aliquet arcu.
                {this.renderDetailsButton()}
              </div>

              <div className={styles.appointmentInfo}>
                <div className={styles.date}>{data?.date}</div>
                <div className={styles.time}>{data?.startTime}</div>
                <div className={styles.price}>$70</div>
              </div>
            </div>
          </div>
          <div className={styles.righticon} onClick={this.onExpandClick}>
            <img src={dropdownIcon} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentCard;
