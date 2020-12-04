import React, { Component } from "react";
import { MDBDataTable } from 'mdbreact';

/*** Styles ***/
import styles from "./patients.scss";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";
import { Link } from "react-router-dom";


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
          <p>YUKLENIYOR</p>
        }




        {/* 
        {this.state.patientData !== null ? (
          <MDBTable btn>
            <MDBTableHead columns={patientData.columns} />
            <MDBTableBody rows={patientData.rows} />
          </MDBTable>
        )
          :
          <p>YUKLENIYOR</p>
        } */}


        {/* Another data table example */}
        {/* {this.state.patientData !== null ? (
          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={this.state.patientData}
            pagingTop
            searchTop
            searchBottom={false}
          />
        )
          :
          <p>YUKLENIYOR</p>
        } */}

      </div>
    );
  }
}

export default Patients;
