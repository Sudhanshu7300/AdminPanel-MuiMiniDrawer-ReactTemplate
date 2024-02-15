import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Container } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

// pubnub
import { AuthContext } from "../Context/AuthContext";
import SidebarLayout from "./SidebarLayout";
import HeaderLayout from "./HeaderLayout";

const AdminLayout = () => {
  const { token } = useContext(AuthContext);
  return (
    <>
      {token && (
        <div component="main" style={{ marginLeft: "60px" }}>
          <HeaderLayout />
          <SidebarLayout />
          <div
            style={{
              marginTop: "90px",
            }}
          >
            <Container maxWidth="xl">
              <Outlet />
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLayout;
