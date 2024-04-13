"use client";

import React from "react";
import { BiBell } from "react-icons/bi";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import NotifyCount from "./NotifyCount";

const NotifyDropDown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger>
        <Button
          variant="ghost"
          radius="full"
          size="lg"
          isIconOnly
          className="relative overflow-visible"
        >
          <BiBell size={24} />
          <NotifyCount />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 p-4">
        <div>hallo</div>
      </PopoverContent>
    </Popover>
  );
};

export default NotifyDropDown;
