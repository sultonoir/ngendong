import { type DayCountStore } from "@/types";
import { addDays } from "date-fns";
import { create } from "zustand";

const useDayCount = create<DayCountStore>((set) => ({
  date: {
    from: new Date(),
    to: addDays(new Date(), 4),
  },
  count: 0,
  setDate: (value) => set({ date: value }),
  onChange: (value: number) => set({ count: value }),
}));

export default useDayCount;
