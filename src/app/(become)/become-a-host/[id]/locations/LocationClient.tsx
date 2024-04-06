/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import React, { Fragment, useMemo } from "react";
import dynamic from "next/dynamic";
import { Button, Input, Spinner } from "@nextui-org/react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface LocationProps {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}

const LocationClient = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [locations, setLocations] = React.useState<LocationProps | undefined>(
    undefined,
  );

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/template/host/Map"), {
        ssr: false,
        loading: () => (
          <div className="flex h-[300px] w-full items-center justify-center">
            <Spinner size="lg" />
          </div>
        ),
      }),
    [locations],
  );

  const next = api.lodging.updateDraft.useMutation({
    onSuccess: () => {
      router.push(`/become-a-host/${params.id}/floor-plan`);
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const back = api.lodging.updateDraft.useMutation({
    onSuccess: () => {
      router.push(`/become-a-host/${params.id}/privacy-type`);
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const handleNext = () => {
    next.mutate({
      pathname,
      id: params.id,
    });
  };

  const handleBack = () => {
    back.mutate({
      pathname,
      id: params.id,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`,
        {
          headers: {
            "X-Api-Key": "XlUw36q5/hBCNrMaCc1Mrw==dGo0GI7U3qfBergY",
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        throw new Error("Gagal mengambil data.");
      }

      const data: LocationProps[] = await response.json();
      console.log(data[0]);

      // Mengupdate state locations dengan data yang diperoleh
      setLocations(data[0]);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      // Handle error sesuai kebutuhan, misalnya menampilkan pesan kepada pengguna
    } finally {
      setIsLoading(false);
      setCountry("");
      setCity("");
    }
  };

  return (
    <Fragment>
      <div className="container mt-10 min-h-[calc(100dvh-200px)] max-w-screen-md">
        <h1 className="text-4xl font-semibold">
          Where&apos;s your place located?
        </h1>
        <p className="text-foreground/50">
          Your address is only shared with guests after they’ve made a
          reservation.
        </p>
        <form onSubmit={handleSubmit} className="my-10 grid gap-5">
          <Input
            label="Country"
            labelPlacement="outside"
            placeholder="japan, China, Korea, Etc"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Input
            label="City"
            labelPlacement="outside"
            isDisabled={country === ""}
            placeholder="London, Tokyo, Sanghai, Etc"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button
            isLoading={isLoading}
            variant="solid"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
        <Map
          center={
            locations ? [locations.latitude, locations.longitude] : undefined
          }
        />
      </div>
      <div className="sticky bottom-0 bg-background">
        <div className="flex w-full flex-col">
          <div className="flex h-2 items-center gap-4">
            <div className="relative size-full bg-content2">
              <motion.div
                initial={{ opacity: 0, width: "40%" }}
                animate={{ opacity: 1, width: "60%" }}
                exit={{ opacity: 1, width: "40%" }}
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
              isDisabled={!locations}
              isLoading={next.isPending}
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LocationClient;
