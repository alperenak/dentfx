import React, { Component } from "react";
import { MDBDataTable } from 'mdbreact';

/*** Styles ***/
import styles from "./patients.scss";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";
import PatientCard from "./PatientCard";

/*** Icons ***/
import addCircle from "../../icons/Icons_add-circle.svg";


class Patients extends Component {
  state = { clinicians: null, patientData: null};

  
  

  componentDidMount = async () => {
    let clinicId = getCookie("user_id");
    let res = await store.getClinicDetail({ clinicId });
	this.setState({ clinicians: res.data.Dentist });
	console.log(this.state.clinicians)
	this.setState({patientData :{columns: [
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
		}
		],
		rows: res.data.Dentist
	}})
	console.log(this.state.patientData)

  };

	render() {



		return (
			<div>
				{this.state.patientData !== null ? (
				<MDBDataTable
				striped
				bordered
				small
				data={this.state.patientData}
				/>) 
				:
				<p>BEKLE YUKLENIYOR</p>
				}

			</div>
		);
	}
}

export default Patients;
