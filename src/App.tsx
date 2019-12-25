import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import axios from 'axios';
import './App.css';
import Schedule from './Components/Schedule';

type option = { value: string, label: string, color: string, isFixed?: boolean, isDisabled?: undefined };

const App: React.FC = () => {

  let [vars, setVars] = useState([{ name: 'lol', value: 'lalka' }, { name: 'lol2', value: 'lalkachen' }]);
  return (
    <div className="App">
      <Schedule />
    </div>
  );
}

export default App;
