import axios from "axios";
import { Suspense, memo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

//core Component
import "./assets/css/Style.css";
import { AuthContext } from "./Context/AuthContext.js";
import { SiteContext } from "./Context/SiteContext";
import LoaderDialog from "./component/LoaderDialog/LoaderDialog";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = React.useState(1);
  const [user, setUser] = React.useState(null);
  const [role, setRole] = React.useState(null);

  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  const [site, setSite] = React.useState(null);
  const [sites, setSites] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("userData"));
    if (storeData) {
      setToken(storeData.token);
      setUser(storeData.user);
      setRole(1);
    }
  }, []);

  // useEffect(() => {
  //   const storeData = JSON.parse(localStorage.getItem("userData"));
  //   if (!storeData) {
  //     navigate("/auth/signIn");
  //   }
  //   if (location.pathname === "/") {
  //     navigate("/auth/signIn");
  //   }
  // }, [navigate]);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("userData"));
    if (!storeData) {
      navigate("/dashboard");
    }
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <>
      <Suspense fallback={<LoaderDialog loading={true} />}>
        <AuthContext.Provider value={{ token, setToken }}>
          <SiteContext.Provider
            value={{ site, setSite, sites, setSites, refresh, setRefresh }}
          >
            <Outlet />
          </SiteContext.Provider>
        </AuthContext.Provider>
      </Suspense>
    </>
  );
}

export default memo(App);
