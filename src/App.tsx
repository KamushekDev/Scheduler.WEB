import React, { useState, useEffect } from "react";
import ScheduleContainer from "./Components/Containers/ScheduleContainer";
import TasksContainer from "./Components/Containers/TasksContainer";
import ProfileContainer from "./Components/Containers/ProfileContainer";
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

  let profileLink = <Link to="/auth">Вход</Link>;

  if (token) {
    profileLink = <Link to="/profile">Профиль</Link>;
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
            <Link to="/groups">Группы</Link>
          </div>
          <div className="MenuItem">{profileLink}</div>
        </div>
        <div className="routerMain">
          <Switch>
            <Route exact path="/">
              <Redirect to="/schedule" />
            </Route>
            <Route path="/schedule">
              <ScheduleContainer token={token} />
            </Route>
            <Route path="/tasks">
              <TasksContainer token={token} />
            </Route>
            <Route path="/groups">
              <TasksContainer token={token} />
            </Route>
            <Route path="/auth/:accessToken?">
              <Auth token={token} setToken={setTokenFull} />
            </Route>
            <Route path="/profile">
              <ProfileContainer token={token} setToken={setTokenFull} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
