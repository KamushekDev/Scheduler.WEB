import React, { useState, useEffect } from "react";
import ScheduleContainer from "./Components/Containers/ScheduleContainer";
import Tasks from "./Components/Tasks";
import Task from "./Components/Task";
import Auth from "./Components/Auth";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";

const defaultText: string = "Default text :D";

const App = () => {
  let [token, setToken] = useState(localStorage.getItem("accessToken"));
  let [text, setText] = useState<string>(defaultText);

  useEffect(() => {
    setText("Request is going...");
    axios
      .get("/api/test/5", {
        headers: { Authorization: "Bearer " + token }
      })
      .then(response => setText(response.data))
      .catch(ex => setText("Error: " + ex.message));
  }, [token]);

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
            <Link to="/">Домашняя</Link>
          </div>
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
        <h4>{text}</h4>
        <div className="routerMain">
          <Switch>
            <Route exact path="/">
              <p>Тут типа текст стандартного пути</p>
            </Route>
            <Route path="/schedule">
              <ScheduleContainer />
            </Route>
            <Route path="/tasks/:id">
              <Task />
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
