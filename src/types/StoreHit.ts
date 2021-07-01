export type GeoHit = {
  name: string;
  city: string;
  country: string;
  services: string[];
  _geoloc: { lat: number; lng: number };
};
