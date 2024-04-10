export type LocationProps = {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
};

export type DrafLocale = {
  type: string;
  category: string;
  locations: LocationProps;
  image: File[];
  title: string;
  desc: string;
  bad: number;
  badRooms: number;
  guest: number;
  price: number;
};
