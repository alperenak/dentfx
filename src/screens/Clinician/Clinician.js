import React, { Component } from "react";

/*** Styles ***/
import styles from "./clinician.scss";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";
import ClinicianCard from "./ClinicianCard";

/*** Icons ***/
import addCircle from "../../icons/Icons_add-circle.svg";

class Clinician extends Component {
  state = { clinicians: null };

  componentDidMount = async () => {
    let clinicId = getCookie("user_id");
    let res = await store.getClinicDetail({ clinicId });

    this.setState({ clinicians: res.data.Dentist });
  };

	renderClinicians = () => {
		let { clinicians } = this.state;
		return clinicians?.map((clinician, i) => {
			return (
				<ClinicianCard
					name={clinician.name}
					surname={clinician.surname}
					avatar={clinician.avatar}
					rate={clinician.rate}
					key={i}
				/>
			);
		});
	};

	render() {
		return (
			<div className="cContainer">
				<div className={"cContainer__buttonWrapper"} onClick={() => (window.location = "/clinician/new")}>
					<img src={addCircle} className={"cContainer__buttonWrapper__icon"} />
					<div className={"cContainer__buttonWrapper__title"}>Yeni Klinisyen</div>
				</div>
				{this.renderClinicians()}
			</div>
		);
	}
}

export default Clinician;
