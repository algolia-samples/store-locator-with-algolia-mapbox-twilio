export type GeoHit = {
  name: string;
  city: string;
  country: string;
  services: string[];
  objectID: string
  _geoloc: { lat: number; lng: number };
};
