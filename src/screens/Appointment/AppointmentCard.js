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
        this.state.accordionActive === "cardWrapper__accordionInactive"
          ? "cardWrapper__accordionActive"
          : "cardWrapper__accordionInactive",
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
          className={"cardWrapper__positiveBtn"}
          onClick={this.onClickRandevuyaGit}
        >
          Randevuya Git
        </button>
      );
    }

    return (
      <button
        className={"cardWrapper__negativeBtn"}
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
			<div className={`${"cardWrapper"} ${status} ${accordionActive}  `}>
				<div className="cardWrapper__header">
					<div className="cardWrapper__header__leftIcon">
						<img src={dentHospitalIcon} alt="" />
					</div>
					<div className="cardWrapper__content__clinicInfo">
						<div className={styles.title}> {data?.Clinic?.name} </div>
						<div className={styles.badge}>{this.renderBadge(data)}</div>
					</div>
				</div>
				<div className="cardWrapper__content">

					<div className={"cardWrapper__appointmentInfoWrapper"}>
						<div className={"cardWrapper__appointmentInfoWrapper__dentist"}>
							{`${data?.Dentist?.name} ${data?.Dentist?.surname}`}
						</div>
						<div className={`${"cardWrapper__appointmentInfoWrapper__details"} ${accordionActive}`}>
							Kanal Tedavisi / Diş Tedavisi Açıklaması & Consectetur elit pellentesque
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla aliquet arcu.
							{this.renderDetailsButton()}
						</div>
						<div className="cardWrapper__appointmentInfoWrapper__appointmentInfo">
							<div className="cardWrapper__appointmentInfoWrapper__appointmentInfo__date">{data?.date}</div>
							<div className="cardWrapper__appointmentInfoWrapper__appointmentInfo__time">{data?.startTime}</div>
							<div className="cardWrapper__appointmentInfoWrapper__appointmentInfo__price">$70</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AppointmentCard;
