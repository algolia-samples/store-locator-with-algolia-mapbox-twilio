import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './App.css';
import {indexName, searchClient} from "../../lib/algoliaClient";



function App() {
  return (
    <div className="flex w-full flex-col">

      <header className="flex w-full">
        <Logo className={'w-2/10'} />
      </header>

      <div className={'flex h-full'}>
      </div>

      </div>
  );
}

export default App;
