import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarMinimal } from "../SIdeNavBar";
const MainLayouts = () => {
  return (
    <div className="flex">
      <NavbarMinimal />
      {/* TOP HEADER */}
      <div>
        <div>Header</div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
