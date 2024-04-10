import { Spinner } from "@nextui-org/spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-[calc(100dvh-150px)] w-full items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
