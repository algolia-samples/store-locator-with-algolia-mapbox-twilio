import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {connectGeoSearch} from 'react-instantsearch-dom'
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
  markers: [number, number][],
  currentStore: GeoHit | null
  isUserInteraction: boolean
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
  }

  componentWillReceiveProps(nextProps: Readonly<GeoSearchProvided & MapProps>) {

    const {hits, currentStore} = nextProps;

    if(hits.length && hits !== this.props.hits) {
      // Update markers

      const markers: [number, number][] = hits.map((hit: GeoHit) => {
        const { _geoloc } = hit;
        return [_geoloc.lng, _geoloc.lat];
      })

      // Update center of map based on the 1st marker
      this.setState({markers}, () => {
        this.centerMapOnCoordinates(this.state.markers[0]);
      });


    }

  }



  centerMapOnCoordinates(coordinates: [number, number]) {
    if (!this.state.isUserInteraction) {
      const { refine } = this.props;
      this.setState({ isUserInteraction: true }, () => {
        this.map.flyTo({
          essential: false,
          center: [coordinates[0], coordinates[1]],
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
          onClick={() => {}}
          onMoveEnd={() => {}}
          onZoomEnd={() => {}}
        >
          <>
            {
              this.state.markers.map((marker: [number, number]) => {
                return <Marker coordinates={marker} key={marker.join('..')}><MakerImage/></Marker>
              })
            }
            <ZoomControl position={'bottom-right'} />
          </>
        </ReactMap>
      </div>
    )


  }

}

export default connectGeoSearch(MapComponent)