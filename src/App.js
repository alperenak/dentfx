import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*** Components ***/
import UserTopBar from './components/UserTopBar/userTopBar';
import SideBar from './components/SideBar/sideBar';

/*** Screens ***/
import Landing from './screens/Landing/landing';
import Login from './screens/Login/login';
import LoginDentist from './screens/LoginDentist/LoginDentist';
import LoginClinic from './screens/LoginClinic/LoginClinic';
import SignUp from './screens/SignUp/signUp';
import Home from './screens/Home/home';
import Messages from './screens/Messages/Messages';
import Appointment from './screens/Appointment/Appointment';
import ACalendar from './screens/Appointment/calendar';
import SearchPage from './screens/SearchPage/searchPage';
import MessageDetails from './screens/Messages/MessageDetails';
import AddTreatment from './screens/AddTreatment/addTreatment';
import Reports from './screens/Reports/Reports';
import PaymentHistory from './screens/PaymentHistory/PaymentHistory';
import ClinicianDetails from './screens/ClinicianDetails/ClinicianDetails';

/*** Styles ***/
import './App.scss';

/*** Utils ***/
import { getCookie } from './utils/cookie';
import Profile from './screens/Profile/profile';
import SearchAppointment from './screens/Appointment/SearchAppointment';
import ClinicDetail from './screens/ClinicDetails/ClinicDetail';
import CreateAppointment from './screens/CreateAppointment/CreateAppointment';
import Clinician from './screens/Clinician/Clinician';
import NewClinician from './screens/NewClinician/NewClinician';
import NewMessage from './screens/Messages/NewMessage';
import Patients from './screens/Patients/Patients';
import PatientDetail from './screens/PatientDetail/PatientDetail';
import TreatmentManagement from './screens/TreatmentManagement/treatmentManagement';
import DentistDetail from './screens/DentistDetail/DentistDetail';
import Loading from './components/Loading';
import AlertBox from './components/Alert';
import { AlertContext } from './context/alertContext';
import {
  FullScreenLoadingContext,
  MainLoadingContext,
} from './context/loadingContext';
function App() {
  const [authorized, setAuthorized] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [
    setAlertboxIsActive,
    // eslint-disable-next-line no-unused-vars
    setAlertData,
    alertboxIsActive,
    alertData,
  ] = useContext(AlertContext);
  const [fullScreenLoading] = useContext(FullScreenLoadingContext);
  const [loading] = useContext(MainLoadingContext);
  // console.log(loading);
  useEffect(() => {
    if (getCookie('token')) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
    if (getCookie('user_type') === 'user') {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, []);

  return (
    <>
      <Router>
        {fullScreenLoading && <Loading />}
        {alertboxIsActive && (
          <AlertBox
            isActive={alertboxIsActive}
            setIsActive={setAlertboxIsActive}
            alertData={alertData}
          />
        )}
        {authorized ? (
          <div className="AppWrapper">
            <div className="topBarWrapper">
              <UserTopBar v-if={authorized} />
            </div>
            <div className="zeusContainer">
              <div className="leftPart">
                <SideBar v-if={authorized} />
              </div>
              {isUser ? (
                <>
                  <div className="middlePart">
                    <div className="middlePartContainer">
                      <Switch>
                        <Route
                          v-if={authorized}
                          path="/"
                          exact
                          render={(props) => <Home {...props} />}
                        />

                        <Route
                          v-if={authorized}
                          path="/appointment"
                          exact
                          render={(props) => <Appointment {...props} />}
                        />

                        <Route
                          v-if={authorized}
                          path="/calendar"
                          exact
                          render={(props) => <ACalendar {...props} />}
                        />

                        <Route
                          v-if={authorized}
                          path="/appointment/search"
                          exact
                          render={(props) => <SearchAppointment {...props} />}
                        />

                        <Route
                          path="/profile/:id"
                          exact
                          render={(props) => <Profile {...props} />}
                        />

                        <Route
                          path="/patients/"
                          exact
                          render={(props) => <Patients {...props} />}
                        />

                        <Route
                          path="/messages/details/:id"
                          exact
                          render={(props) => <MessageDetails {...props} />}
                        />

                        <Route
                          path="/messages"
                          exact
                          render={(props) => <Messages {...props} />}
                        />

                        <Route
                          path="/messages/new"
                          exact
                          render={(props) => <NewMessage {...props} />}
                        />

                        <Route
                          path="/clinic/:id"
                          exact
                          render={(props) => <ClinicDetail {...props} />}
                        />

                        <Route
                          path="/patients/:id"
                          exact
                          render={(props) => <PatientDetail {...props} />}
                        />

                        <Route
                          v-if={authorized}
                          path="/appointment/create/:id"
                          exact
                          render={(props) => <CreateAppointment {...props} />}
                        />
                        <Route
                          v-if={authorized}
                          path="/paymenthistory"
                          exact
                          render={(props) => <PaymentHistory {...props} />}
                        />

                        <Route
                          path="/clinician"
                          exact
                          render={(props) => <Clinician {...props} />}
                        />

                        <Route
                          path="/clinician/:id"
                          exact
                          render={(props) => <ClinicianDetails {...props} />}
                        />

                        <Route
                          path="/clinician/new"
                          exact
                          render={(props) => <NewClinician {...props} />}
                        />

                        <Route
                          path="/addTreatment"
                          exact
                          render={(props) => <AddTreatment {...props} />}
                        />
                      </Switch>
                    </div>
                  </div>
                  {/* <div className={'col-md-3 rightPart'}>
                      <RightMenu />
                    </div> */}
                </>
              ) : (
                <div className="middlePart">
                  <div className="middlePartContainer">
                    {loading ? (
                      <Loading fullscreen noBackground />
                    ) : (
                      <Switch>
                        <Route
                          v-if={authorized}
                          path="/"
                          exact
                          render={(props) => <Home {...props} />}
                        />

                        <Route
                          v-if={authorized}
                          path="/appointment"
                          exact
                          render={(props) => <Appointment {...props} />}
                        />

                        <Route
                          path="/dentist/:id"
                          exact
                          render={(props) => <DentistDetail {...props} />}
                        />

                        <Route
                          v-if={authorized}
                          path="/calendar"
                          exact
                          render={(props) => <ACalendar {...props} />}
                        />

                        <Route
                          v-if={authorized}
                          path="/appointment/search"
                          exact
                          render={(props) => <SearchAppointment {...props} />}
                        />

                        <Route
                          path="/profile/:id"
                          exact
                          render={(props) => <Profile {...props} />}
                        />

                        <Route
                          path="/patients/"
                          exact
                          render={(props) => <Patients {...props} />}
                        />

                        <Route
                          path="/messages/details/:id"
                          exact
                          render={(props) => <MessageDetails {...props} />}
                        />

                        <Route
                          path="/messages"
                          exact
                          render={(props) => <Messages {...props} />}
                        />

                        <Route
                          path="/messages/new"
                          exact
                          render={(props) => <NewMessage {...props} />}
                        />

                        <Route
                          path="/clinic/:id"
                          exact
                          render={(props) => <ClinicDetail {...props} />}
                        />

                        <Route
                          path="/patients/:id"
                          exact
                          render={(props) => <PatientDetail {...props} />}
                        />

                        <Route
                          v-if={authorized}
                          path="/appointment/create/:id"
                          exact
                          render={(props) => <CreateAppointment {...props} />}
                        />

                        <Route
                          path="/clinician"
                          exact
                          render={(props) => <Clinician {...props} />}
                        />
                        <Route
                          path="/clinician/:id"
                          exact
                          render={(props) => <ClinicianDetails {...props} />}
                        />
                        <Route
                          path="/treatmentManagement"
                          exact
                          render={(props) => <TreatmentManagement {...props} />}
                        />

                        <Route
                          path="/clinician/new"
                          exact
                          render={(props) => <NewClinician {...props} />}
                        />

                        <Route
                          path="/addTreatment"
                          exact
                          render={(props) => <AddTreatment {...props} />}
                        />

                        <Route
                          path="/reports"
                          exact
                          render={(props) => <Reports {...props} />}
                        />
                      </Switch>
                    )}
                  </div>
                </div>
              )}
              {/* <Footer /> */}
            </div>
          </div>
        ) : (
          <div>
            {/* <TopBar /> */}
            <div className="landingMain">
              <Switch>
                <Route
                  v-if={!authorized}
                  path="/"
                  exact
                  render={(props) => <Landing {...props} />}
                />
                <Route
                  path="/login/dentist"
                  exact
                  render={(props) => <LoginDentist {...props} />}
                />
                <Route
                  path="/login/clinic"
                  exact
                  render={(props) => <LoginClinic {...props} />}
                />
                <Route
                  path="/login"
                  exact
                  render={(props) => <Login {...props} />}
                />
                <Route
                  path="/searchPage"
                  exact
                  render={(props) => <SearchPage {...props} />}
                />
                <Route
                  path="/signup"
                  render={(props) => <SignUp {...props} />}
                />
              </Switch>
            </div>
          </div>
        )}
      </Router>{' '}
    </>
  );
}

export default App;
