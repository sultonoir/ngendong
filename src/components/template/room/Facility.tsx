import { facility } from "@/dummy";
import React, { Fragment, useMemo } from "react";

interface FacilityProps {
  key: string;
  label: string;
}

const Facility: React.FC<FacilityProps> = ({ label }) => {
  const fasilitas = useMemo(() => {
    return facility.find((item) => item.key === label);
  }, [label]);
  return (
    <Fragment>
      {fasilitas && (
        <div className="flex items-center gap-2">
          <fasilitas.icon size={30} />
          {fasilitas.label}
        </div>
      )}
    </Fragment>
  );
};

export default Facility;
