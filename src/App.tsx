import React, { useState, useEffect } from 'react';
import Schedule from './Components/Schedule';
import CSS from 'csstype'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams
} from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <div className="App" style={topMenuStyle}>
      <Router>
        <div className="topMenu">
          <Link to="/">Домашняя</Link>
          <Link to="/schedule">Расписание</Link>
          <Link to="/tasks">Задания</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <p>Тут типа текст стандартного пути</p>
          </Route>
          <Route path="/schedule">
            <Schedule groups={["6374"]} />
          </Route>
          <Route path="/tasks/:id">
            <Tasks />
          </Route>
          <Route path="/tasks">
            <p>Тут будет полный список заданий</p>
          </Route>
        </Switch>
      </Router >
    </div >
  );
}

const Tasks = () => {
  let { id } = useParams();
  return (
    <>
      <p>Тут будет задание с id = {id}</p>
    </>
  );
}

export default App;

const topMenuStyle: CSS.Properties = {
  display: 'block',
};