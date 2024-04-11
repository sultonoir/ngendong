"use client";
import React from "react";
import { FcGoogle, FcKey } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useDialog from "@/hooks/useDialog";
import { Button, cn } from "@nextui-org/react";
const FormOauthButton = () => {
  const [isLoading, setIsLoading] = React.useState({
    github: false,
    demo: false,
  });
  const router = useRouter();
  const { onOpen } = useDialog();
  return (
    <div className="mt-3 flex flex-col gap-1">
      <Button
        variant="ghost"
        onClick={() =>
          signIn("google", {
            callbackUrl: "/",
            redirect: true,
          })
        }
      >
        <FcGoogle className="mr-2" />
        Signin with google
      </Button>
      <Button
        isDisabled={isLoading.github}
        isLoading={isLoading.github}
        variant="ghost"
        onClick={async () => {
          setIsLoading({
            ...isLoading,
            github: true,
          });
          await signIn("github", {
            redirect: true,
            callbackUrl: "/",
          }).then((callback) => {
            if (callback?.ok) {
              setIsLoading({
                ...isLoading,
                github: false,
              });
              router.refresh();
              onOpen(false);
            }
            if (callback?.error) {
              toast.error(callback.error);
              setIsLoading({
                ...isLoading,
                github: false,
              });
            }
          });
        }}
      >
        <FaGithub
          className={cn("mr-2", {
            hidden: isLoading.github === true,
          })}
        />
        Signin with github
      </Button>
      <Button
        variant="ghost"
        isDisabled={isLoading.demo}
        isLoading={isLoading.demo}
        onClick={async () => {
          setIsLoading({
            ...isLoading,
            demo: true,
          });
          await signIn("credentials", {
            email: "sulton@gmail.com",
            redirect: false,
          }).then((callback) => {
            if (callback?.ok) {
              setIsLoading({
                ...isLoading,
                demo: false,
              });
              router.refresh();
              onOpen(false);
            }
            if (callback?.error) {
              toast.error(callback.error);
              setIsLoading({
                ...isLoading,
                demo: false,
              });
            }
          });
        }}
      >
        <FcKey
          className={cn("mr-2", {
            hidden: isLoading.demo === true,
          })}
        />
        try demo account
      </Button>
    </div>
  );
};

export default FormOauthButton;
