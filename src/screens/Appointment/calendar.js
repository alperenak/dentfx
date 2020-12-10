import React, {Component, useState} from "react";

/*** Styles ***/
import styles from "./appointment.scss";
import 'react-big-calendar/lib/css/react-big-calendar.css';

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";

//*** Icons ***/
import addCircle from "../../icons/Icons_add-circle.svg";

import { Calendar, momentLocalizer,Views} from 'react-big-calendar';

import moment from "moment";
import "moment/locale/tr";
import { func } from "prop-types";
import Modal from "../../components/Modal/modal";

function Event({ event }) {
    return (
        <span>
      <strong>{event.title}</strong>
            {event.desc && ':  ' + event.desc}
    </span>
    )
}

function EventAgenda({ event }) {
    return (
        <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
    )
}

const customDayPropGetter = date => {
    if (date.getDate() === 7 || date.getDate() === 15)
        return {
            className: 'special-day',
            style: {
                border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
            },
        }
    else return {}
}

const customSlotPropGetter = date => {
    if (date.getDate() === 7 || date.getDate() === 15)
        return {
            className: 'special-day',
        }
    else return {}
}

let events = [
    {
        id: 11,
        title: 'Appointment - Gustavo Velasco',
        start: new Date(2020, 9, 13, 7, 0, 0),
        end: new Date(2020, 9, 13, 7, 30, 0),
        resourceId: 1
    },
    {
        id: 12,
        title: 'Appointment - Chad Kelly',
        start: new Date(2020, 9, 17, 11, 30, 0),
        end: new Date(2020, 9, 17, 12, 0, 0),
        resourceId: 1

    },
    {
        id: 12.5,
        title: 'Appointment - Erhan Temiz',
        start: new Date(2020, 9, 22, 8, 30, 0),
        end: new Date(2020, 9, 22, 9, 0, 0),
        resourceId: 1

    },
    {
        id: 10,
        title: 'Appointment - Alfredo Benz',
        start: new Date(2020, 9, 22, 9, 0, 0),
        end: new Date(2020, 9, 22, 9, 30, 0),
        resourceId: 2
    },
    {
        id: 13,
        title: 'Busy',
        start: new Date(2020, 9, 20, 13, 30, 0),
        end: new Date(2020, 9, 21, 16, 0, 0),
        resourceId: 2
    },
    {
        id: 14,
        title: 'Appointment - Richard Hailey',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
        resourceId: 1

    },
    {
        id: 16,
        title: 'Appointment - James Fox',
        start: new Date(2020, 9, 14, 15, 30, 0),
        end: new Date(2020, 9, 14, 19, 0, 0),
        resourceId: 2
    },
    {
        id: 17,
        title: 'Appointment - Gustavo Velasco',
        start: new Date(2020, 10, 14, 16, 30, 0),
        end: new Date(2020, 10, 14, 20, 0, 0),
        resourceId: 1
    },
    {
        id: 18,
        title: 'Appointment - Chad Kelly',
        start: new Date(2020, 10, 14, 16, 30, 0),
        end: new Date(2020, 10, 14, 17, 30, 0),
        resourceId: 2
    },
    {
        id: 19,
        title: 'Appointment - Alfredo Bale',
        start: new Date(2020, 9, 14, 17, 30, 0),
        end: new Date(2020, 9, 14, 20, 30, 0),
        resourceId: 1
    },
    {
        id: 20,
        title: 'Appointment - Alfredo Benz',
        start: new Date(2020, 10, 14, 17, 0, 0),
        end: new Date(2020,10, 14, 18, 30, 0),
        resourceId: 2
    },
    {
        id: 21,
        title: 'Busy',
        start: new Date(2020, 10, 14, 17, 0, 0),
        end: new Date(2020, 10, 14, 18, 30, 0),
        resourceId: 2
    }
];
let resourceMap = [
    { resourceId: 1, resourceTitle: 'Dentist 1' },
    { resourceId: 2, resourceTitle: 'Dentist 2' },
    { resourceId: 3, resourceTitle: 'Dentist 3' },
    { resourceId: 4, resourceTitle: 'Dentist 4' },
    { resourceId: 5, resourceTitle: 'Dentist 5' },
    { resourceId: 6, resourceTitle: 'Dentist 6' },
]
const messages = {
    allDay: 'Tüm gün',
    previous: '<',
    next: '>',
    today: 'Bugün',
    month: 'Ay',
    week: 'Hafta',
    day: 'Gün',
    agenda: 'Ajanda',
    date: 'Tarih',
    time: 'Saat',
    event: 'Kayıt',
    yesterday: 'Dün',
    tomorrow: 'Yarın',
    noEventsInRange: 'Bu aralıkta bir kayıt bulunamadı',
    showMore: total => `+ daha gör (${total})`
};
class ACalendar extends Component {


    state = {
      events,
      calendarEvents: [],
      modalType: "",
      allAppointments: [],
      userType: null,
  };

  componentDidMount = async () => {

      let userId = getCookie("user_id");
      let userType = getCookie("user_type");
      this.setState({ userType });

      const response = await store.getAppointments({ userId });
      let clinicResponse = await store.getClinicDetail({ clinicId: getCookie("user_id") });
      let clinicObject = clinicResponse.data;
      resourceMap = clinicObject.Dentist.map(dentist =>{
          return{
              resourceId: dentist.id,
              resourceTitle: `${dentist.name} ${dentist.surname} `
          }
      })

      if (response.data) {
          let _allAppointments = response.data.map(appointment => {

              let title = `Randevu ${appointment.User.name} ${appointment.User.surname} \n${appointment.treatmentType}`
              let dateArr = appointment.date.split('.');
              let dateArsr = appointment.startTime.split('.');
              let dateArrs= appointment.startTime.split('.');
              let [day,month,year] = appointment.date.split('.');
              let [startHour,startMinutes] = appointment.startTime.split(':');
              let [endHour,endMinutes] = appointment.endTime.split(':');
              return {
                  id: appointment.id,
                  title: title,
                  start: new Date(year, month, day, startHour, startMinutes, 0),
                  end: new Date(year, month, day, endHour, endMinutes, 0),
                  resourceId: appointment.Dentist.id
                  }
              }
          )
          this.setState({ allAppointments: _allAppointments });
      }
  }


  handleSelectOnCreateEvent = ({ start, end }) => {
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
          events={this.state.allAppointments}
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
          dayPropGetter={customDayPropGetter}
          slotPropGetter={customSlotPropGetter}
          components={{
              event: Event,
              agenda: {
                  event: EventAgenda,
              },
          }}
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
