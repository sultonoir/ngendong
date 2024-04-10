"use client";
import FieldAmenities from "@/components/template/form/formCreateRoom/FieldAmenities";
import FieldDesc from "@/components/template/form/formCreateRoom/FieldDesc";
import FieldFloor from "@/components/template/form/formCreateRoom/FieldFloor";
import FieldHome from "@/components/template/form/formCreateRoom/FieldHome";
import FieldImage from "@/components/template/form/formCreateRoom/FieldImage";
import FieldLocations from "@/components/template/form/formCreateRoom/FieldLocations";
import FieldPreview from "@/components/template/form/formCreateRoom/FieldPreviews";
import FieldPrice from "@/components/template/form/formCreateRoom/FieldPrice";
import FieldPrivacy from "@/components/template/form/formCreateRoom/FieldPrivacy";
import FieldStructure from "@/components/template/form/formCreateRoom/FieldStructure";
import FieldTitle from "@/components/template/form/formCreateRoom/FieldTitle";
import FooterCreateRooms from "@/components/template/form/formCreateRoom/FooterCreateRooms";
import useStep from "@/hooks/useStep";
import React, { useMemo } from "react";

const HostClient = () => {
  const { step } = useStep();

  const Content = useMemo(() => {
    switch (step) {
      case 0:
        return <FieldHome />;
      case 1:
        return <FieldStructure />;
      case 2:
        return <FieldPrivacy />;
      case 3:
        return <FieldLocations />;
      case 4:
        return <FieldFloor />;
      case 5:
        return (
          <FieldHome
            stp={2}
            ttl="Make your place stand out"
            desc="In this step, you'll add some of the amenities your place offers, plus 5 or more photos. Then, you'll create a title and description."
          />
        );
      case 6:
        return <FieldAmenities />;
      case 7:
        return <FieldImage />;
      case 8:
        return <FieldTitle />;
      case 9:
        return <FieldDesc />;
      case 10:
        return (
          <FieldHome
            stp={3}
            ttl="Finish up and publish"
            desc="Finally, you'll choose booking settings, set up pricing, and publish your listing."
          />
        );
      case 11:
        return <FieldPrice />;
      case 12:
        return <FieldPreview />;
      default:
        return null;
    }
  }, [step]);

  return (
    <>
      {Content}
      <FooterCreateRooms />
    </>
  );
};

export default HostClient;
