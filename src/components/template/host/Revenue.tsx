"use client";

import { Slider } from "@nextui-org/react";
import React from "react";

interface Props {
  num: number;
}

export type SliderValue = number | number[];

const Revenue = ({ num }: Props) => {
  const [value, setValue] = React.useState<SliderValue>(1);

  const result = React.useMemo(() => {
    const numericValue = Number(value);
    if (isNaN(numericValue)) return; // Return early if value is not a number
    const result = numericValue * num;
    return result;
  }, [num, value]);

  const handleChange = (value: SliderValue) => {
    if (isNaN(Number(value))) return;

    setValue(value);
  };
  return (
    <div className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-4 lg:gap-10">
      <h1 className="text-center text-4xl font-bold">
        <span className="text-primary">Make your place a ngendong</span>
        <br />
        <span>You could earn</span>
      </h1>
      <p className="text-5xl font-bold lg:text-9xl">${result}</p>
      <p className="text-center text-[16px] lg:text-lg">
        <span>{value} night</span> at an estimated ${result} a night
      </p>
      <Slider maxValue={30} value={value} onChange={handleChange} />
    </div>
  );
};

export default Revenue;
