import React, { Component } from "react";

/*** Styles ***/
import styles from "./appointment.scss";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";

//*** Icons ***/
import addCircle from "../../icons/Icons_add-circle.svg";

/*** Components ***/
import AppointmentCard from "./AppointmentCard";

class Appointment extends Component {
  state = {
    accordionActive: false,
    allAppointments: [],
    activeAppointments: [],
    completedAppointments: [],
    cancelledAppointments: [],
    pendingAppointments: [],
    activeLink: "all" /*all, active, completed, cancelled, new*/,
    cancelledCount: 0,
    activeCount: 0,
    completedCount: 0,
    pendingCount: 0,
    userType: null,
  };

  componentDidMount = async () => {
    let userId = getCookie("user_id");
    let userType = getCookie("user_type");
    this.setState({ userType });

    let completedCount = 0;
    let activeCount = 0;
    let cancelledCount = 0;
    let pendingCount = 0;

    let completedAppointments = [];
    let activeAppointments = [];
    let cancelledAppointments = [];
    let pendingAppointments = [];

    const response = await store.getAppointments({ userId });

    if (response.data) {
      this.setState({ allAppointments: response.data });

      response.data.map((record) => {
        if (record.isCancelledByDentist || record.isCancelledByUser) {
          cancelledAppointments.push(record);
          return (cancelledCount += 1);
        } else if (record.isConfirmed) {
          activeAppointments.push(record);
          return (activeCount += 1);
        } else if (record.isDone) {
          completedAppointments.push(record);
          return (completedCount += 1);
        } else {
          pendingAppointments.push(record);
          return (pendingCount += 1);
        }
      });
    }

    this.setState({
      cancelledCount,
      activeCount,
      completedCount,
      pendingCount,
      cancelledAppointments,
      activeAppointments,
      completedAppointments,
      pendingAppointments,
    });
  };

  onClickNav = (clicked) => {
    this.setState({ activeLink: clicked });
    console.log(this.state.completedAppointments);
  };

  renderTopBar = () => {
    let {
      activeLink,
      cancelledCount,
      activeCount,
      completedCount,
      pendingCount,
      userType,
    } = this.state;
    return (
      <div className={styles.topbarContainer}>
        <div className={styles.upper}>
          <div className={styles.breadcrumbs}>
            Randevularım / Tedavi Geçmişim
          </div>
          {userType === "user" && (
            <div
              className={styles.newAppointmentBtn}
              onClick={() => this.props.history.push("/appointment/search")}
            >
              <img src={addCircle} alt="" />
              <div>Yeni Randevu</div>
            </div>
          )}
        </div>

        <div className={styles.navbar}>
          <div
            className={`${styles.navLink} ${
              activeLink === "all" && styles.active
            }`}
            onClick={() => this.onClickNav("all")}
          >
            TÜMÜ ({cancelledCount + activeCount + completedCount + pendingCount}
            )
          </div>
          <div
            className={`${styles.navLink} ${
              activeLink === "active" && styles.active
            }`}
            onClick={() => this.onClickNav("active")}
          >
            AKTİF ({activeCount})
          </div>
          <div
            className={`${styles.navLink} ${
              activeLink === "completed" && styles.active
            }`}
            onClick={() => this.onClickNav("completed")}
          >
            TAMAMLANAN ({completedCount})
          </div>
          <div
            className={`${styles.navLink} ${
              activeLink === "cancelled" && styles.active
            }`}
            onClick={() => this.onClickNav("cancelled")}
          >
            İPTAL EDİLEN ({cancelledCount})
          </div>
          <div
            className={`${styles.navLink} ${
              activeLink === "pending" && styles.active
            }`}
            onClick={() => this.onClickNav("pending")}
          >
            BEKLEYEN ({pendingCount})
          </div>
        </div>
      </div>
    );
  };

  renderAll = () => {
    let appointments = this.state.allAppointments;

    return appointments.map((record, i) => {
      return <AppointmentCard data={record} key={i} />;
    });
  };

  renderActive = () => {
    let appointments = this.state.activeAppointments;

    return appointments.map((record, i) => {
      return <AppointmentCard data={record} key={i} />;
    });
  };

  renderCompleted = () => {
    let appointments = this.state.completedAppointments;

    return appointments.map((record, i) => {
      return <AppointmentCard data={record} key={i} />;
    });
  };

  renderCancelled = () => {
    let appointments = this.state.cancelledAppointments;

    return appointments.map((record, i) => {
      return <AppointmentCard data={record} key={i} />;
    });
  };

  renderPending = () => {
    let appointments = this.state.pendingAppointments;

    return appointments.map((record, i) => {
      return <AppointmentCard data={record} key={i} />;
    });
  };

  renderClinic = () => {};

  render() {
    let { activeLink } = this.state;

    return (
      <div>
        {this.renderTopBar()}
        {activeLink === "all" && this.renderAll()}
        {activeLink === "active" && this.renderActive()}
        {activeLink === "completed" && this.renderCompleted()}
        {activeLink === "cancelled" && this.renderCancelled()}
        {activeLink === "pending" && this.renderPending()}
      </div>
    );
  }
}

export default Appointment;
