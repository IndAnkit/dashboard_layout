import { Center, Stack, Tooltip } from "@mantine/core";
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconHome2,
} from "@tabler/icons-react";
// import { MantineLogo } from "@mantinex/mantine-logo";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./sideNavBar.module.css";

function NavbarLink({ icon: Icon, path, label, active, onClick }) {
  return (
    <Tooltip
      label={label}
      position="right"
      transitionProps={{ duration: 0 }}
    >
      <NavLink
        to={path}
        onClick={onClick}
        className={({ isActive }) =>
          isActive ? `${classes.link_active}` : classes.link
        }
        // className={classes.link}
        // data-active={active || undefined}
      >
        <Icon
          size={20}
          stroke={1.5}
        />
        <div>{label}</div>
      </NavLink>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", path: "/" },
  { icon: IconGauge, label: "SS22", path: "/SS22" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", path: "/analytics" },
  { icon: IconCalendarStats, label: "Releases", path: "releases" },
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
    <nav className={classes.navbar}>
      <Center>
        {/* <MantineLogo
          type="mark"
          size={30}
        /> */}
      </Center>

      <div className={classes.navbarMain}>
        <Stack
          justify="center"
          gap={0}
        >
          {links}
        </Stack>
      </div>

      {/* <Stack
        justify="center"
        gap={0}
      >
        <NavbarLink
          icon={IconSwitchHorizontal}
          label="Change account"
        />
        <NavbarLink
          icon={IconLogout}
          label="Logout"
        />
      </Stack> */}
    </nav>
  );
}
