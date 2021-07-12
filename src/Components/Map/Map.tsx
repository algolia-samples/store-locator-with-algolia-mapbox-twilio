import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Map} from 'mapbox-gl';
import {connectGeoSearch} from 'react-instantsearch-dom';
import {GeoSearchProvided} from 'react-instantsearch-core'
import {LngLat} from "../../types/LngLat";
import {ReactComponent as MarkerUnselected} from "../../assets/marker.svg";
import {ReactComponent as MarkerSelected} from "../../assets/marker-selected.svg";
import SearchAsMoving from "./SearchAsMoving";
import {comparePosition} from "../../lib";


interface MapState {
  lat: number,
  lng: number,
  zoom: number,
  markers: LngLat[]
  isUserInteraction: boolean,
  userInteractionEnabled: boolean
  currentStore: LngLat | null
}

interface MapProps {
  currentStore: LngLat | null,
  onClickMarker: (marker: LngLat) => void
}

const ReactMap = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN as string,
});

class MapComponent extends Component<GeoSearchProvided & MapProps, MapState> {
  map: any;

  state = {
    lat: 30.5,
    lng: 50.5,
    zoom: 9,
    markers: [],
    currentStore: this.props.currentStore || [0 , 0],
    isUserInteraction: false,
    userInteractionEnabled: true
  };
  
  constructor(props: GeoSearchProvided & MapProps) {
    super(props);
    this.centerMapOnCoordinates = this.centerMapOnCoordinates.bind(this);
    this.onMapInteraction = this.onMapInteraction.bind(this);
  }

  componentWillReceiveProps(nextProps: Readonly<GeoSearchProvided & MapProps>) {

    const {hits, currentStore} = nextProps

    if(hits.length && hits !== this.props.hits) {

      const markers: LngLat[] = hits.map(
        ({ _geoloc }: { _geoloc: { lat: number; lng: number } }) => {
          return [_geoloc.lng, _geoloc.lat];
        }
      );

      this.setState({markers}, () => {
        /* Center the map on the 1st marker*/
        this.centerMapOnCoordinates(markers[0])
      })


    }


    if(currentStore && currentStore !== this.props.currentStore) {
      this.setState({currentStore}, () => {
        /* Center the map on the store*/
        this.centerMapOnCoordinates(this.state.currentStore)
      })
    }

  }

  centerMapOnCoordinates(coordinates: LngLat) {
    if (!this.state.isUserInteraction) {
      const { refine } = this.props;
      this.setState({ isUserInteraction: true }, () => {
        this.map.flyTo({
          essential: false,
          center: coordinates,
          zoom: 7,
        });

        refine({
          northEast: this.map.getBounds().getNorthEast(),
          southWest: this.map.getBounds().getSouthWest(),
        });
      });
    }
  }

  onMapInteraction(map: Map) {
    if (this.state.userInteractionEnabled) {
      const { refine } = this.props;

      refine({
        northEast: map.getBounds().getNorthEast(),
        southWest: map.getBounds().getSouthWest(),
      });
    }
  }






  render() {
    return (
      <div className={'h-full w-full relative'}>
        <div className={'h-full w-full'}>
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
              //overflow: 'hidden'
            }}
            onMoveEnd={this.onMapInteraction}

          >
            <>
              {
                this.state.markers.map((marker: LngLat) => {
                  return <Marker coordinates={marker}>
                    {comparePosition(this.state.currentStore, marker) ? <MarkerSelected/> : <MarkerUnselected/>}
                  </Marker>
                })
              }
            <ZoomControl position={'bottom-right'} />
            </>
          </ReactMap>
          <SearchAsMoving checked={this.state.userInteractionEnabled} onChange={(userInteractionEnabled) => this.setState({userInteractionEnabled})}/>

        </div>

      </div>
    );
  }
}

export default connectGeoSearch(MapComponent)