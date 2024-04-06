"use client";
import { api } from "@/trpc/react";
import { Button } from "@nextui-org/react";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const SaveLodging = () => {
  const router = useRouter();
  const path = usePathname();
  const params = useParams<{ id: string }>();

  const { mutate, isPending } = api.lodging.updateDraft.useMutation({
    onSuccess: () => {
      router.push("/");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const handleClick = () => {
    if (!params.id) {
      return router.push("/");
    } else {
      mutate({
        pathname: path,
      });
    }
  };

  return (
    <Button
      variant="ghost"
      radius="full"
      isLoading={isPending}
      onClick={handleClick}
    >
      Save & exit
    </Button>
  );
};

export default SaveLodging;
