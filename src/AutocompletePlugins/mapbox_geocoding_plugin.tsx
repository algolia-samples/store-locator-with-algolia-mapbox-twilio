import qs from 'qs';
import {
  IMapboxFeature,
  IMapboxGeocodingResponse,
  IMapboxRequestParameters,
} from '../Interfaces';
import React from 'react';
import { debouncePromise } from '../lib';

const debouncedFetch = debouncePromise(fetch, 300);

const createMapboxGeocodingPlugin = (
  options: IMapboxRequestParameters,
  HitComponent: React.ComponentType<{
    item: IMapboxFeature;
    onClick: (item: IMapboxFeature) => void;
  }>,
  onClick: (result: IMapboxFeature) => void
) => {
  return {
    getSources({ query }: { query: string }) {
      const mapboxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        query
      )}.json`;
      const requestParams = {
        ...options,
        types: options.types,
        country: options.country,
        access_token: process.env.REACT_APP_MAPBOX_TOKEN,
      };

      const endpoint = [
        mapboxURL,
        qs.stringify(requestParams, { arrayFormat: 'comma' }),
      ].join('?');

      return debouncedFetch(endpoint)
        .then((response: any) => response.json())
        .then((data: IMapboxGeocodingResponse) => {
          return [
            {
              sourceId: 'mapboxPlugin',
              getItems() {
                return data.features;
              },
              templates: {
                item({ item }: { item: IMapboxFeature }) {
                  return (
                    <HitComponent
                      item={item}
                      onClick={(item: IMapboxFeature) => onClick(item)}
                    />
                  );
                },
                noResults() {
                  return 'No results.';
                },
              },
            },
          ];
        });
    },
  };
};

export { createMapboxGeocodingPlugin };
