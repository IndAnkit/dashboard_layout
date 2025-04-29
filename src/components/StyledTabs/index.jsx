import React, { useState } from "react";
import clsx from "clsx";
const BuildingComponent = () => <div>Building Content</div>;
const FloorComponent = () => <div>Floor Content</div>;
const APComponent = () => <div>AP Layer Content</div>;
const tabs = {
  building: {
    id: "building",
    label: "Building – 23",
    RenderComponent: BuildingComponent, // replace with actual component
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

const SlantedTab = ({ onClick, label, index, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={` cursor-pointer relative top-0 px-12 py-2 ${
        isActive ? "bg-blue-500 shadow-2xl" : "bg-gray-400"
      } text-white flex items-center justify-center font-semibold `}
      style={{
        left: -index * 45,
        clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%)",
      }}
    >
      {label}
    </div>
  );
};

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("building");
  const Component = tabs[activeTab].RenderComponent;
  return (
    <div className="flex flex-col flex-1">
      <div className="flex bg-gray-100 p-2 overflow-x-auto">
        {Object.values(tabs).map((tab, idx) => (
          <SlantedTab
            label={tab.label}
            index={idx + 1}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      <Component />
    </div>
  );
};

export default TabBar;
