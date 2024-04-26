"use client";
import { api } from "@/trpc/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface Props {
  id: string;
}

const ButtonCreatePayment = ({ id }: Props) => {
  const router = useRouter();
  const ctx = api.useUtils();
  const { mutate, isPending } = api.order.confirmPayment.useMutation({
    onError: (e) => {
      toast.error(e.message);
    },
    onSuccess: async () => {
      await ctx.notify.getNotifyCount.invalidate();
      router.push("/");
    },
  });

  return (
    <Button
      color="primary"
      fullWidth
      isLoading={isPending}
      isDisabled={isPending}
      onClick={() => mutate({ id })}
    >
      Confirm payment
    </Button>
  );
};

export default ButtonCreatePayment;
