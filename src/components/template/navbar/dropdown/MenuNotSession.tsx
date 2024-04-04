"use client";
import useDialog from "@/hooks/useDialog";
import { DropdownItem, DropdownMenu, Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";

const MenuNotSession = () => {
  const { onOpen, handleStatus } = useDialog();
  const { theme, setTheme } = useTheme();

  const handleCheck = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <DropdownMenu variant="solid" aria-label="Static Actions" className="w-60">
      <DropdownItem
        onClick={() => {
          handleStatus("signin");
          onOpen(true);
        }}
      >
        Sign-in
      </DropdownItem>
      <DropdownItem
        showDivider
        onClick={() => {
          handleStatus("signup");
          onOpen(true);
        }}
      >
        Sign-up
      </DropdownItem>
      <DropdownItem href="/host">Make a place to stay</DropdownItem>
      <DropdownItem>Help center</DropdownItem>
      <DropdownItem
        closeOnSelect={false}
        onClick={handleCheck}
        endContent={
          <Switch isSelected={theme === "dark"} onValueChange={handleCheck} />
        }
      >
        Darkmode
      </DropdownItem>
    </DropdownMenu>
  );
};

export default MenuNotSession;
