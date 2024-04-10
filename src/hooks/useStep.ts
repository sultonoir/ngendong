import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StepStore {
  step: number;
  barOne: number;
  barTwo: number;
  barThree: number;
  onNext: () => void;
  onBack: () => void;
}

const useStep = create<StepStore>()(
  persist(
    (set, get) => ({
      step: 0,
      barOne: 0,
      barTwo: 0,
      barThree: 0,
      onNext: () =>
        set(() => ({
          step: get().step + 1,
          barOne: get().step < 5 ? get().barOne + 20 : get().barOne,
          barTwo:
            get().step >= 5 && get().step <= 9
              ? get().barTwo + 20
              : get().barTwo,
          barThree:
            get().step >= 10 && get().barThree <= 99
              ? get().barThree + 50
              : get().barThree,
        })),
      onBack: () =>
        set(() => ({
          step: get().step - 1,
          barOne: get().step <= 5 ? get().barOne - 20 : get().barOne,
          barTwo:
            get().step >= 6 && get().step <= 10
              ? get().barTwo - 20
              : get().barTwo,
          barThree:
            get().step >= 11 && get().barThree >= 1
              ? get().barThree - 50
              : get().barThree,
        })),
    }),
    { name: "bar-width", skipHydration: true },
  ),
);

export default useStep;
