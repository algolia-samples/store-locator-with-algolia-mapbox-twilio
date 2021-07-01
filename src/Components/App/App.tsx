import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './App.css';
//import {indexName, searchClient} from "../../lib/algoliaClient";
import {
  InstantSearch,
  Hits,
  RefinementList,
  Configure
} from 'react-instantsearch-dom'


function App() {
  return (
    <div className="flex w-full flex-col">

      <header className="flex w-full">
        <Logo className={'w-2/10'} />
      </header>

      <div className={'flex h-full w-full bg-reds-50'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ea molestias. Ab aperiam autem corporis deserunt doloribus ea facere impedit modi neque numquam optio quae, quaerat quidem recusandae reiciendis, reprehenderit!
      </div>

      </div>
  );
}

export default App;
