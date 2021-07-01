import React from 'react';
import {
  InstantSearch,
  Hits,
  RefinementList,
  Configure
} from 'react-instantsearch-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './App.css';
import {indexName, searchClient} from "../../lib/algoliaClient";
import StoreComponent from "../StoreComponent/StoreComponent";
import MapComponent from "../Map/Map";
import Header from "../Header/Header";

type Hit = {
  name: string;
  city: string;
  country: string;
  services: string[];
  _geoloc: { lat: number; lng: number };
};


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
