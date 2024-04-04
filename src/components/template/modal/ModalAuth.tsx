"use client";
import useDialog from "@/hooks/useDialog";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import React from "react";
import FormOauthButton from "../form/formauth/FormOauthButton";
import FormSignin from "../form/formauth/FormSignin";
import FormSignup from "../form/formauth/FormSignup";

const ModalAuth = () => {
  const { isOpen, onOpen, status, handleStatus } = useDialog();

  const statusChange = () => {
    if (status === "signin") {
      handleStatus("signup");
    } else {
      handleStatus("signin");
    }
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpen}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {status === "signin" ? (
            <>
              <h1 className="text-2xl font-bold">Welcome to Ngendong</h1>
              <p className="text-sm font-medium text-foreground/50">
                Enter your email below to login to your account
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold">Join to Ngendong</h1>
              <p className="text-sm font-medium text-foreground/50">
                Enter your information to create an account
              </p>
            </>
          )}
        </ModalHeader>
        <ModalBody>
          <FormOauthButton />
          <div className="relative mt-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-default-300"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="text-muted-foreground bg-content1 px-2">
                Or continue with
              </span>
            </div>
          </div>
          {status === "signin" ? <FormSignin /> : <FormSignup />}
        </ModalBody>
        <ModalFooter className="justify-center">
          {status == "signin" ? (
            <span> Don&apos;t have an account ? </span>
          ) : (
            <span>Already have an account ?</span>
          )}
          <button
            className="ml-1 bg-transparent font-medium text-primary underline underline-offset-2 hover:opacity-80"
            onClick={statusChange}
          >
            {status == "signin" ? <span> signup </span> : <span>signin</span>}
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAuth;
