import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*** Components ***/
import UserTopBar from "./components/UserTopBar/userTopBar";
import SideBar from "./components/SideBar/sideBar";

/*** Screens ***/
import Landing from "./screens/Landing/landing";
import Login from "./screens/Login/login";
import LoginDentist from "./screens/LoginDentist/LoginDentist";
import LoginClinic from "./screens/LoginClinic/LoginClinic";
import SignUp from "./screens/SignUp/signUp";
import Home from "./screens/Home/home";
import Messages from "./screens/Messages/Messages";
import Appointment from "./screens/Appointment/Appointment";
import MessageDetails from "./screens/Messages/MessageDetails";

/*** Styles ***/
import styles from "./App.scss";

/*** Utils ***/
import { getCookie } from "./utils/cookie";
import Profile from "./screens/Profile/profile";
import RightMenu from "./components/RightMenu/RightMenu";
import Footer from "./components/Footer/Footer";
import SearchAppointment from "./screens/Appointment/SearchAppointment";
import ClinicDetail from "./screens/ClinicDetails/ClinicDetail";
import CreateAppointment from "./screens/CreateAppointment/CreateAppointment";
import Clinician from "./screens/Clinician/Clinician";
import NewClinician from "./screens/NewClinician/NewClinician";
import NewMessage from "./screens/Messages/NewMessage";

function App() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (getCookie("token")) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, []);

  return (
    <>
        <Router>
		<div class="wrapper">
			<UserTopBar v-if={authorized} />
		</div>


          <SideBar v-if={authorized} />
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

            <Route path="/signup" render={(props) => <SignUp {...props} />} />
            <div className={styles.screenContainer}>
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
                path="/clinician/new"
                exact
                render={(props) => <NewClinician {...props} />}
              />
            </div>
          </Switch>
        </Router>
        <RightMenu v-if={authorized} />
      {" "}
    </>
  );
}

export default App;
