//import { comparePosition } from '../lib';
//import { ReactComponent as ShopCenter } from '../assets/shop-center.svg';
import React from 'react';

const StoreComponent = ({
                          hit,
                          onClick,
                          //currentStore,
                        }: {
  hit: Record<string, any>;
  onClick: (object: Record<string, any>) => void;
  //currentStore: [number, number] | null;
}): JSX.Element => {


  const { _geoloc } = hit;
  const position: [number, number] = [_geoloc.lng, _geoloc.lat];

  ///*`${
  //         comparePosition(position, currentStore)
  //           ? 'bg-purple-100 ring ring-purple-800'
  //           : 'bg-white'
  //       */

  return (
    <article
      className={`overflow-hidden shadow-lg rounded-lg m-0 cursor-pointer hover:bg-gray-100 m-1 p-4 py-0 flex`}
      onClick={() => onClick(hit)}
    >
      {/*<ShopCenter className={'w-8 stroke-current text-purple-800'} />*/}
      <div className="sm:p-6">
        <h2 className={'font-medium text-lg'}>{hit.name}</h2>
        <p className={'font-normal text-sm'}>
          {hit.city} {hit.country}
        </p>
        <div className={'flex gap-2 my-2 flex-wrap'}>
          {hit.services.map((service: string, key: number) => (
            <span
              key={`${service}-${key}`}
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
