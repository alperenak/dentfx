import React, { Component } from "react";

/*** Styles ***/
import styles from "./appointment.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";

//*** Icons ***/
import addCircle from "../../icons/Icons_add-circle.svg";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";

import moment from "moment";
import "moment/locale/tr";
import { func } from "prop-types";
import Modal from "../../components/Modal/modal";

let events = [
  {
    id: 11,
    title: "Appointment - Gustavo Velasco",
    start: new Date(2020, 9, 13, 7, 0, 0),
    end: new Date(2020, 9, 13, 7, 30, 0),
    resourceId: 1,
  },
  {
    id: 12,
    title: "Appointment - Chad Kelly",
    start: new Date(2020, 9, 17, 11, 30, 0),
    end: new Date(2020, 9, 17, 12, 0, 0),
    resourceId: 1,
  },
  {
    id: 12.5,
    title: "Appointment - Erhan Temiz",
    start: new Date(2020, 9, 22, 8, 30, 0),
    end: new Date(2020, 9, 22, 9, 0, 0),
    resourceId: 1,
  },
  {
    id: 10,
    title: "Appointment - Alfredo Benz",
    start: new Date(2020, 9, 22, 9, 0, 0),
    end: new Date(2020, 9, 22, 9, 30, 0),
    resourceId: 2,
  },
  {
    id: 13,
    title: "Busy",
    start: new Date(2020, 9, 20, 13, 30, 0),
    end: new Date(2020, 9, 21, 16, 0, 0),
    resourceId: 2,
  },
  {
    id: 14,
    title: "Appointment - Richard Hailey",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    resourceId: 1,
  },

  {
    id: 16,
    title: "Appointment - James Fox",
    start: new Date(2020, 9, 14, 15, 30, 0),
    end: new Date(2020, 9, 14, 19, 0, 0),
    resourceId: 2,
  },
  {
    id: 17,
    title: "Appointment - Gustavo Velasco",
    start: new Date(2020, 10, 14, 16, 30, 0),
    end: new Date(2020, 10, 14, 20, 0, 0),
    resourceId: 1,
  },
  {
    id: 18,
    title: "Appointment - Chad Kelly",
    start: new Date(2020, 10, 14, 16, 30, 0),
    end: new Date(2020, 10, 14, 17, 30, 0),
    resourceId: 2,
  },
  {
    id: 19,
    title: "Appointment - Alfredo Bale",
    start: new Date(2020, 9, 14, 17, 30, 0),
    end: new Date(2020, 9, 14, 20, 30, 0),
    resourceId: 1,
  },
  {
    id: 20,
    title: "Appointment - Alfredo Benz",
    start: new Date(2020, 10, 14, 17, 0, 0),
    end: new Date(2020, 10, 14, 18, 30, 0),
    resourceId: 2,
  },
  {
    id: 21,
    title: "Busy",
    start: new Date(2020, 10, 14, 17, 0, 0),
    end: new Date(2020, 10, 14, 18, 30, 0),
    resourceId: 2,
  },
];
const resourceMap = [
  { resourceId: 1, resourceTitle: "Dentist 1" },
  { resourceId: 2, resourceTitle: "Dentist 2" },
  { resourceId: 3, resourceTitle: "Dentist 3" },
];
const messages = {
  allDay: "Tüm gün",
  previous: "<",
  next: ">",
  today: "Bugün",
  month: "Ay",
  week: "Hafta",
  day: "Gün",
  agenda: "Ajanda",
  date: "Tarih",
  time: "Saat",
  event: "Kayıt",
  showMore: (total) => `+ daha gör (${total})`,
};
class ACalendar extends Component {
  state = {
    events,
    modalType: "",
  };

  componentDidMount = async () => {};

  handleSelectOnCreateEvent = ({ start, end }) => {
    console.log("deneme");
    $("#createEventOnCalendar").modal("show");
  };

  handleSelectOnEvent = () => {
    $("#alp").modal("show");
  };
  render() {
    let { activeLink } = this.state;
    const localizer = momentLocalizer(moment);

    return (
      <div>
        <Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 1000 }}
          culture="tr"
          messages={messages}
          defaultView={Views.WEEK}
          onSelectEvent={this.handleSelectOnEvent}
          onSelectSlot={this.handleSelectOnCreateEvent}
          resources={resourceMap}
          resourceIdAccessor="resourceId"
          resourceTitleAccessor="resourceTitle"
        />
        <Modal
          modalTitle={"Birseyler sec"}
          modalId="alp"
          modalFooterButtonTitle={"Kapat"}
        >
          <div>Merhaba</div>
        </Modal>
        <Modal
          modalTitle={"Birseyler sec"}
          modalId="createEventOnCalendar"
          modalFooterButtonTitle={"Kapat"}
        >
          <div>Create Event</div>
        </Modal>
      </div>
    );
  }
}

export default ACalendar;
