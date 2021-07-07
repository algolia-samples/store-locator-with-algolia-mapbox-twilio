import { IMapboxFeature } from '../../Interfaces';
import { ReactComponent as Marker } from '../../assets/marker.svg';
import { ReactComponent as ShopCenter } from '../../assets/shop-center.svg';
import React from 'react';

const MapboxAddressComponent = ({
  item,
  onClick,
}: {
  item: IMapboxFeature;
  onClick: (hit: IMapboxFeature) => void;
}): JSX.Element => {
  return (
    <div onClick={() => onClick(item)} className={'flex items-center py-2'}>
      <Marker className={'w-6 h-6 mr-2 stroke-current text-purple-800'} />
      {item.place_name}
    </div>
  );
};

const SuggestionComponent = ({
  item,
  components,
  onClick,
}: {
  item: any;
  components: any;
  onClick: (item: any) => void;
}): JSX.Element => {
  return (
    <div className={'flex items-center py-2'}>
      <ShopCenter className={'w-6 h-6 mr-2 stroke-current text-purple-800'} />
      <div className={'flex flex-col gap-1'}>
        <span className={'font-sans font-bold'}>
          <components.Highlight hit={item} attribute="name" />
        </span>
        <span className={'font-sans'}>
          <components.Highlight hit={item} attribute="city" />, <components.Highlight hit={item} attribute="country" />
        </span>
      </div>
    </div>
  );
};

export { MapboxAddressComponent, SuggestionComponent };
