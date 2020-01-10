import React, { useState, useEffect } from "react";
import Schedule from "./Components/Schedule";
import Tasks from "./Components/Tasks";
import Task from "./Components/Task";
import Auth from "./Components/Auth";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";

const testText: string =
  "Default text. Seams like request is going or failed with 401 :c";

const App = () => {
  let [token, setToken] = useState(localStorage.getItem("accessToken"));
  let [test, setTest] = useState<string>(testText);

  useEffect(() => {
    axios
      .get("/api/test/5", {
        headers: { Authorization: "Bearer " + token }
      })
      .then(response => setTest(response.data))
      .catch(ex => setTest(testText));
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
        <h4>{test}</h4>
        <div className="routerMain">
          <Switch>
            <Route exact path="/">
              <p>Тут типа текст стандартного пути</p>
            </Route>
            <Route path="/schedule">
              <Schedule groups={["6374"]} />
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
