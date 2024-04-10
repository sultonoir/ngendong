/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import React, { Fragment, useMemo } from "react";
import dynamic from "next/dynamic";
import { Button, Input, Spinner } from "@nextui-org/react";
import { type LocationProps } from "@/types";
import useDraft from "@/hooks/useDraft";

const FieldLocations = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const { locations, locationChange } = useDraft();

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

      // Mengupdate state locations dengan data yang diperoleh
      locationChange(data[0]);
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
      <div className="container relative z-0 !flex min-h-[calc(100dvh-150px)] max-w-screen-md">
        <div className="!my-auto h-fit w-full">
          <div className="!flex !h-full !w-full flex-col">
            <h1 className="mt-10 text-4xl font-semibold lg:mt-0">
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
            <div className="mb-10 lg:mb-0">
              <Map
                center={
                  locations
                    ? [locations.latitude, locations.longitude]
                    : undefined
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FieldLocations;
