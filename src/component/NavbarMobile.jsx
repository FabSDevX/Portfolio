import { Link } from "react-scroll";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import propTypes from "prop-types";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import getNavbarIcon from "../util/navbar";
import useLocalStorage from "../hook/localStorage";

function NavbarMobile({ language }) {
  const headerNavbar = language.HEADER_NAVBAR;
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [theme] = useLocalStorage("theme", "dark");
  const [isDark, setIsDark] = useState(theme == "dark");
  const DrawerList = (
    <div
      className="w-50 h-full bg-slate-800"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {headerNavbar.map(([title, id, iconCode]) => (
          <Link
            className="text-white font-medium hover:text-primary-color hover:border-b-2 hover:border-b-primary-color "
            to={id}
            key={id}
            spy={true}
            smooth={true}
            offset={-130}
            duration={400}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{getNavbarIcon(iconCode)}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider color="white" />
      <List className="flex place-content-center justify-center">
        <ListItem disablePadding>
          <ListItemButton onClick={(e) => e.stopPropagation()}>
            <LanguageSelector />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              e.stopPropagation();
              setIsDark(!isDark);
            }}
          >
            <ThemeSelector />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <button
        className="bg-transparent border-0 focus:outline-0"
        onClick={toggleDrawer(true)}
      >
        <GiHamburgerMenu size={32} className="text-secondary-dark-theme-color dark:text-white" />
      </button>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
NavbarMobile.propTypes = {
  language: propTypes.object.isRequired,
};

export default NavbarMobile;
