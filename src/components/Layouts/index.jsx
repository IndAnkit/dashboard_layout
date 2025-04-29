import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarMinimal } from "../SIdeNavBar";
const MainLayouts = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex">
        <NavbarMinimal />
        {/* TOP HEADER */}
        <div className="px-12 flex-1">
          <div className="bg-blue-950 -mx-14  px-10 py-6 font-semibold text-white">
            ALPHA DASHBOARD
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;
