import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {connectGeoSearch} from 'react-instantsearch-dom'
import {Map} from 'mapbox-gl';
import {GeoSearchProvided} from 'react-instantsearch-core'
import {GeoHit} from "../../types/StoreHit";
import {ReactComponent as MakerImage} from "../../assets/marker.svg";
import {ReactComponent as MakerImageSelected} from "../../assets/marker-selected.svg";


const ReactMap = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN as string,
});

interface MapProps {
  onClickMarker: (store: GeoHit) => void
  currentStore: GeoHit | null
}

interface MapState {
  lat: number,
  lng: number,
  zoom: number,
  markers: GeoHit[],
  currentStore: GeoHit | null
  isUserInteraction: boolean,
  userInteractionEnabled: boolean
}


class MapComponent extends Component<GeoSearchProvided & MapProps, MapState> {

  map: any;

  state = {
    lat: 30.5,
    lng: 50.5,
    zoom: 9,
    markers: [],
    currentStore: this.props.currentStore,
    isUserInteraction: false,
    userInteractionEnabled: true
  }






  centerMapMarker(marker: GeoHit) {
    // This is added to avoid infinite loop
    if (!this.state.isUserInteraction) {
      //The refine method is provided by the connectGeoSearch HOC
      const { refine } = this.props;
      this.setState({ isUserInteraction: true }, () => {
        const { _geoloc } = marker
        // Center the map on marker given as argument
        this.map.flyTo({
          essential: false,
          center: [_geoloc.lat, _geoloc.lng],
          zoom: 7,
        });

        refine({
          northEast: this.map.getBounds().getNorthEast(),
          southWest: this.map.getBounds().getSouthWest(),
        });
      });
    }
  }

  render() {
    return (
      <div className={'h-full w-full relative'}>
        <ReactMap
          ref={(e) => {
            this.map = e?.state.map;
          }}
          style="mapbox://styles/mapbox/light-v10"
          containerStyle={{
            height: '100%',
            width: '100%',
            position: 'relative',
            display: 'block',
          }}
          onMoveEnd={() => {}}
          onZoomEnd={() => {}}
        >
            <ZoomControl position={'bottom-right'} />
        </ReactMap>
      </div>
    )


  }

}

export default connectGeoSearch(MapComponent)