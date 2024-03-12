"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useDialog from "@/hooks/useDialog";
import FormOauthButton from "../template/form/formauth/FormOauthButton";
import FormSignup from "../template/form/formauth/FormSignup";

const DialogAuth = () => {
  const { isOpen, onOpen } = useDialog();
  return (
    <Dialog open={isOpen} onOpenChange={onOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to Ngendong</DialogTitle>
          <DialogDescription>Signin or Signup</DialogDescription>
          <FormSignup />
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <FormOauthButton />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAuth;
