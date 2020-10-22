import React, { Component } from "react";
import store from "../../store";

/*** Styles ***/
import styles from "./style.scss";

/*** Components ***/
import ReactStars from "react-rating-stars-component";
import Map from "../../components/Map/map";

class ClinicDetail extends Component {
  state = { clinic: null, selectedTab: 0 };

  componentDidMount = async () => {
    let { match } = this.props;

    let clinicId = match.params.id;

    let res = await store.getClinicDetail({ clinicId });
    this.setState({ clinic: res.data });
  };

  setSelectedTab = (index) => {
    this.setState({ selectedTab: index });
  };

  renderOverviewTab = () => {
    let { clinic } = this.state;
    let clinics = [clinic];
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
          <div className={"content"}>{clinic?.address}</div>
          {clinic && <Map clinics={clinics} />}
        </div>
      </div>
    );
  };

  renderTreatmentTab = () => {
    let { clinic } = this.state;
    return (
      <div className={"tabWrapper"}>
        {clinic?.treatmentType?.map((treatment, i) => {
          return (
            <div className={"card"} key={i}>
              <div className={"image"}>
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div className={"name"}>{treatment}</div>
            </div>
          );
        })}
      </div>
    );
  };

  renderDentistTab = () => {
    let { clinic } = this.state;
    return (
      <div className={"tabWrapper"}>
        {clinic?.Dentist.map((dentist, i) => {
          return (
            <div className={"card"} key={i}>
              <div className={"image"}>
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div
                className={"name"}
              >{`${dentist?.name} ${dentist?.surname}`}</div>

              <div className={"rating"}>
                <ReactStars value={dentist?.rate} size={16} edit={false} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  renderCommentsTab = () => {};

  render() {
    let { clinic, selectedTab } = this.state;

    return (
      <div className={"Profile"}>
        <div className={"profileCard"}>
          <img
            className={"profileImage"}
            src={clinic?.avatar}
            alt="avatar"
          />
          <div className={"createAppointment"}>
            <button
              onClick={() =>
                (window.location = `/appointment/create/${clinic.id}`)
              }
            >
              Create Appointment
            </button>
          </div>
        </div>

        <div className={"profileName"}>{clinic?.name}</div>
        <div
          className={"location"}
        >{`${clinic?.city}, ${clinic?.country}`}</div>

        <div className={"tabs"}>
          <div
            onClick={() => this.setSelectedTab(0)}
            className={`${"tab"} ${
              selectedTab === 0 ? "selected" : ""
            }`}
          >
            Overview
          </div>
          <div
            onClick={() => this.setSelectedTab(1)}
            className={`${"tab"} ${
              selectedTab === 1 ? "selected" : ""
            }`}
          >
            Treatment Types
          </div>
          <div
            onClick={() => this.setSelectedTab(2)}
            className={`${"tab"} ${
              selectedTab === 2 ? "selected" : ""
            }`}
          >
            List Of Dentists
          </div>
          <div
            onClick={() => this.setSelectedTab(3)}
            className={`${"tab"} ${
              selectedTab === 3 ? "selected" : ""
            }`}
          >
            Comments
          </div>
        </div>

        <div>
          {selectedTab === 0 && this.renderOverviewTab()}
          {selectedTab === 1 && this.renderTreatmentTab()}
          {selectedTab === 2 && this.renderDentistTab()}
        </div>
      </div>
    );
  }
}

export default ClinicDetail;
