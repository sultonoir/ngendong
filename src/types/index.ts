import { type DateRange } from "react-day-picker";

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

export type StepStore = {
  step: number;
  barOne: number;
  barTwo: number;
  barThree: number;
  onNext: () => void;
  onBack: () => void;
};

interface Amenites {
  fasilitas: string;
}

interface Discount {
  title: string;
  nominal: number;
}

export type DraftStore = {
  type: string;
  category: string;
  amenities: Amenites[];
  locations: LocationProps | undefined;
  image: File[];
  unique: string;
  title: string;
  desc: string;
  bed: number;
  bedrooms: number;
  guest: number;
  price: number;
  discount: Discount[];
  setDiscount: (value: Discount[]) => void;
  setAmenities: (value: Amenites[]) => void;
  titleChange: (value: string) => void;
  descChange: (value: string) => void;
  typeChange: (value: string) => void;
  categoryChange: (value: string) => void;
  locationChange: (value: LocationProps | undefined) => void;
  guestChange: (value: number) => void;
  bedChange: (value: number) => void;
  bedRoomChange: (value: number) => void;
  setUnique: (value: string) => void;
  setImage: (value: File[]) => void;
  setPrice: (value: number) => void;
};

export type DialogStore = {
  isOpen: boolean;
  status: string;
  onOpen: (isOpen: boolean) => void;
  handleStatus: (status: string) => void;
};

export type DayCountStore = {
  date: DateRange | undefined;
  count: number;
  setDate: (value: DateRange | undefined) => void;
  onChange: (value: number) => void;
};
