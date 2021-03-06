/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import AccountCircle from "@mui/icons-material/AccountCircle";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../img/logo.png";
import avatar from "../../../img/man.png";
import { getLocalStorage } from "../../../Hooks/useStorage";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 320;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [activeUser, setActiveUser] = React.useState(false);
  const [activeCommunity, setActiveCommunity] = React.useState(false);
  const [activeEvent, setEvent] = React.useState(false);
  const [activeCommunityList, setCommunityList] = React.useState(false);
  const location = useLocation();
  const currPath = location.pathname.split("/")[2];

  const displayA = () => {
    setActive(true);
    setActiveUser(false);
    setActiveCommunity(false);
    setEvent(false);
    setCommunityList(false);
  };
  const displayB = () => {
    setActive(false);
    setActiveUser(true);
    setActiveCommunity(false);
    setEvent(false);
    setCommunityList(false);
  };
  const displayC = () => {
    setActive(false);
    setActiveUser(false);
    setActiveCommunity(true);
    setEvent(false);
    setCommunityList(false);
  };
  const displayD = () => {
    setActive(false);
    setActiveUser(false);
    setActiveCommunity(false);
    setEvent(true);
    setCommunityList(false);
  };
  const displayE = () => {
    setActive(false);
    setActiveUser(false);
    setActiveCommunity(false);
    setEvent(false);
    setCommunityList(true);
  };

  useEffect(() => {
    switch (currPath) {
      case "userlist":
        displayB();
        break;
      case "community":
        displayC();
        break;
      case "event":
        displayD();
        break;
      case "communitylist":
        displayE();
        break;
      default:
        displayA();
        break;
    }
  }, [currPath]);
  const handleLogOut = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();
  const userInfo = getLocalStorage("userInfo");
  useEffect(() => {
    if (!userInfo?.user) {
      navigate("/login");
    }
  }, [userInfo?.user]);
  const drawer = (
    <div style={{ marginLeft: 7 }}>
      <Box sx={{ mt: 2, mb: 5 }}>
        <img src={logo} style={{ width: 180 }} alt="" />
      </Box>

      <List>
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "#33594A" }}
        >
          <ListItem
            onClick={displayA}
            style={
              active
                ? {
                    backgroundColor: "#C4C4C4",
                    width: "75%",
                    borderRadius: 16,
                    paddingLeft: 33,
                    color: "#DD502C",
                    transition: 0.2,
                  }
                : { paddingLeft: 32, color: "#33594A" }
            }
          >
            <Box sx={{ mr: 2 }}>
              <HomeIcon
                style={active ? { color: "#DD502C " } : { color: "#2e7d32" }}
              />
            </Box>

            <ListItemText
              primaryTypographyProps={{ fontWeight: 600 }}
              primary="Dashboard"
            />
          </ListItem>
        </Link>
      </List>
      <List>
        <Link
          to="/dashboard/userlist"
          style={{ textDecoration: "none", color: "#33594A" }}
        >
          <ListItem
            onClick={displayB}
            style={
              activeUser
                ? {
                    backgroundColor: "#C4C4C4",
                    width: "75%",
                    borderRadius: 16,
                    paddingLeft: 33,
                    color: "#DD502C",
                    transition: 0.2,
                  }
                : { paddingLeft: 32, color: "#33594A" }
            }
          >
            <Box sx={{ mr: 2 }}>
              <PersonIcon
                style={
                  activeUser ? { color: "#DD502C " } : { color: "#2e7d32" }
                }
              />
            </Box>

            <ListItemText
              primaryTypographyProps={{ fontWeight: 600 }}
              primary="User List"
            />
          </ListItem>
        </Link>
      </List>
      <List>
        <Link
          to="/dashboard/community"
          style={{ textDecoration: "none", color: "#33594A" }}
        >
          <ListItem
            onClick={displayC}
            sx={{ pl: 3 }}
            style={
              activeCommunity
                ? {
                    backgroundColor: "#C4C4C4",
                    width: "75%",
                    borderRadius: 16,
                    paddingLeft: 33,
                    color: "#DD502C",
                    transition: 0.2,
                  }
                : { paddingLeft: 33, color: "#33594A" }
            }
          >
            <Box sx={{ mr: 2 }}>
              <AccountTreeIcon
                style={
                  activeCommunity ? { color: "#DD502C " } : { color: "#2e7d32" }
                }
              />
            </Box>

            <ListItemText
              primaryTypographyProps={{ fontWeight: 600 }}
              primary="community leader"
            />
          </ListItem>
        </Link>
      </List>
      <List>
        <Link
          to="/dashboard/event"
          style={{ textDecoration: "none", color: "#33594A" }}
        >
          <ListItem
            onClick={displayD}
            sx={{ pl: 3 }}
            style={
              activeEvent
                ? {
                    backgroundColor: "#C4C4C4",
                    width: "75%",
                    borderRadius: 16,
                    paddingLeft: 33,
                    color: "#DD502C",
                    transition: 0.2,
                  }
                : { paddingLeft: 32, color: "#33594A" }
            }
          >
            <Box sx={{ mr: 2 }}>
              <EventIcon
                style={
                  activeEvent ? { color: "#DD502C " } : { color: "#2e7d32" }
                }
                color="success"
              />
            </Box>

            <ListItemText
              primaryTypographyProps={{ fontWeight: 600 }}
              primary="Event"
            />
          </ListItem>
        </Link>
      </List>
      <List>
        <Link
          to="/dashboard/communitylist"
          style={{ textDecoration: "none", color: "#33594A" }}
        >
          <ListItem
            onClick={displayE}
            sx={{ pl: 3 }}
            style={
              activeCommunityList
                ? {
                    backgroundColor: "#C4C4C4",
                    width: "75%",
                    borderRadius: 16,
                    paddingLeft: 33,
                    color: "#DD502C",
                    transition: 0.2,
                  }
                : { paddingLeft: 32, color: "#33594A" }
            }
          >
            <Box sx={{ mr: 2 }}>
              <ApartmentIcon
                style={
                  activeCommunityList
                    ? { color: "#DD502C " }
                    : { color: "#2e7d32" }
                }
                color="success"
              />
            </Box>

            <ListItemText
              primaryTypographyProps={{ fontWeight: 600 }}
              primary="Community List"
            />
          </ListItem>
        </Link>
      </List>
      <List>
        <ListItem
          onClick={handleLogOut}
          sx={{ pl: 3 }}
          style={{ paddingLeft: 32, color: "#33594A", cursor: "pointer" }}
        >
          <Box sx={{ mr: 2 }}>
            <LogoutIcon color="success" />
          </Box>

          <ListItemText
            primaryTypographyProps={{ fontWeight: 600 }}
            primary="LogOut"
          />
        </ListItem>
      </List>
    </div>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      backgroundcolor="#200E32"
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link
        to="/dashboard/profile"
        style={{ textDecoration: "none", color: "black" }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications">
          <Badge badgeContent={17} color="error">
            <Link to="/dashboard/notification">
              <NotificationsIcon />
            </Link>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(99% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#F2F2F2",

          borderRadius: "0 0 0 20px",
        }}
        elevation={0}
        style={{ marginLeft: 10 }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" aria-label="show 17 new notifications">
              <Badge badgeContent={1} color="error">
                <Link to="/dashboard/notification">
                  <NotificationsIcon />
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <img src={avatar} height={40} alt="" />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          borderRight: 0,
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
