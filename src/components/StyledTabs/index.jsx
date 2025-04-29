import React, { useState } from "react";

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

const TabBar = ({ tabs, ...restProps }) => {
  const [activeTab, setActiveTab] = useState("building");
  const Component = tabs[activeTab].RenderComponent;
  return (
    <div className="flex flex-col flex-1">
      <div className="flex bg-gray-100 p-2 overflow-x-auto">
        {Object.values(tabs).map((tab, idx) => (
          <SlantedTab
            key={tab.id}
            label={tab.label}
            index={idx + 1}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      <Component {...restProps} />
    </div>
  );
};

export default TabBar;
