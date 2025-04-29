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
          element={<SS22 />}
        />
        <Route
          path="/dashboard"
          element={<DashboardScreen />}
        />
        <Route
          path="/analytics"
          element={<Analytics />}
        />
        <Route
          path="/releases"
          element={<Releases />}
        />
      </Route>
    </Routes>
  );
};
export default AppRouter;
