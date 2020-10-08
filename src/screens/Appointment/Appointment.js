import React, { Component } from "react";

/*** Styles ***/
import styles from "./appointment.scss";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";

//*** Icons ***/
import addCircle from "../../icons/Icons_add-circle.svg";
import illustration from "../../icons/illustration_2.svg";

/*** Components ***/
import AppointmentCard from "./AppointmentCard";
import Input from "../../components/Input";
import Button from "../../components/Button/button";

const dummy_data = [
  {
    id: "5f74d8796ea5351efea89753",
    User: {
      id: "5f5b8da929f9b23a09026619",
      name: "İbrahimibrahim",
      surname: "Kamacı",
      avatar:
        "https://i.pinimg.com/originals/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.png",
    },
    Clinic: {
      avatar:
        "https://i.pinimg.com/originals/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.png",
      rate: 4.5,
      _id: "5f6e84f05996e32f41d32414",
      name: "Innovation And Partners Dental",
    },
    Dentist: {
      id: "5f6eae3f8cf83c51024768b1",
      name: "Zafer Yasir",
      surname: "Yılmaz",
      avatar:
        "https://i.pinimg.com/originals/fc/04/73/fc047347b17f7df7ff288d78c8c281cf.png",
      rate: 4.8,
    },
    date: "01.10.2020",
    startTime: "02:30",
    endTime: "06:00",
    isCheckIn: false,
    paymentType: "onCheckIn",
    isCancelledByDentist: false,
    isCancelledByUser: false,
    isConfirmed: true,
    isPayed: false,
    createdAt: "2020-09-30T19:11:53.404Z",
    isDone: false,
    price: 70.0,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptas vitae qui, veniam dolorum quos asperiores suscipit iste, quis sequi maiores non deserunt aliquam quo provident voluptates sint animi repellendus!",
  },
];

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
    searchParams: {
      dateStart: new Date(),
      dateEnd: new Date(),
      keyword: "",
      location: "",
    },
    keyword: "",
  };

  componentDidMount = async () => {
    let userId = getCookie("user_id");
    let completedCount = 0;
    let activeCount = 0;
    let cancelledCount = 0;
    let pendingCount = 0;

    let completedAppointments = [];
    let activeAppointments = [];
    let cancelledAppointments = [];
    let pendingAppointments = [];

    const response = await store.getAppointments({ userId });

    console.log(response);

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

  submitAppointment = () => {};

  renderTopBar = () => {
    let {
      activeLink,
      cancelledCount,
      activeCount,
      completedCount,
      pendingCount,
    } = this.state;
    return (
      <div className={styles.topbarContainer}>
        <div className={styles.upper}>
          <div className={styles.breadcrumbs}>
            Randevularım / Tedavi Geçmişim
          </div>
          <div
            className={styles.newAppointmentBtn}
            onClick={() => this.setState({ activeLink: "new" })}
          >
            <img src={addCircle} alt="" />
            <div>Yeni Randevu</div>
          </div>
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

  renderNewAppointment = () => {
    return (
      <div className={styles.newAppointment}>
        <div className={styles.header}>
          <img src={illustration} alt="" />
          <div className={styles.headerText}>
            <div className={styles.title}>Hi Erhan,</div>
            <div className={styles.subtitle}>
              Hi Peter, make an appointment easily!
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.inputContainer}>
            <Input
              type="text"
              size="full"
              label={"What are you looking for?"}
              placeholder="Ex.: Kanal Tedavisi"
              onChange={(keyword) => {
                console.log(keyword);
                this.setState({
                  searchParams: { ...this.state.searchParams, keyword },
                });
              }}
            />
          </div>

          <div className={styles.twoInputs}>
            <Input
              type="date"
              size="half"
              label={"From Date"}
              defaultValue={new Date().toLocaleDateString()}
              name={"dateStart"}
              onChange={(dateStart) => {
                this.setState({
                  searchParams: { ...this.state.searchParams, dateStart },
                });
              }}
            />
            <Input
              type="date"
              size="half"
              label={"Until Date"}
              defaultValue={new Date().toLocaleDateString()}
              name={"dateEnd"}
              onChange={(dateEnd) => {
                this.setState({
                  searchParams: { ...this.state.searchParams, dateEnd },
                });
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <Input
              type="select"
              size="full"
              label={"Select Location"}
              placeholder={"Istanbul"}
              onChange={(location) => {
                this.setState({
                  searchParams: { ...this.state.searchParams, location },
                });
              }}
            />
          </div>

          <button className={styles.submitBtn} onClick={this.submitAppointment}>
            Randevu Ara
          </button>
        </div>
      </div>
    );
  };

  render() {
    let { activeLink } = this.state;

    return (
      <div>
        {activeLink !== "new" && this.renderTopBar()}
        {activeLink === "all" && this.renderAll()}
        {activeLink === "active" && this.renderActive()}
        {activeLink === "completed" && this.renderCompleted()}
        {activeLink === "cancelled" && this.renderCancelled()}
        {activeLink === "pending" && this.renderPending()}
        {activeLink === "new" && this.renderNewAppointment()}
      </div>
    );
  }
}

export default Appointment;
