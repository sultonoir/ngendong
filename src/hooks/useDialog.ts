import { type DialogStore } from "@/types";
import { create } from "zustand";

const useDialog = create<DialogStore>((set) => ({
  isOpen: false,
  status: "signin",
  onOpen: (isOpen) => set({ isOpen }),
  handleStatus: (status: string) => set({ status }),
}));

export default useDialog;
