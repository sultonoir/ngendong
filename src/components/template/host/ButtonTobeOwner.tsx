"use client";

import useDialog from "@/hooks/useDialog";
import { api } from "@/trpc/react";
import { Button, cn } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { TbHomePlus } from "react-icons/tb";
import { toast } from "sonner";

const ButtonTobeOwner = () => {
  //use user
  const { data, update } = useSession();

  //hook dialog
  const { onOpen } = useDialog();

  const router = useRouter();

  const { mutate, isPending } = api.lodging.toBeOwner.useMutation({
    onSuccess: async (e) => {
      await update({ name: data?.user.name, image: data?.user.image, role: e });
      router.push("/become-a-host");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const handleSubmit = () => {
    if (!data) {
      onOpen(true);
    } else {
      mutate();
    }
  };
  return (
    <Button
      variant="ghost"
      radius="lg"
      isLoading={isPending}
      onClick={handleSubmit}
      startContent={
        <TbHomePlus size={20} className={cn({ hidden: isPending })} />
      }
    >
      <span>Ngendong setup</span>
    </Button>
  );
};

export default ButtonTobeOwner;
