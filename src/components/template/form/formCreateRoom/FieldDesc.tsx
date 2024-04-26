import useDraft from "@/hooks/useDraft";
import { Textarea } from "@nextui-org/react";
import React from "react";

const FieldDesc = () => {
  const { desc, descChange } = useDraft();
  return (
    <div className="container relative !flex min-h-[calc(100dvh-150px)] max-w-screen-md flex-col justify-center">
      <div className="my-10 flex flex-col gap-5">
        <div>
          <h1 className="text-4xl font-semibold">Create your description</h1>
          <p className="text-default-500">
            Share what makes your place special.
          </p>
        </div>
        <div>
          <Textarea
            variant="bordered"
            maxLength={1000}
            minRows={10}
            value={desc}
            onChange={(e) => descChange(e.target.value)}
          />
          <br />
          <p>{desc.length}/1000</p>
        </div>
      </div>
    </div>
  );
};

export default FieldDesc;
