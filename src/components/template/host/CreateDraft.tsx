"use client";
import { api } from "@/trpc/react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

const CreateDraft = () => {
  const router = useRouter();
  const { mutate, isPending } = api.lodging.createDraft.useMutation({
    onSuccess: (e) => {
      router.push(`/become-a-host/${e}/structure`);
    },
  });
  return (
    <Button isLoading={isPending} onClick={() => mutate()}>
      Next
    </Button>
  );
};

export default CreateDraft;
