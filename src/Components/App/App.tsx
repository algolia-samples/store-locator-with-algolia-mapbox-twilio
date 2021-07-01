import React, {useState} from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './App.css';
import {InstantSearch, Hits, Configure, RefinementList} from 'react-instantsearch-dom'
import {indexName, searchClient} from "../../lib/algoliaClient";
import {GeoHit} from "../../types/StoreHit";
import StoreComponent from "../StoreComponent/StoreComponent";
import Header from "../Header/Header";
import Map from "../Map/Map"


function App() {

  const [currentStore, setCurrentStore] = useState<GeoHit | null>(null)


  return (
    <div className="flex w-full h-full flex-col">

      <Header/>

      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <Configure aroundLatLngViaIP={true} />
        <div className={'flex h-full w-full'}>
          <div className={'flex flex-col w-1/4'}>
            <div className={'m-2'}>
              <RefinementList attribute={'services'}/>
            </div>

            <Hits<GeoHit> hitComponent={hit => <StoreComponent store={hit.hit} onClick={(store) => setCurrentStore(store)} currentStore={currentStore}  key={hit.hit.objectID}/>}/>
          </div>
          <div className={'flex flex-col w-full'}>
            <Map/>
          </div>
        </div>
      </InstantSearch>

      </div>
  );
}

export default App;
