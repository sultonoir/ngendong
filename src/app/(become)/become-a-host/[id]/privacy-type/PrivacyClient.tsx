"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button, cn } from "@nextui-org/react";
import { LodgingType } from "@/dummy";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { useParams, usePathname, useRouter } from "next/navigation";
const PrivacyClient = () => {
  const [select, setSelect] = React.useState("");

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ id: string }>();

  const next = api.lodging.updateDraft.useMutation({
    onSuccess: () => {
      router.push(`/become-a-host/${params.id}/locations`);
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const back = api.lodging.updateDraft.useMutation({
    onSuccess: () => {
      router.push(`/become-a-host/`);
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const handleNext = () => {
    next.mutate({
      pathname: `/become-a-host/${params.id}/locations`,
      type: select,
      id: params.id,
    });
  };

  const handleBack = () => {
    back.mutate({
      pathname,
      id: params.id,
    });
  };

  return (
    <React.Fragment>
      <div className="container mt-10 h-[calc(100dvh-200px)] max-w-screen-md">
        <h1 className="text-center text-4xl font-semibold">
          What type of place will guests have?
        </h1>
        <ul className="my-10 grid h-fit grid-cols-1 gap-4">
          {LodgingType.map((category) => (
            <li
              key={category.label}
              onClick={() => {
                setSelect(category.key);
              }}
              className={cn(
                "flex cursor-pointer flex-row items-start justify-between rounded-lg border border-default/50 p-4 hover:border-foreground/50 hover:bg-content2",
                {
                  "border-foreground/50 bg-content2": select === category.key,
                },
              )}
            >
              <div className="flex max-w-md flex-col gap-2">
                <h2 className="text-lg">{category.label}</h2>
                <p className="text-sm text-foreground/50">{category.desc}</p>
              </div>
              <category.icon className="size-12" />
            </li>
          ))}
        </ul>
      </div>
      <div className="sticky bottom-0 bg-background">
        <div className="flex w-full flex-col">
          <div className="flex h-2 items-center gap-4">
            <div className="relative size-full bg-content2">
              <motion.div
                initial={{ opacity: 0, width: "20%" }}
                animate={{ opacity: 1, width: "40%" }}
                transition={{ delay: 0.175 }}
                className="absolute inset-0 bg-white transition-all"
              />
            </div>
            <div className="relative size-full bg-content2"></div>
            <div className="relative size-full bg-content2"></div>
          </div>
          <div className="flex items-center justify-between px-10 py-4">
            <Button
              isDisabled={back.isPending}
              isLoading={back.isPending}
              onClick={handleBack}
              variant="light"
            >
              <span className="underline underline-offset-4">Back</span>
            </Button>
            <Button
              isDisabled={next.isPending}
              isLoading={next.isPending}
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrivacyClient;
