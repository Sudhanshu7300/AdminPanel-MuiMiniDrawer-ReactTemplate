import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Grid,
  Toolbar,
  IconButton,
} from "@mui/material";
// core component
import { AuthContext } from "../Context/AuthContext";
//React Icons
import { HiChip } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Dashboard = () => {
  const navigate = useNavigate();
  const routes = [
    {
      invisible: false,
      path: "/dashboard",
      name: "Dashboard",
      icon: <HiChip />,
    },
  ];
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerWidth = 285;
  const { token, setToken } = useContext(AuthContext);
  const logout = () => {
    setToken(null);
    localStorage.removeItem("userData");
    navigate("/auth/signIn");
  };

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "fixed",
      height: "100vh",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "26px",

            px: [1],
          }}
        >
          {open ? (
            <>
              <img
                src="/img/demoMan.png"
                alt="logo"
                style={{
                  width: "3em",
                  justifyContent: "flex-start",
                  marginTop: "7px",
                  borderRadius: "100px",
                }}
              />
              <Typography
                className="bluecolortypodong"
                sx={{
                  fontSize: "1.8rem",
                  letterSpacing: "5px",
                  justifySelf: "center",
                  marginTop: "5px",
                }}
                align="left"
              >
                Demo
              </Typography>
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </>
          ) : (
            <Grid container justifyContent={"center"}>
              <IconButton
                edge="center"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          )}
        </Toolbar>
        {routes.map((route) => {
          if (route.invisible === false) {
            return (
              <ListItem
                button
                component={Link}
                to={route.path}
                onClick={() => {
                  setOpen(false);
                  setValue(route.activeIndex);
                }}
                sx={{ marginTop: "20px" }}
              >
                <ListItemIcon
                  className="SideBarIcon bluecolortypo "
                  style={{ paddingLeft: "8px" }}
                >
                  {route.icon}
                </ListItemIcon>
                <ListItemText disableTypography className="bluecolortypo">
                  {route.name}
                </ListItemText>
              </ListItem>
            );
          }
        })}
        <ListItem
          style={{
            position: "absolute",
            bottom: "0",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          <ListItemIcon
            className="SideBarIcon bluecolortypo"
            style={{ paddingLeft: "8px" }}
          >
            <AiOutlineLogout onClick={logout} />
          </ListItemIcon>
          <ListItemText
            onClick={logout}
            disableTypography
            className="bluecolortypo"
          >
            Logout
          </ListItemText>
        </ListItem>
      </Drawer>
    </>
  );
};

export default Dashboard;
