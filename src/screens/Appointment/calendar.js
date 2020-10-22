import React, { Component } from "react";

/*** Styles ***/
import styles from "./appointment.scss";
import 'react-big-calendar/lib/css/react-big-calendar.css';

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";

//*** Icons ***/
import addCircle from "../../icons/Icons_add-circle.svg";

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
class ACalendar extends Component {
  state = {

  };

  componentDidMount = async () => {

  };


	render() {
		let { activeLink } = this.state;
		const localizer = momentLocalizer(moment)
        let events = [
        {
          id: 11,
          title: 'Appointment - Gustavo Velasco',
          start: new Date(2020, 9, 13, 7, 0, 0),
          end: new Date(2020, 9, 13, 7, 30, 0),
        },
        {
          id: 12,
          title: 'Appointment - Chad Kelly',
          start: new Date(2020, 9, 17, 11, 30, 0),
          end: new Date(2020, 9, 17, 12, 0, 0),
        },
        {
          id: 12.5,
          title: 'Appointment - Erhan Temiz',
          start: new Date(2020, 9, 22, 8, 30, 0),
          end: new Date(2020, 9, 22, 9, 0, 0),
        },
        {
          id: 10,
          title: 'Appointment - Alfredo Benz',
          start: new Date(2020, 9, 22, 9, 0, 0),
          end: new Date(2020, 9, 22, 9, 30, 0),
        },
        {
          id: 13,
          title: 'Busy',
          start: new Date(2020, 9, 20, 13, 30, 0),
          end: new Date(2020, 9, 21, 16, 0, 0),
        },
        {
          id: 14,
          title: 'Appointment - Richard Hailey',
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3)),
        },

        {
          id: 16,
          title: 'Appointment - James Fox',
          start: new Date(2020, 9, 14, 15, 30, 0),
          end: new Date(2020, 9, 14, 19, 0, 0),
        },
        {
          id: 17,
          title: 'Appointment - Gustavo Velasco',
          start: new Date(2020, 10, 14, 16, 30, 0),
          end: new Date(2020, 10, 14, 20, 0, 0),
        },
        {
          id: 18,
          title: 'Appointment - Chad Kelly',
          start: new Date(2020, 10, 14, 16, 30, 0),
          end: new Date(2020, 10, 14, 17, 30, 0),
        },
        {
          id: 19,
          title: 'Appointment - Alfredo Bale',
          start: new Date(2020, 9, 14, 17, 30, 0),
          end: new Date(2020, 9, 14, 20, 30, 0),
        },
        {
          id: 20,
          title: 'Appointment - Alfredo Benz',
          start: new Date(2020, 10, 14, 17, 0, 0),
          end: new Date(2020,10, 14, 18, 30, 0),
        },
        {
          id: 21,
          title: 'Busy',
          start: new Date(2020, 10, 14, 17, 0, 0),
          end: new Date(2020, 10, 14, 18, 30, 0),
        }
      ];
	return (
		<div>
		<Calendar
  			localizer={localizer}
  			events= {events}
  			startAccessor="start"
  			endAccessor="end"
  			style={{ height: 500,
            }}
		/>
		</div>
	);
	}
}

export default ACalendar;
