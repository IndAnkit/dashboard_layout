import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import MainLayouts from "../components/Layouts";
import DashboardScreen from "../screens/Dashboard";
import SS22 from "../screens/SS22";
import Analytics from "../screens/Analytics";
import Releases from "../screens/Releases";

const AppRouter = () => {
  const isAuth = true;
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayouts />}
      >
        <Route
          index
          path="/"
          element={<SS22 networkId={22} />}
        />
        <Route
          path="/23"
          element={<SS22 networkId={23} />}
        />
        <Route
          path="/24"
          element={<SS22 networkId={24} />}
        />
        <Route
          path="/25"
          element={<SS22 networkId={25} />}
        />
      </Route>
    </Routes>
  );
};
export default AppRouter;
