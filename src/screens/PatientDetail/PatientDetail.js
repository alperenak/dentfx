import React, { Component } from "react";
import store from "../../store";
import { MDBDataTable } from 'mdbreact';

/*** Styles ***/
import styles from "./patientdetail.scss";

/*** Components ***/
import ReactStars from "react-rating-stars-component";
import Map from "../../components/Map/map";

/*** Teeth Images ***/
import tooth1 from "../../assets/images/tooth/tooth-1.jpg"
import tooth2 from "../../assets/images/tooth/tooth-2.jpg"
import tooth3 from "../../assets/images/tooth/tooth-3.jpg"
import tooth4 from "../../assets/images/tooth/tooth-4.jpg"
import tooth5 from "../../assets/images/tooth/tooth-5.jpg"
import tooth6 from "../../assets/images/tooth/tooth-6.jpg"
import tooth7 from "../../assets/images/tooth/tooth-7.jpg"
import tooth8 from "../../assets/images/tooth/tooth-8.jpg"
import tooth9 from "../../assets/images/tooth/tooth-9.jpg"
import tooth10 from "../../assets/images/tooth/tooth-10.jpg"
import tooth11 from "../../assets/images/tooth/tooth-11.jpg"
import tooth12 from "../../assets/images/tooth/tooth-12.jpg"
import tooth13 from "../../assets/images/tooth/tooth-13.jpg"
import tooth14 from "../../assets/images/tooth/tooth-14.jpg"
import tooth15 from "../../assets/images/tooth/tooth-15.jpg"
import tooth16 from "../../assets/images/tooth/tooth-16.jpg"
import tooth17 from "../../assets/images/tooth/tooth-17.jpg"
import tooth18 from "../../assets/images/tooth/tooth-18.jpg"
import tooth19 from "../../assets/images/tooth/tooth-19.jpg"
import tooth20 from "../../assets/images/tooth/tooth-20.jpg"
import tooth21 from "../../assets/images/tooth/tooth-21.jpg"
import tooth22 from "../../assets/images/tooth/tooth-22.jpg"
import tooth23 from "../../assets/images/tooth/tooth-23.jpg"
import tooth24 from "../../assets/images/tooth/tooth-24.jpg"
import tooth25 from "../../assets/images/tooth/tooth-25.jpg"
import tooth26 from "../../assets/images/tooth/tooth-26.jpg"
import tooth27 from "../../assets/images/tooth/tooth-27.jpg"
import tooth28 from "../../assets/images/tooth/tooth-28.jpg"
import tooth29 from "../../assets/images/tooth/tooth-29.jpg"
import tooth30 from "../../assets/images/tooth/tooth-30.jpg"
import tooth31 from "../../assets/images/tooth/tooth-31.jpg"
import tooth32 from "../../assets/images/tooth/tooth-32.jpg"
import { Redirect } from "react-router-dom";


class PatientDetail extends Component {
  constructor() {
    super();
    this.state = {
      patient: null,
      selectedTab: 0,
      selectedPlan: "Tedavi veya Planlama Seçiniz",
      selectedTooth: "",
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
            <div>            
              {this.renderTeeth()}
              {this.state.selectedTooth !== "" &&
              <p>TOOTH SELECTED</p>
              }
            </div>
          }
          {
            this.state.selectedPlan === "Planlama 1" &&
            <div>
              {this.renderTeeth()}
            </div>
          }
          {
            this.state.selectedPlan === "Tedavi" &&
            <div>
              {this.renderTeeth()}
            </div>
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

  renderNotesTab = () => {};

  renderTeeth = () => {
    return(
      <div className={"row teeth"}>
        <div className={"row teethrow"}>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth1"})}><img src={tooth1}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth2"})}><img src={tooth2}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth3"})}><img src={tooth3}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth4"})}><img src={tooth4}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth5"})}><img src={tooth5}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth6"})}><img src={tooth6}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth7"})}><img src={tooth7}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth8"})}><img src={tooth8}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth9"})}><img src={tooth9}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth10"})}><img src={tooth10}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth11"})}><img src={tooth11}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth12"})}><img src={tooth12}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth13"})}><img src={tooth13}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth14"})}><img src={tooth14}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth15"})}><img src={tooth15}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth16"})}><img src={tooth16}/></button>
        </div>
        <div className={"row teethrow"}>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth17"})}><img src={tooth17}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth18"})}><img src={tooth18}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth19"})}><img src={tooth19}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth20"})}><img src={tooth20}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth21"})}><img src={tooth21}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth22"})}><img src={tooth22}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth23"})}><img src={tooth23}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth24"})}><img src={tooth24}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth25"})}><img src={tooth25}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth26"})}><img src={tooth26}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth27"})}><img src={tooth27}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth28"})}><img src={tooth28}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth29"})}><img src={tooth29}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth30"})}><img src={tooth30}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth31"})}><img src={tooth31}/></button>
          <button className={"teethClass"} onClick={() => this.setState({selectedTooth: "tooth32"})}><img src={tooth32}/></button>
        </div>
      </div>
    );
  };

  

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
