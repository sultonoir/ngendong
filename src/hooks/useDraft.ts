import { type DraftStore } from "@/types";
import { create } from "zustand";

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
