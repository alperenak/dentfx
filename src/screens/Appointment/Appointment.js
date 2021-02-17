import React, { Component } from 'react';

/*** Styles ***/
import styles from './appointment.scss';

/*** Utils ***/
import store from '../../store';
import { getCookie } from '../../utils/cookie';

//*** Icons ***/
import addCircle from '../../icons/Icons_add-circle.svg';

/*** Components ***/
import AppointmentCard from './AppointmentCard';
import Loading from '../../components/Loading';

class Appointment extends Component {
  state = {
    accordionActive: false,
    allAppointments: [],
    activeAppointments: [],
    completedAppointments: [],
    cancelledAppointments: [],
    pendingAppointments: [],
    activeLink: 'all' /*all, active, completed, cancelled, new*/,
    cancelledCount: 0,
    activeCount: 0,
    completedCount: 0,
    pendingCount: 0,
    userType: null,
    loading: true,
  };

  componentDidMount = async () => {
    let userId = getCookie('user_id');
    let userType = getCookie('user_type');
    this.setState({ userType });

    let completedCount = 0;
    let activeCount = 0;
    let cancelledCount = 0;
    let pendingCount = 0;

    let completedAppointments = [];
    let activeAppointments = [];
    let cancelledAppointments = [];
    let pendingAppointments = [];
    this.setState({ loading: true });
    const response = await store.getAppointments({ userId });

    if (response.data) {
      this.setState({ allAppointments: response.data, loading: false });
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
      <div className="topbarContainerAppointment">
        <div className="topbarContainerAppointment__upper">
          <div className="topbarContainerAppointment__upper__breadcrumbs">
            Randevularım / Tedavi Geçmişim
          </div>
          {userType === 'user' && (
            <div
              className="topbarContainerAppointment__upper__newAppointmentBtn"
              onClick={() => this.props.history.push('/')}
            >
              <img src={addCircle} alt="" />
              <div>Yeni Randevu</div>
            </div>
          )}
        </div>

        <div className="topbarContainerAppointment__navbarAppointment">
          <div
            className={`${'topbarContainerAppointment__navbarAppointment__navLink'} ${
              activeLink === 'all' &&
              'topbarContainerAppointment__navbarAppointment__navLink__active'
            }`}
            onClick={() => this.onClickNav('all')}
          >
            <div>
              TÜMÜ (
              {cancelledCount + activeCount + completedCount + pendingCount})
            </div>
          </div>
          <div
            className={`${'topbarContainerAppointment__navbarAppointment__navLink'} ${
              activeLink === 'active' &&
              'topbarContainerAppointment__navbarAppointment__navLink__active'
            }`}
            onClick={() => this.onClickNav('active')}
          >
            <div>AKTİF ({activeCount})</div>
          </div>
          <div
            className={`${'topbarContainerAppointment__navbarAppointment__navLink'} ${
              activeLink === 'completed' &&
              'topbarContainerAppointment__navbarAppointment__navLink__active'
            }`}
            onClick={() => this.onClickNav('completed')}
          >
            <div>TAMAMLANAN ({completedCount})</div>
          </div>
          <div
            className={`${'topbarContainerAppointment__navbarAppointment__navLink'} ${
              activeLink === 'cancelled' &&
              'topbarContainerAppointment__navbarAppointment__navLink__active'
            }`}
            onClick={() => this.onClickNav('cancelled')}
          >
            <div>İPTAL EDİLEN ({cancelledCount})</div>
          </div>
          <div
            className={`${'topbarContainerAppointment__navbarAppointment__navLink'} ${
              activeLink === 'pending' &&
              'topbarContainerAppointment__navbarAppointment__navLink__active'
            }`}
            onClick={() => this.onClickNav('pending')}
          >
            <div>BEKLEYEN ({pendingCount})</div>
          </div>
        </div>
      </div>
    );
  };

  renderAll = () => {
    let appointments = this.state.allAppointments;
    if (appointments && appointments.length !== 0) {
      return appointments.map((record, i) => {
        return (
          <AppointmentCard
            data={record}
            key={i}
            userType={this.state.userType}
          />
        );
      });
    } else return 'Randevu Bulunamadı';
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
      return (
        <AppointmentCard data={record} key={i} userType={this.state.userType} />
      );
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
      return (
        <AppointmentCard data={record} key={i} userType={this.state.userType} />
      );
    });
  };

  renderClinic = () => {};

  render() {
    let { activeLink, loading } = this.state;

    return (
      <>
        {loading ? (
          <Loading noBackground fullscreen />
        ) : (
          <div>
            {this.renderTopBar()}
            {activeLink === 'all' && this.renderAll()}
            {activeLink === 'active' && this.renderActive()}
            {activeLink === 'completed' && this.renderCompleted()}
            {activeLink === 'cancelled' && this.renderCancelled()}
            {activeLink === 'pending' && this.renderPending()}
          </div>
        )}
      </>
    );
  }
}

export default Appointment;
