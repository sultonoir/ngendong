import { create } from "zustand";

export type LocationProps = {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
};

interface Amenites {
  fasilitas: string;
}

interface Discount {
  title: string;
  nominal: number;
}

interface DraftStore {
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
}

const useDraft = create<DraftStore>((set) => ({
  type: "",
  image: [],
  title: "",
  desc: "",
  category: "",
  amenities: [],
  bed: 1,
  guest: 4,
  bedrooms: 1,
  locations: undefined,
  price: 20,
  unique: "no",
  discount: [],
  setDiscount: (discount) => set({ discount }),
  setPrice: (price) => set({ price }),
  setAmenities: (amenities) => set({ amenities }),
  titleChange: (title) => set({ title }),
  descChange: (desc) => set({ desc }),
  typeChange: (type) => set({ type }),
  categoryChange: (category) => set({ category }),
  guestChange: (guest) => set({ guest }),
  locationChange: (locations) => set({ locations }),
  bedChange: (bed) => set({ bed }),
  bedRoomChange: (bedrooms) => set({ bedrooms }),
  setUnique: (unique) => set({ unique }),
  setImage: (image: File[]) => set({ image }),
}));

export default useDraft;
