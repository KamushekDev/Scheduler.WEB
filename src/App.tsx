import React from 'react';
import debounce from 'lodash/debounce';
import AsyncSelect from 'react-select/async';
import './App.css';

type option = { value: string, label: string, color: string, isFixed?: boolean, isDisabled?: undefined };

const App: React.FC = () => {

  const handleClick = ()=>{
    console.log('Hi');
    return [''];
  }

  let res = debounce(handleClick, 500, { 'trailing': true, maxWait: 3000 });

  const result = [
    { value: 'asd', label: 'asd', color: '#0068D9' },
    { value: 'asfdsdfhdfs', label: 'asfdsdfhdfs', color: '#00B8D9'},
    { value: 'aehbfsdb', label: 'aehbfsdb', color: '#00B8D9' },
    { value: 'adfhbsfdfag', label: 'adfhbsfdfag', color: '#00B8D9' },
    { value: 'sfdghgtf', label: 'sfdghgtf', color: '#00B8D9' },
    { value: 'aergvraetfdsvdfvx', label: 'aergvraetfdsvdfvx', color: '#00B8D9' },
    { value: 'dfgjkhtgdy', label: 'dfgjkhtgdy', color: '#666666' }
  ];

  const promiseOptions = (input: any) => 
    new Promise(resolve =>{
      resolve(result.filter(i => i.label.toLowerCase().includes(input.toLowerCase())));
    });

  return (
    <div className="App">
      <body className="App-header">
        <p>
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
        <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} className="Selectich"/>

      </body>
    </div>
  );
}

export default App;
