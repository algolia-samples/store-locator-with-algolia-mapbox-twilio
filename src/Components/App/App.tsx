import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './App.css';



function App() {
  return (
    <div className="flex w-full h-full flex-col">

      <header className="flex w-full">
        <Logo className={'w-2/10'} />
      </header>

      {/*<div className={'flex h-full w-full bg-red-50'}>
        <div className={'flex flex-col w-1/4 bg-blue-50'}>

        </div>
        <div className={'flex flex-col w-full bg-green-50'}>

        </div>
      </div>*/}

      </div>
  );
}

export default App;
