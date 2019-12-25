import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import AsyncSelect from 'react-select/async';
import EnvVariables from './Components/EnvVariables'
import axios from 'axios';
import './App.css';
import Schedule from './Components/Schedule';

type option = { value: string, label: string, color: string, isFixed?: boolean, isDisabled?: undefined };

const App: React.FC = () => {

  let [vars, setVars] = useState([{ name: 'lol', value: 'lalka' }, { name: 'lol2', value: 'lalkachen' }]);

  const handleClick = () => {
    console.log('Hi');
    return [''];
  }

  let res = debounce(handleClick, 500, { 'trailing': true, maxWait: 3000 });

  const result = [
    { value: 'asd', label: 'asd', color: '#0068D9' },
    { value: 'asfdsdfhdfs', label: 'asfdsdfhdfs', color: '#00B8D9' },
    { value: 'aehbfsdb', label: 'aehbfsdb', color: '#00B8D9' },
    { value: 'adfhbsfdfag', label: 'adfhbsfdfag', color: '#00B8D9' },
    { value: 'sfdghgtf', label: 'sfdghgtf', color: '#00B8D9' },
    { value: 'aergvraetfdsvdfvx', label: 'aergvraetfdsvdfvx', color: '#00B8D9' },
    { value: 'dfgjkhtgdy', label: 'dfgjkhtgdy', color: '#666666' },
    { value: 'sdfdjdffgcbfgm,ggsd', label: 'dbvfgnh', color: '#453675' },
    { value: 'asfsdgsdbdbfgdgscv', label: 'fbfh', color: '#233445' },
    { value: 'awdhcvdsbh', label: 'awe', color: '#654565' }
  ];

  const promiseOptions = (input: any) =>
    new Promise(resolve => {
      resolve(result.filter(i => i.label.toLowerCase().includes(input.toLowerCase())));
    });

  useEffect(() => {
    axios.get('/api/test').then(resp => {
      setVars(resp.data);
      console.log(vars);
    })
  }, []);

  return (
    <div className="App">
      {/* <EnvVariables variables={vars} /> */}
      <Schedule />
      {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a onClick={e => {
          res();
          e.preventDefault();
        }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AsyncSelect cacheOptions defaultOptions onChange={x => console.log(x)} loadOptions={promiseOptions} className="Selectich" /> */}

    </div>
  );
}

export default App;
