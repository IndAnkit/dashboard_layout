import { useEffect, useState } from "react";
import apiClient from "../../lip/apiClient";
import StyledTabs from "@/components/StyledTabs";
import Building from "@/components/Building";

const FloorComponent = () => <div>Floor Content</div>;
const APComponent = () => <div>AP Layer Content</div>;

const tabs = {
  building: {
    id: "building",
    label: "Building – 23",
    RenderComponent: Building, // replace with actual component
  },
  floor: {
    id: "floor",
    label: "Floor Layer",
    RenderComponent: FloorComponent, // replace with actual component
  },
  ap: {
    id: "ap",
    label: "AP Layer",
    RenderComponent: APComponent, // replace with actual component
  },
};
const SS22 = ({ networkId = 22 }) => {
  return (
    <StyledTabs
      tabs={tabs}
      networkId={networkId}
    />
  );
};

export default SS22;
