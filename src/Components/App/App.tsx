import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './App.css';
import {InstantSearch, Hits, Configure, RefinementList} from 'react-instantsearch-dom'
import {indexName, searchClient} from "../../lib/algoliaClient";
import {GeoHit} from "../../types/StoreHit";
import StoreComponent from "../StoreComponent/StoreComponent";


function App() {
  return (
    <div className="flex w-full h-full flex-col">

      <header className="flex w-full">
        <Logo className={'w-2/10'} />
      </header>

      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <div className={'flex h-full w-full bg-red-50'}>
          <div className={'flex flex-col w-1/4 bg-blue-50'}>
            <Hits<GeoHit> hitComponent={hit => <StoreComponent store={hit.hit} onClick={() => {}} currentStore={null}  key={hit.hit.objectID}/>}/>
          </div>
          <div className={'flex flex-col w-full bg-green-50'}>

          </div>
        </div>
      </InstantSearch>

      </div>
  );
}

export default App;
