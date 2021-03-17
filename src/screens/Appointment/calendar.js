import React, { Component } from 'react';

/*** Styles ***/
import './appointment.scss';
import 'react-big-calendar/lib/css/react-big-calendar.css';

/*** Utils ***/
import store from '../../store';
import { getCookie } from '../../utils/cookie';

//*** Icons ***/
import Search from '../../icons/search.svg';
import RightSolid from '../../icons/chevron-right-solid.svg';
import ExternalIcon from '../../assets/icons/external-link-alt-solid.svg';
import LeftSolid from '../../icons/chevron-left-solid.svg';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';

import moment from 'moment';
import 'moment/locale/tr';
import Modal from '../../components/Modal/modal';
import Dropdown from '../../components/Dropdown/dropdown';
import Tabs from '../../components/Tabs/tabs';
import PatientSearch from '../../components/PatientSearch/patientSearch';
import DropdownItem from '../../components/Dropdown/sub-components/DropdownItem/dropdownItem';
import { Link } from 'react-router-dom';

// ! patientName: event[1],
// ! patientState: event[2],
// ! appointmentExplanation: event[3],
// ! appointmentNotes: event[4],
// ! appointmentDentist: event[5],

function Event({ event }) {
  let eventArr = event.title.split('-');

  return (
    <span style={{ width: '100%' }}>
      <div className="eventPatientName">Hastanın Adı: {eventArr[1]}</div>
      {/* <div className="eventPatientState">{eventArr[2]}</div> */}
      <div className="eventAppointmentExplanation">Tedavi: {eventArr[3]}</div>
      <div className="eventAppointmentNotes">Diş Hekimi: {eventArr[4]}</div>
      <div className="eventAppointmentDentist">{eventArr[5]}</div>
      {event.desc && ':  ' + event.desc}
    </span>
  );
}

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  );
}

const customDayPropGetter = (date) => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
      style: {
        border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
      },
    };
  else return {};
};

const customSlotPropGetter = (date) => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
    };
  else return {};
};

let events = [
  {
    id: 11,
    title: 'Appointment - Gustavo Velasco',
    start: new Date(2020, 9, 13, 7, 0, 0),
    end: new Date(2020, 9, 13, 7, 30, 0),
    resourceId: 1,
  },
  {
    id: 12,
    title: 'Appointment - Chad Kelly',
    start: new Date(2020, 9, 17, 11, 30, 0),
    end: new Date(2020, 9, 17, 12, 0, 0),
    resourceId: 1,
  },
  {
    id: 12.5,
    title: 'Appointment - Erhan Temiz',
    start: new Date(2020, 9, 22, 8, 30, 0),
    end: new Date(2020, 9, 22, 9, 0, 0),
    resourceId: 1,
  },
  {
    id: 10,
    title: 'Appointment - Alfredo Benz',
    start: new Date(2020, 9, 22, 9, 0, 0),
    end: new Date(2020, 9, 22, 9, 30, 0),
    resourceId: 2,
  },
  {
    id: 13,
    title: 'Busy',
    start: new Date(2020, 9, 20, 13, 30, 0),
    end: new Date(2020, 9, 21, 16, 0, 0),
    resourceId: 2,
  },
  {
    id: 14,
    title: 'Appointment - Richard Hailey',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    resourceId: 1,
  },
  {
    id: 16,
    title: 'Appointment - James Fox',
    start: new Date(2020, 9, 14, 15, 30, 0),
    end: new Date(2020, 9, 14, 19, 0, 0),
    resourceId: 2,
  },
  {
    id: 17,
    title: 'Appointment - Gustavo Velasco',
    start: new Date(2020, 10, 14, 16, 30, 0),
    end: new Date(2020, 10, 14, 20, 0, 0),
    resourceId: 1,
  },
  {
    id: 18,
    title: 'Appointment - Chad Kelly',
    start: new Date(2020, 10, 14, 16, 30, 0),
    end: new Date(2020, 10, 14, 17, 30, 0),
    resourceId: 2,
  },
  {
    id: 19,
    title: 'Appointment - Alfredo Bale',
    start: new Date(2020, 9, 14, 17, 30, 0),
    end: new Date(2020, 9, 14, 20, 30, 0),
    resourceId: 1,
  },
  {
    id: 20,
    title: 'Appointment - Alfredo Benz',
    start: new Date(2020, 10, 14, 17, 0, 0),
    end: new Date(2020, 10, 14, 18, 30, 0),
    resourceId: 2,
  },
  {
    id: 21,
    title: 'Busy',
    start: new Date(2020, 10, 14, 17, 0, 0),
    end: new Date(2020, 10, 14, 18, 30, 0),
    resourceId: 2,
  },
];
let resourceMap = [
  { resourceId: 1, resourceTitle: 'Dentist 1' },
  { resourceId: 2, resourceTitle: 'Dentist 2' },
  { resourceId: 3, resourceTitle: 'Dentist 3' },
  { resourceId: 4, resourceTitle: 'Dentist 4' },
  { resourceId: 5, resourceTitle: 'Dentist 5' },
  { resourceId: 6, resourceTitle: 'Dentist 6' },
];
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
  showMore: (total) => `+ daha gör (${total})`,
};
class ACalendar extends Component {
  state = {
    appointmentDentistId: '',
    events,
    modalShow: false,
    patientNameData: [],
    calendarEvents: [],
    modalType: '',
    dropdownActive: false,
    patientState: 'Gelmedi',
    patientId: '',
    patientName: '',
    appointmentNotes: '',
    appointmentExplanation: 'Acil',
    appointmentTimeMinute: '',
    appointmentDentist: '',
    selectedResourceId: false,
    tabName: 'normal',
    allAppointments: [],
    userType: null,
    start: '',
    end: '',
  };

  componentDidMount = async () => {
    let userId = getCookie('user_id');
    let userType = getCookie('user_type');
    this.setState({ userType });
    const response = await store.getAppointments({ userId });
    let clinicResponse = await store.getClinicDetail({
      clinicId: getCookie('user_id'),
    });
    let clinicObject = clinicResponse.data;
    resourceMap = clinicObject.Dentist.map((dentist) => {
      return {
        resourceId: dentist.id,
        resourceTitle: `${dentist?.name} ${dentist?.surname} `,
      };
    });

    if (response.data) {
      let _allAppointments = response.data.map((appointment) => {
        let title = `Randevu-${
          appointment.User?.name ? appointment.User.name : 'Adı Bulunamadı'
        } ${appointment.User?.surname ? appointment.User.surname : ''}-${
          appointment?.id
        }-${appointment?.treatmentType}-${
          appointment.Dentist?.name
            ? appointment.Dentist.name
            : 'Diş Hekimi Bulunamadı'
        } ${appointment.Dentist?.surname ? appointment.Dentist.surname : ''}-`;
        // let dateArr = appointment.date.split('.');
        // let dateArsr = appointment.startTime.split('.');
        // let dateArrs = appointment.startTime.split('.');
        let [day, month, year] = appointment?.date
          ? appointment.date.split('.')
          : '01.01.1997';
        let [startHour, startMinutes] = appointment?.startTime.split(':');
        let [endHour, endMinutes] = appointment?.endTime.split(':');
        // eslint-disable-next-line no-console
        this.setState({
          appointmentDentist: `${appointment.Dentist?.name} ${appointment.Dentist?.surname}`,
          appointmentDentistId: appointment.Dentist?.id,
          appointmentExplanation: appointment?.treatmentType,
        });
        return {
          id: appointment.id,
          userId: appointment.User?.id,
          title: title,
          start: new Date(year, month - 1, day, startHour, startMinutes, 0),
          end: new Date(year, month - 1, day, endHour, endMinutes, 0),
          resourceId: appointment.Dentist?.id,
        };
      });
      this.setState({
        allAppointments: _allAppointments,
      });
    }
  };
  resetState = () => {
    this.setState({
      patientName: '',
      potientId: false,
      appointmentExplanation: '',
      appointmentNotes: '',
    });
  };
  closeModal = () => {
    this.setState({
      modalShow: false,
    });
  };
  // ! new Patient Create Appointment

  newPatientCreateAppointment() {
    let startDate = this.state.start;
    let payload = {
      isNew: true,
      name: this.state.patientName,
      Clinic: getCookie('user_id'),
      Dentist: this.state.appointmentDentistId,
      treatmentType: this.state.appointmentExplanation,
      date: `${
        String(startDate.getDate()).length === 1
          ? `0${startDate.getDate()}`
          : startDate.getDate()
      }.${String(startDate.getMonth() + 1).length === 1 ? 0 : ''}${
        startDate.getMonth() + 1
      }.${startDate.getFullYear()}`,
      startTime: convertHourMinute(this.state.start),
      endTime: convertHourMinute(this.state.end),
      isCheckIn: false,
      note: this.state.appointmentNotes,
      description: this.patientState,
      paymentType: 'onCheckIn',
    };
    store.CreateAppointment(payload).then(() => this.componentDidMount());
  }

  existedPatientCreateAppointment() {
    let startDate = this.state.start;
    let payload = {
      User: this.state.patientId,
      Dentist: this.state.appointmentDentistId,
      Clinic: getCookie('user_id'),
      treatmentType: this.state.appointmentExplanation,
      date: `${
        String(startDate.getDate()).length === 1
          ? `0${startDate.getDate()}`
          : startDate.getDate()
      }.${String(startDate.getMonth() + 1).length === 1 ? 0 : ''}${
        startDate.getMonth() + 1
      }.${startDate.getFullYear()}`,
      startTime: convertHourMinute(this.state.start),
      endTime: convertHourMinute(
        new Date(this.state.start.getTime() + this.state.minuteRange * 60000)
      ),
      isCheckIn: false,
      paymentType: 'onCheckIn',
      note: this.state.appointmentNotes,
      description: this.patientState,
    };
    store.CreateAppointment(payload).then(() => {
      this.componentDidMount();
    });
  }

  updateAppointment() {
    let startDate = this.state.start;
    // eslint-disable-next-line no-unused-vars
    let payload = {
      name: this.state.patientName,
      Clinic: getCookie('user_id'),
      Dentist: this.state.appointmentDentistId,
      User: this.state.patientId,
      treatmentType: this.state.appointmentExplanation,
      date: `${
        String(startDate.getDate()).length === 1
          ? `0${startDate.getDate()}`
          : startDate.getDate()
      }.${String(startDate.getMonth() + 1).length === 1 ? 0 : ''}${
        startDate.getMonth() + 1
      }.${startDate.getFullYear()}`,
      startTime: convertHourMinute(this.state.start),
      endTime: convertHourMinute(
        new Date(this.state.start.getTime() + this.state.minuteRange * 60000)
      ),
      isCheckIn: false,
      note: this.state.appointmentNotes,
      description: this.patientState,
      paymentType: 'onCheckIn',
    };

    store.UpdateAppointment(this.state.id, payload).then(() => {
      this.componentDidMount();
    });
  }

  handleSelectOnCreateEvent = (e) => {
    // window.$ = $;

    // window.$('#createEventOnCalendar').modal('show');
    // var myModal = new bootstrap.Modal(
    //   document.getElementById('createEventOnCalendar'),
    //   {
    //     keyboard: false,
    //   }
    // );
    // myModal.show();

    this.setState({ modalShow: true });
    this.setState({
      selectedResourceId: e.resourceId,
      start: e.start,
      mode: 'create',
      end: e.end,
      minuteRange: this.getDate(e.start, e.end),
    });
  };
  getDate = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const result = (endDate - startDate) / 60000;
    return result;
  };
  handleSelectOnEvent = (e) => {
    // window.$ = $;
    // window.$('#createEventOnCalendar').modal('show');
    let event = e.title.split('-');
    this.setState({ modalShow: true });
    // eslint-disable-next-line no-console
    console.log(e);
    this.setState({
      patientName: event[1],
      patientState: event[2],
      appointmentExplanation: event[3],
      appointmentNotes: event[4],
      appointmentDentist: event[5],
      patientId: e.userId,
      id: e.id,
      selectedResourceId: e.resourceId,
      mode: 'select',
      start: e.start,
      end: e.end,
      minuteRange: this.getDate(e.start, e.end),
    });
  };
  render() {
    let { tabName } = this.state;
    // eslint-disable-next-line no-console
    console.log(this.state.allAppointments);
    const localizer = momentLocalizer(moment);
    return (
      <div>
        <Tabs
          tabsData={[
            {
              tabName: 'NORMAL GÖRÜNÜM',
              onClick: () => this.setState({ tabName: 'normal' }),
            },
            {
              tabName: 'DİŞ HEKİMLERİ',
              onClick: () => this.setState({ tabName: 'dentist' }),
            },
          ]}
        />
        {tabName === 'normal' && (
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
            onSelectEvent={(e) => this.handleSelectOnEvent(e)}
            onSelectSlot={(e) => this.handleSelectOnCreateEvent(e)}
            dayPropGetter={customDayPropGetter}
            slotPropGetter={customSlotPropGetter}
            tooltipAccessor=""
            components={{
              event: Event,
              agenda: {
                event: EventAgenda,
              },
            }}
          />
        )}

        {tabName === 'dentist' && (
          <Calendar
            selectable
            events={this.state.allAppointments}
            resources={resourceMap}
            resourceIdAccessor="resourceId"
            onSelectEvent={(e) => this.handleSelectOnEvent(e)}
            onSelectSlot={(e) => this.handleSelectOnCreateEvent(e)}
            resourceTitleAccessor="resourceTitle"
            localizer={localizer}
            tooltipAccessor=""
            defaultView={Views.DAY}
            defaultDate={new Date()}
            views={['day']}
            components={{
              event: Event,
            }}
          />
        )}

        {/* CREATE APPOINTMENT MODAL */}
        {/* 
          modalThirdFooterType,
          modalThirdFooterOnClick,
          modalThirdFooterTitle, 
          modalThirdButtonVisibilty
    */}
        <Modal
          modalTitle={
            this.state.mode === 'select'
              ? 'Randevuyu Güncelle'
              : 'Randevu Oluştur'
          }
          modalId="createEventOnCalendar"
          modalThirdButtonVisibilty={
            this.state.mode === 'select' ? true : false
          }
          modalFooterButtonTitle={'Kapat'}
          modalFooterSecondButtonTitle={'Kaydet'}
          modalFooterSecondButtonType={'primary'}
          modalThirdFooterType={'danger'}
          modalThirdFooterTitle={'İptal Et'}
          modalThirdFooterOnClick={() => {
            store.CancelAppointment({ appointmentID: this.state.id });
          }}
          modalShow={this.state.modalShow}
          modalHandleClose={() => this.closeModal()}
          modalFooterButtonOnClick={() => {
            this.closeModal();
            this.resetState();
          }}
          modalFooterSecondButtonOnClick={() => {
            this.closeModal();
            if (this.state.mode === 'create') {
              if (this.state.isNew) {
                this.newPatientCreateAppointment();
              } else if (!this.state.isNew) {
                this.existedPatientCreateAppointment();
              }
            } else if (this.state.mode === 'select') {
              // let arr = this.state.allAppointments.filter((item) => {
              //   return item.id !== this.state.id;
              // });

              // let startDate = this.state.start;
              // let payload = {
              //   isNew: true,
              //   name: this.state.patientName,
              //   Clinic: getCookie('user_id'),
              //   Dentist: this.state.appointmentDentistId,
              //   treatmentType: this.state.appointmentExplanation,
              //   date: `${
              //     String(startDate.getDate()).length === 1
              //       ? `0${startDate.getDate()}`
              //       : startDate.getDate()
              //   }.${String(startDate.getMonth() + 1).length === 1 ? 0 : ''}${
              //     startDate.getMonth() + 1
              //   }.${startDate.getFullYear()}`,
              //   startTime: convertHourMinute(this.state.start),
              //   endTime: convertHourMinute(this.state.end),
              //   isCheckIn: false,
              //   note: this.state.appointmentNotes,
              //   description: this.patientState,
              //   paymentType: 'onCheckIn',
              // };
              this.updateAppointment();

              // this.setState({
              //   allAppointments: [
              //     ...arr,
              //     {
              //       id: this.state.id,
              //       title: `Randevu-${this.state.patientName}-${this.state.patientState}-${this.state.appointmentExplanation}-${this.state.appointmentNotes}-${this.state.appointmentDentist}`,
              //       start: this.state.start,
              //       end: new Date(
              //         this.state.start.getTime() +
              //           this.state.minuteRange * 60000
              //       ),
              //       resourceId: this.state.selectedResourceId,
              //     },
              //   ],
              // });
            }
          }}
        >
          <label className="mt-2" htmlFor="patientName">
            Hastanın Adı
            {this.state.patientId && (
              <Link
                to={`patients/${this.state.patientId}`}
                onClick={() => {
                  // window.$ = $;
                  // window.$('#createEventOnCalendar').modal('hide');
                }}
              >
                <img
                  src={ExternalIcon}
                  width="15"
                  height="15"
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            )}
          </label>
          {/* <div class="input-group">
            <input
              type="text"
              id="patientName"
              class="form-control"
              placeholder="Hastanın Adı"
              aria-label="Hastanın Adı"
              aria-describedby="basic-addon2"
              onChange={(e) => this.setState({ patientName: e.target.value })}
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                <img src={Search} width="20" />
              </button>
            </div>
          </div> */}
          <DropdownItem
            dropdownActive={this.state.dropdownActive}
            parent={
              <div className="input-group">
                <input
                  type="text"
                  id="patientName"
                  className="form-control"
                  placeholder="Hastanın Adı"
                  aria-label="Hastanın Adı"
                  aria-describedby="basic-addon2"
                  value={this.state.patientName}
                  onChange={(e) => {
                    this.setState({ patientName: e.target.value });
                    if (e.target.value.length > 2) {
                      let userId = getCookie('user_id');
                      store
                        .PatientSearch(userId, e.target.value)
                        .then((e) =>
                          this.setState({ patientNameData: e.data })
                        );
                      this.setState({ dropdownActive: true });
                    } else this.setState({ dropdownActive: false });
                  }}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <img src={Search} width="20" />
                  </button>
                </div>
              </div>
            }
          >
            <PatientSearch
              onClick={(e) =>
                this.setState({
                  patientName: e.fullname,
                  patientId: e.id,
                  dropdownActive: false,
                })
              }
              patientData={this.state.patientNameData}
            />
          </DropdownItem>
          {(!this.state.patientNameData ||
            this.state.patientNameData.length == 0) &&
          this.state.patientName.length > 2 ? (
            <div
              className="custom-control custom-checkbox mt-2"
              onClick={() => {
                let checkbox = document.getElementById('customCheck1').checked;
                this.setState({ isNew: checkbox });
              }}
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                {'Yeni hastanın kaydını oluştur'}
              </label>
            </div>
          ) : (
            ''
          )}

          {/* search section  */}
          {/* <Input
            placeholder={"Hastanın Adı"}
            icon={{ src: Search, position: "right" }}
            onChange={(value) => {
              this.setState({ patientName: value });
            }}
          /> */}
          <Dropdown
            id={'selectableDropdown'}
            type={'selectable'}
            labelName={'Açıklama'}
            value={this.state.appointmentExplanation}
            onChange={(e) => {
              this.setState({ appointmentExplanation: e });
            }}
            selectableData={[
              'Acil',
              'Aparey',
              'Apse',
              'Band/Bond',
              'Biyomateryal',
              'Botoks',
              'Cerrahi işlem',
              'Detartraj',
              'Diş beyazlatma',
              'Diş çekimi',
              'Dolgu',
              'İmplant',
              'Kanal',
              'Kesim',
              'Kontrol',
              'Küretaj',
              'Muayene',
              'Ölçü',
              'Ortodonti',
              'Panoramik',
              'Pansuman',
              'Planlama',
              'Protez',
              'Protez prova',
              'Yeni hasta',
              'Yer tutucu',
            ]}
          />
          <Dropdown
            id={'selectableDropdown'}
            type={'selectable'}
            labelName={'Durum'}
            onChange={(e) => {
              this.setState({ patientState: e });
            }}
            selectableData={[
              'Gelmedi',
              'Ertelendi',
              'Değiştirildi',
              'Geldi',
              'Bekliyor',
              'Tedavide',
              'Onaylandı',
            ]}
          />
          <Dropdown
            id={'selectableDropdown'}
            type={'selectable'}
            labelName={'Diş Hekimi seçiniz'}
            onChange={(e) => {
              this.setState({
                appointmentDentist: e,
                appointmentDentistId: getResourcesId(resourceMap, e),
              });
            }}
            defaultValue={getResources(
              resourceMap,
              this.state.selectedResourceId
            )}
            selectableData={resourceMap.map((item) => {
              return item.resourceTitle;
            })}
          />
          <div className="d-flex align-items-center justify-content-left">
            <button
              type="button"
              className="btn border mt-2 mr-2 mb-2"
              onClick={() => {
                if (this.state.minuteRange > 15)
                  this.setState({ minuteRange: this.state.minuteRange - 15 });
              }}
            >
              <img style={{ width: 12.5, height: 12.5 }} src={LeftSolid} />
            </button>
            <input
              type="text"
              style={{ width: 60 }}
              className="form-control"
              value={this.state.minuteRange}
            />
            <button
              type="button"
              className="btn border m-2"
              onClick={() =>
                this.setState({ minuteRange: this.state.minuteRange + 15 })
              }
            >
              <img style={{ width: 12.5, height: 12.5 }} src={RightSolid} />
            </button>
            dakika
          </div>
          <label htmlFor="exampleFormControlTextarea1">Notlar</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) =>
              this.setState({ appointmentNotes: e.target.value })
            }
          ></textarea>
        </Modal>
      </div>
    );
  }
}
// function RenderInput({ labelName, onChange, placeholder, inputId }) {
//   return (
//     <>
//       <label htmlFor={inputId}>{labelName}</label>
//       <input
//         type="email"
//         className="form-control"
//         id={inputId}
//         aria-describedby="emailHelp"
//         placeholder={placeholder}
//         onChange={onChange}
//       ></input>
//     </>
//   );
// }
function getResources(arr, resourceId) {
  let name = '';
  arr.map((item) => {
    if (item.resourceId === resourceId) {
      name = item.resourceTitle;
    }
  });
  return name;
}
function getResourcesId(arr, resourceName) {
  let id = '';
  arr.map((item) => {
    if (item.resourceTitle.includes(resourceName)) {
      id = item.resourceId;
    }
  });
  return id;
}
export function convertHourMinute(date) {
  const d = new Date(date);
  let minutes = `${d.getMinutes()}`;
  let saat = `${d.getHours()}`;
  return `${String(saat).length === 1 ? 0 : ''}${saat}:${
    String(minutes).length === 1 ? 0 : ''
  }${minutes}`;
}

export default ACalendar;
