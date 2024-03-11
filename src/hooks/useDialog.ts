import { create } from "zustand";

interface DialogStore {
  isOpen: boolean;
  onOpen: (isOpen: boolean) => void;
}

const useDialog = create<DialogStore>((set) => ({
  isOpen: false,
  onOpen: (isOpen) => set({ isOpen }),
}));

export default useDialog;
