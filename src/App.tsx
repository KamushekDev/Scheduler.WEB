import React, { useState, useEffect } from "react";
import ScheduleContainer from "./Components/Containers/ScheduleContainer";
import Tasks from "./Components/Tasks";
import Auth from "./Components/Auth";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import "./App.css";

const defaultText: string = "Default text :D";

const App = () => {
  let [token, setToken] = useState(localStorage.getItem("accessToken"));

  const setTokenFull = (value: string | null) => {
    if (value) localStorage.setItem("accessToken", value);
    else localStorage.removeItem("accessToken");
    setToken(value);
  };

  let authLinkName = "Вход";

  if (token) {
    authLinkName = "Профиль";
  }

  return (
    <div className="App">
      <Router>
        <div className="TopMenu">
          <div className="MenuItem">
            <Link to="/schedule">Расписание</Link>
          </div>
          <div className="MenuItem">
            <Link to="/tasks">Задания</Link>
          </div>
          <div className="MenuItem">
            <Link to="/auth">{authLinkName}</Link>
          </div>
        </div>
        <div className="routerMain">
          <Switch>
            <Route exact path="/">
              <Redirect to="/schedule" />
            </Route>
            <Route path="/schedule">
              <ScheduleContainer />
            </Route>
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/auth/:accessToken?">
              <Auth token={token} setToken={setTokenFull} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
