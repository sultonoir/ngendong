"use client";
import { api } from "@/trpc/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { toast } from "sonner";

interface Props {
  id: string;
}

const ButtonCancelPayment = ({ id }: Props) => {
  const router = useRouter();
  const { mutate, isPending } = api.order.removeOrder.useMutation({
    onError: (e) => {
      toast.error(e.message);
    },
    onSuccess: (e) => {
      router.push(`/rooms/${e}`);
    },
  });

  return (
    <Button
      isDisabled={isPending}
      isLoading={isPending}
      isIconOnly
      variant="light"
      onClick={() => mutate({ id })}
    >
      <BiChevronLeft size={30} />
    </Button>
  );
};

export default ButtonCancelPayment;
