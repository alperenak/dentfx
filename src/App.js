import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*** Components ***/
import UserTopBar from "./components/UserTopBar/userTopBar";
import SideBar from "./components/SideBar/sideBar";

/*** Screens ***/
import Landing from "./screens/Landing/landing";
import Login from "./screens/Login/login";
import SignUp from "./screens/SignUp/signUp";
import Home from "./screens/Home/home";
import Messages from "./screens/Messages/Messages";
import Appointment from "./screens/Appointment/Appointment";

/*** Styles ***/
import styles from "./App.scss";

/*** Utils ***/
import { getCookie } from "./utils/cookie";
import Profile from "./screens/Profile/profile";
import RightMenu from "./components/RightMenu/RightMenu";
import Footer from "./components/Footer/Footer";
import SearchAppointment from "./screens/Appointment/SearchAppointment";
import ClinicDetail from "./screens/ClinicDetails/ClinicDetail";

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
      <div className={styles.App}>
        <Router>
          <UserTopBar v-if={authorized} />
          <SideBar v-if={authorized} />
          <Switch>
            <Route
              v-if={!authorized}
              path="/"
              exact
              render={(props) => <Landing {...props} />}
            />
            <Route path="/login" render={(props) => <Login {...props} />} />
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
                render={(props) => <Profile {...props} />}
              />
              <Route
                path="/messages"
                render={(props) => <Messages {...props} />}
              />

              <Route
                path="/clinic/:id"
                render={(props) => <ClinicDetail {...props} />}
              />
            </div>
          </Switch>
        </Router>
        <RightMenu v-if={authorized} />
      </div>{" "}
      <Footer />
    </>
  );
}

export default App;
