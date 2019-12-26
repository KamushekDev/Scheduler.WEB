import React, { useState, useEffect } from 'react';
import Schedule from './Components/Schedule';
import './App.css';

type option = { value: string, label: string, color: string, isFixed?: boolean, isDisabled?: undefined };

const App: React.FC = () => {

  let [vars, setVars] = useState([{ name: 'lol', value: 'lalka' }, { name: 'lol2', value: 'lalkachen' }]);
  return (
    <div className="App">
      <Schedule groups={["6374"]} />
    </div>
  );
}

export default App;