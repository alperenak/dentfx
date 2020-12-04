import React, { Component } from "react";
import store from "../../store";

/*** Styles ***/
import styles from "./patientdetail.scss";

/*** Components ***/
import ReactStars from "react-rating-stars-component";
import Map from "../../components/Map/map";

class PatientDetail extends Component {
  constructor() {
    super();
    this.state = {
      patient: null,
      selectedTab: 0,
      selectedPlan: "Tedavi veya Planlama Seçiniz"
    };


  }

  componentDidMount = async () => {
    let { match } = this.props;
    console.log(match, "MATCH")

    let patientId = match.params.id;
    console.log(patientId)
    let res = await store.getPatientsDetail(patientId);
    console.log(res.data, "RES>DATA")
    this.setState({ patient: res.data });
  };

  setSelectedTab = (index) => {
    this.setState({ selectedTab: index });
  };

  renderPatientInfoTab = () => {
    let { patient } = this.state;
    return (
      <div className={"aboutTab"}>
        <div className={"item"}>
          <div className={"header"}>About</div>
          <div className={"content"}>
            Congue eu consequat ac felis. Urna duis convallis convallis tellus.
            Ornare lectus sit amet est placerat in egestas erat. Consequat
            mauris nunc congue nisi vitae suscipit tellus mauris a.
          </div>
        </div>

        <div className={"item"}>
          <div className={"header"}>Location</div>
          <div className={"content"}>{patient?.address}</div>
        </div>
      </div>
    );
  };

  renderTreatmentPlanningTab = () => {
    let { patient } = this.state;
    return (
      <div>
          <div className={"createAppointment"}>
            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle plansDropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.selectedPlan}
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {this.state.selectedPlan === "Planlama 0" 
                ?
                <a class="dropdown-item disabled" href="#" onClick={() => { this.setState({ selectedPlan: "Planlama 0" })}} aria-disabled="true">Planlama 0</a>
                :
                <a class="dropdown-item" href="#" onClick={() => { this.setState({ selectedPlan: "Planlama 0" })}}>Planlama 0</a>
                }

                {this.state.selectedPlan === "Planlama 1" 
                ?
                <a class="dropdown-item disabled" href="#" onClick={() => { this.setState({ selectedPlan: "Planlama 1" })}} aria-disabled="true">Planlama 1</a>
                :
                <a class="dropdown-item" href="#" onClick={() => { this.setState({ selectedPlan: "Planlama 1" })}}>Planlama 1</a>
                }
                
                {this.state.selectedPlan === "Tedavi" 
                ?
                <a class="dropdown-item disabled" href="#" onClick={() => { this.setState({ selectedPlan: "Tedavi" })}} aria-disabled="true">Tedavi</a>

                :
                <a class="dropdown-item" href="#" onClick={() => { this.setState({ selectedPlan: "Tedavi" })}}>Tedavi</a>

                }

              </div>
            </div>
          </div>


          {
            this.state.selectedPlan === "Planlama 0" &&
            <div>PLANLAMA 0 HERE</div>
          }
          {
            this.state.selectedPlan === "Planlama 1" &&
            <div>PLANLAMA 1 HERE</div>
          }
          {
            this.state.selectedPlan === "Tedavi" &&
            <div>TEDAVI</div>
          }





      </div>
    );
  };

  renderPaymentTab = () => {
    let { patient } = this.state;
    return (
      <div className={"tabWrapper"}>
      </div>
    );
  };

  renderNotesTab = () => { };

  render() {
    let { patient, selectedTab } = this.state;

    return (
      <div className={"Profile"}>
        <div className={"patientProfileCard"}>
          <img
            className={"profileImage"}
            src={patient?.avatar}
            alt="avatar"
          />


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
