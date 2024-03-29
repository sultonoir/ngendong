import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuSliders } from "react-icons/lu";
const DialogFilter = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex h-10 items-center gap-2 rounded-lg border px-4 py-2 hover:shadow-md">
        <LuSliders />
        Filter
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogFilter;
