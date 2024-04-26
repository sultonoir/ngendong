"use client";
import useDialog from "@/hooks/useDialog";
import { Button } from "@nextui-org/react";
import { LuLogIn } from "react-icons/lu";
import React from "react";

const ButtonTrigerLogin = () => {
  const { onOpen, handleStatus } = useDialog();
  return (
    <Button
      variant="solid"
      color="primary"
      onClick={() => {
        handleStatus("signin");
        onOpen(true);
      }}
      startContent={<LuLogIn size={20} />}
    >
      Login
    </Button>
  );
};

export default ButtonTrigerLogin;
