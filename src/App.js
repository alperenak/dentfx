import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

/*** Components ***/
import UserTopBar from "./components/UserTopBar/userTopBar";
import SideBar from "./components/SideBar/sideBar";

/*** Screens ***/
import Landing from "./screens/Landing/landing";
import Login from "./screens/Login/login";
import SignUp from "./screens/SignUp/signUp";
import Home from "./screens/Home/home";

/*** Styles ***/
import styles from "./App.scss";

/*** Utils ***/
import {getCookie} from "./utils/cookie";

function App() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (getCookie('token')) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, []);

  return (
    <div className={styles.App}>
      <UserTopBar v-if={authorized}/>
      <SideBar v-if={authorized}/>
      <Router>
        <Switch>
          <Route
              v-if={!authorized}
              path="/"
              exact
              render={(props) => (<Landing {...props} />)}
          />
          <Route
            v-if={authorized}
            path="/"
            exact
            render={(props) => (<Home {...props} />)}
          />
          <Route
            path="/login"
            render={(props) => (<Login {...props} />)}
          />
          <Route
            path="/signup"
            render={(props) => (<SignUp {...props} />)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
