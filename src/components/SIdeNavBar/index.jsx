import { cn } from "@/lib/utils";
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconHome2,
} from "@tabler/icons-react";
// import { MantineLogo } from "@mantinex/mantine-logo";
import { NavLink, useNavigate, matchPath, useLocation } from "react-router-dom";
import classess from "./sideNavBar.module.css";
function NavbarLink({ icon: Icon, path, label, active, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === path;
  console.log(isActive);
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={
        ({ isActive }) =>
          cn(
            "w-full flex flex-col items-center px-2 py-2",
            isActive ? `relative bg-blue-500` : ""
          )
        // isActive ? `${classes.link_active}` : classes.link
      }
      // className={classes.link}
      // data-active={active || undefined}
    >
      <Icon
        size={20}
        stroke={1.5}
      />
      <div>{label}</div>
      {isActive && (
        <div
          className={`absolute top-0 w-full h-full -right-1 -z-10 bg-blue-500  ${classess.clip_arrow}`}
        ></div>
      )}
    </NavLink>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home" },
  { icon: IconGauge, label: "SJC 22", path: "/" },
  { icon: IconDeviceDesktopAnalytics, label: "SJC 23", path: "/23" },
  { icon: IconCalendarStats, label: "SJC 24", path: "/24" },
];

export function NavbarMinimal() {
  const navigate = useNavigate();

  const links = mockdata.map((link) => (
    <NavbarLink
      {...link}
      key={link.label}
      onClick={() => navigate(link.path)}
    />
  ));

  return (
    <nav className="bg-blue-950 text-white h-full flex flex-col gap-4 -mr-2">
      {links}
    </nav>
  );
}
