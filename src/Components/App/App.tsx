import React, {useState} from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './App.css';
import {InstantSearch, Hits, Configure, RefinementList} from 'react-instantsearch-dom'
import {indexName, searchClient} from "../../lib/algoliaClient";
import {GeoHit} from "../../types/StoreHit";
import StoreComponent from "../StoreComponent/StoreComponent";
import Header from "../Header/Header";
import Map from "../Map/Map"
import {LngLat} from "../../types/LngLat";
import BopisSelector from "../BopisSelector/BopisSelector";


function App() {

  const [currentStore, setCurrentStore] = useState<GeoHit | null>(null)
  const [isOpen, setIsOpen] = useState(false)



  return (
    <div className="flex w-full h-full flex-col">

      <Header/>

      {/* BOPIS Component */}
      {currentStore ? <BopisSelector isOpen={isOpen} store={currentStore.name} onClose={() => {
        setCurrentStore(null)
        setIsOpen(false)
      }}/> : null}

      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <Configure
          aroundLatLngViaIP={!currentStore}
          aroundLatLng={currentStore ? `${currentStore._geoloc.lng},${currentStore._geoloc.lat}` : ''}
          analytics={true}
        />
        <div className={'flex h-full w-full'}>
          <div className={'flex flex-col w-1/4'}>
            <div className={'m-2'}>
              <RefinementList attribute={'services'}/>
            </div>

            <Hits<GeoHit> hitComponent={hit => <StoreComponent store={hit.hit} onClick={(store) => setCurrentStore(store)} currentStore={currentStore}  key={hit.hit.objectID}/>}/>
          </div>
          <div className={'flex flex-col w-full'}>
            <Map currentStore={currentStore ? [currentStore._geoloc.lng, currentStore._geoloc.lat] : null} onClickMarker={(storeCoordinate => {})}/>
          </div>
        </div>
      </InstantSearch>

      </div>
  );
}

export default App;
