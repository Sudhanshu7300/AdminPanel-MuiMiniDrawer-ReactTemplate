import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  Menu,
  MenuItem,
  Tooltip,
  Grid,
  IconButton,
  Avatar,
  Divider,
  Box,
  Badge,
  AppBar,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
// core component
import { AuthContext } from "../Context/AuthContext";

const BadgeContentSpan = styled("span")(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}));
const Dashboard = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const { setToken } = useContext(AuthContext);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("userData");
    navigate("/auth/signIn");
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "#000" }}>
        <div style={{ marginLeft: "60px" }}>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent={"space-between"}
              alignItems="center"
              mt={1}
              mb={1}
            >
              <Grid item>
                <Link to="/dashboard" className="linkcolor">
                  <img
                    src="/img/demoMan.png"
                    alt="logo"
                    style={{ width: "3.5em", borderRadius: "100px" }}
                  />
                </Link>
              </Grid>

              <Grid item>
                <Tooltip title="Open settings">
                  <IconButton
                    className="notificationdiv"
                    onClick={handleOpenUserMenu}
                  >
                    <Badge
                      overlap="circular"
                      sx={{ cursor: "pointer" }}
                      badgeContent={<BadgeContentSpan />}
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    >
                      <Avatar
                        alt="Demo"
                        sx={{ width: 50, height: 50, fontSize: "25px" }}
                        src="/images/avatars/1.png"
                      />
                    </Badge>
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  keepMounted
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Box sx={{ pt: 2, pb: 3, px: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Badge
                        overlap="circular"
                        badgeContent={<BadgeContentSpan />}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                      >
                        <Avatar
                          alt="Cynetix"
                          src="/images/avatars/1.png"
                          sx={{ width: 50, height: 50, fontSize: "25px" }}
                        />
                      </Badge>
                      <Box
                        sx={{
                          display: "flex",
                          marginLeft: 3,
                          alignItems: "flex-start",
                          flexDirection: "column",
                        }}
                      >
                        <Typography sx={{ fontWeight: 600 }}>
                          DEMO Team{" "}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.8rem", color: "text.disabled" }}
                        >
                          Admin
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Divider />

                  <MenuItem onClick={logout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Container>{" "}
        </div>
      </AppBar>
    </>
  );
};

export default Dashboard;
