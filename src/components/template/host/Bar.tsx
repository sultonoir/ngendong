"use client";
import useStep from "@/hooks/useStep";

const Bar = () => {
  const { barOne, barTwo, barThree } = useStep();

  return (
    <div className="flex h-2 items-center gap-4">
      <div className="relative size-full bg-content2">
        <div
          style={{ width: `${barOne}%` }}
          className="absolute inset-0 bg-foreground transition-all"
        />
      </div>
      <div className="relative size-full bg-content2">
        <div
          style={{ width: `${barTwo}%` }}
          className="absolute inset-0 bg-foreground transition-all"
        />
      </div>
      <div className="relative size-full bg-content2">
        <div
          style={{ width: `${barThree}%` }}
          className="absolute inset-0 bg-foreground transition-all"
        />
      </div>
    </div>
  );
};

export default Bar;
