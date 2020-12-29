import React, { Component, useState } from "react";

/*** Styles ***/
import styles from "./appointment.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";

/*** Utils ***/
import store from "../../store";
import { getCookie } from "../../utils/cookie";

//*** Icons ***/
import addCircle from "../../icons/Icons_add-circle.svg";
import Search from "../../icons/search.svg";
import RightSolid from "../../icons/chevron-right-solid.svg";
import ExternalIcon from "../../assets/icons/external-link-alt-solid.svg";
import LeftSolid from "../../icons/chevron-left-solid.svg";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";

import moment from "moment";
import "moment/locale/tr";
import { func } from "prop-types";
import Modal from "../../components/Modal/modal";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown/dropdown";
import Tabs from "../../components/Tabs/tabs";
import PatientSearch from "../../components/PatientSearch/patientSearch";
import DropdownItem from "../../components/Dropdown/sub-components/DropdownItem/dropdownItem";
import { Link } from "react-router-dom";

function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ":  " + event.desc}
    </span>
  );
}

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: "magenta" }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  );
}

const customDayPropGetter = (date) => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: "special-day",
      style: {
        border: "solid 3px " + (date.getDate() === 7 ? "#faa" : "#afa"),
      },
    };
  else return {};
};

const customSlotPropGetter = (date) => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: "special-day",
    };
  else return {};
};

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
let resourceMap = [
  { resourceId: 1, resourceTitle: "Dentist 1" },
  { resourceId: 2, resourceTitle: "Dentist 2" },
  { resourceId: 3, resourceTitle: "Dentist 3" },
  { resourceId: 4, resourceTitle: "Dentist 4" },
  { resourceId: 5, resourceTitle: "Dentist 5" },
  { resourceId: 6, resourceTitle: "Dentist 6" },
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
  yesterday: "Dün",
  tomorrow: "Yarın",
  noEventsInRange: "Bu aralıkta bir kayıt bulunamadı",
  showMore: (total) => `+ daha gör (${total})`,
};
class ACalendar extends Component {
  state = {
    appointmentDentistId: "",
    events,
    patientNameData: [],
    calendarEvents: [],
    modalType: "",
    dropdownActive: false,
    patientState: "Gelmedi",
    patientName: "",
    appointmentNotes: "",
    appointmentExplanation: "Acil",
    appointmentTimeMinute: "",
    appointmentDentist: "",
    selectedResourceId: false,
    tabName: "normal",
    allAppointments: [],
    userType: null,
    start: "",
    end: "",
  };

  componentDidMount = async () => {
    let userId = getCookie("user_id");
    let userType = getCookie("user_type");
    this.setState({ userType });

    const response = await store.getAppointments({ userId });
    let clinicResponse = await store.getClinicDetail({
      clinicId: getCookie("user_id"),
    });
    let clinicObject = clinicResponse.data;
    resourceMap = clinicObject.Dentist.map((dentist) => {
      return {
        resourceId: dentist.id,
        resourceTitle: `${dentist.name} ${dentist.surname} `,
      };
    });

    if (response.data) {
      let _allAppointments = response.data.map((appointment) => {
        let title = `Randevu ${appointment.User.name} ${appointment.User.surname} \n${appointment.treatmentType}`;
        let dateArr = appointment.date.split(".");
        let dateArsr = appointment.startTime.split(".");
        let dateArrs = appointment.startTime.split(".");
        let [day, month, year] = appointment.date.split(".");
        let [startHour, startMinutes] = appointment.startTime.split(":");
        let [endHour, endMinutes] = appointment.endTime.split(":");

        return {
          id: appointment.id,
          title: title,
          start: new Date(year, month, day, startHour, startMinutes, 0),
          end: new Date(year, month, day, endHour, endMinutes, 0),
          resourceId: appointment.Dentist.id,
        };
      });
      this.setState({
        allAppointments: _allAppointments,
        appointmentDentist: resourceMap[0].resourceTitle,
        appointmentDentistId: resourceMap[0].resourceId,
      });
    }
  };
  resetState = () => {
    this.setState({
      patientName: "",
      potientId: false,
      appointmentExplanation: "",
      appointmentNotes: "",
    });
  };
  handleSelectOnCreateEvent = (e) => {
    $("#createEventOnCalendar").modal("show");
    this.setState({
      selectedResourceId: e.resourceId,
      start: e.start,
      mode: "create",
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
    $("#createEventOnCalendar").modal("show");
    let event = e.title.split("-");

    console.log(event);
    this.setState({
      patientName: event[1],
      patientState: event[2],
      appointmentExplanation: event[3],
      appointmentNotes: event[4],
      appointmentDentist: event[5],
      id: e.id,
      selectedResourceId: e.resourceId,
      mode: "select",
      start: e.start,
      end: e.end,
      minuteRange: this.getDate(e.start, e.end),
    });
  };
  render() {
    let { activeLink, tabName } = this.state;
    const localizer = momentLocalizer(moment);
    console.log(this.state.patientState);
    return (
      <div>
        <Tabs
          tabsData={[
            {
              tabName: "NORMAL GÖRÜNÜM",
              onClick: () => this.setState({ tabName: "normal" }),
            },
            {
              tabName: "DİŞ HEKİMLERİ",
              onClick: () => this.setState({ tabName: "dentist" }),
            },
          ]}
        />

        <Calendar
          v-if={tabName === "normal"}
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
          components={{
            event: Event,
            agenda: {
              event: EventAgenda,
            },
          }}
        />
        <Calendar
          v-if={tabName === "dentist"}
          selectable
          events={this.state.allAppointments}
          resources={resourceMap}
          resourceIdAccessor="resourceId"
          onSelectEvent={(e) => this.handleSelectOnEvent(e)}
          onSelectSlot={(e) => this.handleSelectOnCreateEvent(e)}
          resourceTitleAccessor="resourceTitle"
          localizer={localizer}
          defaultView={Views.DAY}
          defaultDate={new Date()}
          views={["day"]}
        />
        {/* CREATE APPOINTMENT MODAL */}

        <Modal
          modalTitle={"Randevu oluştur"}
          modalId="createEventOnCalendar"
          modalFooterButtonTitle={"Kapat"}
          modalFooterSecondButtonTitle={"Kaydet"}
          modalFooterSecondButtonType={"primary"}
          modalFooterButtonOnClick={() => {
            this.resetState();
          }}
          modalFooterSecondButtonOnClick={() => {
            if (this.state.mode === "create") {
              // this.setState({
              //   allAppointments: [
              //     ...this.state.allAppointments,
              //     {
              //       id: Math.random().toString(16),
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
              if (this.state.isNew) {
                let startDate = this.state.start;
                let payload = {
                  isNew: true,
                  name: this.state.patientName,
                  dentist: this.state.appointmentDentistId,
                  treatmentType: this.state.appointmentExplanation,
                  date: `${startDate.getDate()}.${
                    String(startDate.getMonth() + 1).length === 1 ? 0 : ""
                  }${startDate.getMonth() + 1}.${startDate.getFullYear()}`,
                  startTime: `${startDate.getHours()}:${startDate.getMinutes()}`,
                  isCheckIn: false,
                  paymentType: "onCheckIn",
                };
                store
                  .CreateAppointment(payload)
                  .then(() => this.componentDidMount());
              } else if (!this.state.isNew) {
                let startDate = this.state.start;
                let payload = {
                  user: "",
                  dentist: this.state.appointmentDentistId,
                  treatmentType: this.state.appointmentExplanation,
                  date: `${startDate.getDate()}.${
                    String(startDate.getMonth() + 1).length === 1 ? 0 : ""
                  }${startDate.getMonth() + 1}.${startDate.getFullYear()}`,
                  startTime: `${startDate.getHours()}:${startDate.getMinutes()}`,
                  isCheckIn: false,
                  paymentType: "onCheckIn",
                };
                store.CreateAppointment(payload);
              }
            } else if (this.state.mode === "select") {
              let arr = this.state.allAppointments.filter((item) => {
                return item.id !== this.state.id;
              });
              this.setState({
                allAppointments: [
                  ...arr,
                  {
                    id: this.state.id,
                    title: `Randevu-${this.state.patientName}-${this.state.patientState}-${this.state.appointmentExplanation}-${this.state.appointmentNotes}-${this.state.appointmentDentist}`,
                    start: this.state.start,
                    end: new Date(
                      this.state.start.getTime() +
                        this.state.minuteRange * 60000
                    ),
                    resourceId: this.state.selectedResourceId,
                  },
                ],
              });
            }
          }}
        >
          <label className="mt-2" for="patientName">
            Hastanın Adı{"   "}
            {this.state.patientId && (
              <Link to={`patients/${this.state.patientId}`}>
                <img
                  src={ExternalIcon}
                  width="15"
                  height="15"
                  style={{ cursor: "pointer" }}
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
              <div class="input-group">
                <input
                  type="text"
                  id="patientName"
                  class="form-control"
                  placeholder="Hastanın Adı"
                  aria-label="Hastanın Adı"
                  aria-describedby="basic-addon2"
                  value={this.state.patientName}
                  onChange={(e) => {
                    this.setState({ patientName: e.target.value });
                    if (e.target.value.length > 2) {
                      let userId = getCookie("user_id");
                      store
                        .PatientSearch(userId, e.target.value)
                        .then((e) =>
                          this.setState({ patientNameData: e.data })
                        );

                      this.setState({ dropdownActive: true });
                      $("#patientSearchSpecific").modal("show");
                    } else this.setState({ dropdownActive: false });
                  }}
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">
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
              class="custom-control custom-checkbox mt-2"
              onClick={(e) => {
                let checkbox = document.getElementById("customCheck1").checked;
                this.setState({ isNew: checkbox });
              }}
            >
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1">
                {"Yeni hastanın kaydını oluştur"}
              </label>
            </div>
          ) : (
            ""
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
            id={"selectableDropdown"}
            type={"selectable"}
            labelName={"Açıklama"}
            onChange={(e) => {
              this.setState({ appointmentExplanation: e });
            }}
            selectableData={[
              "Acil",
              "Aparey",
              "Apse",
              "Band/Bond",
              "Biyomateryal",
              "Botoks",
              "Cerrahi işlem",
              "Detartraj",
              "Diş beyazlatma",
              "Diş çekimi",
              "Dolgu",
              "İmplant",
              "Kanal",
              "Kesim",
              "Kontrol",
              "Küretaj",
              "Muayene",
              "Ölçü",
              "Ortodonti",
              "Panoramik",
              "Pansuman",
              "Planlama",
              "Protez",
              "Protez prova",
              "Yeni hasta",
              "Yer tutucu",
            ]}
          />
          <Dropdown
            id={"selectableDropdown"}
            type={"selectable"}
            labelName={"Durum"}
            onChange={(e) => {
              this.setState({ patientState: e });
            }}
            selectableData={[
              "Gelmedi",
              "Ertelendi",
              "Değiştirildi",
              "Geldi",
              "Bekliyor",
              "Tedavide",
              "Onaylandı",
            ]}
          />
          <Dropdown
            id={"selectableDropdown"}
            type={"selectable"}
            labelName={"Diş Hekimi seçiniz"}
            onChange={(e) => {
              console.log("dentistId", getResourcesId(resourceMap, e));
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
          <div class="d-flex align-items-center justify-content-left">
            <button
              type="button"
              class="btn border mt-2 mr-2 mb-2"
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
              class="form-control"
              value={this.state.minuteRange}
            />
            <button
              type="button"
              class="btn border m-2"
              onClick={() =>
                this.setState({ minuteRange: this.state.minuteRange + 15 })
              }
            >
              <img style={{ width: 12.5, height: 12.5 }} src={RightSolid} />
            </button>
            dakika
          </div>
          <label for="exampleFormControlTextarea1">Notlar</label>
          <textarea
            class="form-control"
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
function RenderInput({ labelName, onChange, placeholder, inputId }) {
  return (
    <>
      <label for={inputId}>{labelName}</label>
      <input
        type="email"
        class="form-control"
        id={inputId}
        aria-describedby="emailHelp"
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </>
  );
}
function getResources(arr, resourceId) {
  let name = "";
  arr.map((item) => {
    if (item.resourceId === resourceId) {
      name = item.resourceTitle;
    }
  });
  return name;
}
function getResourcesId(arr, resourceName) {
  let id = "";
  console.log(resourceName);
  arr.map((item) => {
    if (item.resourceTitle.includes(resourceName)) {
      id = item.resourceId;
    }
  });
  return id;
}

export default ACalendar;
