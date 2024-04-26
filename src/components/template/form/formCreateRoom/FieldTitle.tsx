import useDraft from "@/hooks/useDraft";
import { Textarea } from "@nextui-org/react";
import React from "react";

const FieldTitle = () => {
  const { title, titleChange } = useDraft();
  return (
    <div className="container relative !flex min-h-[calc(100dvh-150px)] max-w-screen-md flex-col justify-center">
      <div className="my-10 flex flex-col gap-5">
        <div>
          <h1 className="text-4xl font-semibold">
            Now, let&apos;s give your lodging a title
          </h1>
          <p className="text-default-500">
            Short titles work best. Have fun with it—you can always change it
            later.
          </p>
        </div>
        <div>
          <Textarea
            variant="bordered"
            maxLength={200}
            minRows={10}
            value={title}
            onChange={(e) => titleChange(e.target.value)}
          />
          <br />
          <p>{title.length}/200</p>
        </div>
      </div>
    </div>
  );
};

export default FieldTitle;
