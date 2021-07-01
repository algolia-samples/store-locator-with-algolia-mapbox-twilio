
import { ReactComponent as ShopCenter } from '../../assets/shop-center.svg';
import React, {useEffect, useState} from 'react';
import {GeoHit} from "../../types/StoreHit";

const StoreComponent = ({
                          store,
                          onClick,
                          currentStore,
                        }: {
  store: GeoHit;
  onClick: (object: Record<string, any>) => void;
  currentStore?: GeoHit | null;
}): JSX.Element => {

  const [isSelected, setSelected] = useState(false)

  useEffect(() => {
    setSelected(currentStore?.objectID === store.objectID)
  }, [currentStore])


  return (
    <article
      className={`${isSelected ? 'bg-purple-100 hover:bg-purple-50 ring ring-purple-800' : 'bg-white hover:bg-gray-50' } overflow-hidden shadow-lg rounded-lg m-0 cursor-pointer  m-1 p-4 py-0 flex`}
      onClick={() => onClick(store)}
    >
      <ShopCenter className={'w-8 stroke-current text-purple-800'} />
      <div className="sm:p-6">
        <h2 className={'font-medium text-lg'}>{store.name}</h2>
        <p className={'font-normal text-sm'}>
          {store.city} {store.country}
        </p>
        <div className={'flex gap-2 my-2 flex-wrap'}>
          {store.services.map((service: string) => (
            <span
              key={`${service}-${store.objectID}`}
              className={
                'bg-purple-100 text-sm font-normal text-purple-800 px-2 gap-13 rounded-full'
              }
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default StoreComponent;
