"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { BiBell } from "react-icons/bi";
import NotifyCount from "./NotifyCount";
const NotifyDropDown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="ghost"
          radius="full"
          isIconOnly
          className="relative overflow-visible"
        >
          <BiBell />
          <NotifyCount/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NotifyDropDown;
