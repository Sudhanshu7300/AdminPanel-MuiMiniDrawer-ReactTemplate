import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//core Comoponent
import axiosInstance from "../../component/axios/axiosInstance";
const Login = () => {
  const [Email, setEmail] = useState("admin@gmail.com");
  const [Password, setPassword] = useState("demo@123");
  const navigate = useNavigate();
  // const { token , setToken} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", Email, Password);
    const body = {
      email: Email,
      password: Password,
    };
    console.log("Body", body);

    const LoginRequest = async () => {
      try {
        // const resp = await axiosInstance.post("/admin/auth/adlogin", body);
        // console.log(resp.data);
        // localStorage.setItem(
        //   "userData",
        //   JSON.stringify({
        //     user: resp.data.user,
        //     token: resp.data.token,
        //   })
        // );
        navigate("/dashboard");
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    };

    LoginRequest();
  };

  return (
    <>
      <Grid
        container
        sx={{
          padding: "4em",
          height: "auto",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #000 0%, #000 100%)",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          component={Paper}
          elevation={6}
          square
          sx={{
            boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box
            sx={{
              width: "60%",
              marginLeft: "auto",
              marginTop: "4em",
              marginRight: "auto",
            }}
          >
            <img src="/img/demoMan.png" alt="logo" style={{ width: "6em" }} />
          </Box>
          <Box
            sx={{
              width: "60%",
              marginLeft: "auto",
              marginTop: "7em",
              marginRight: "auto",
            }}
          >
            <Typography sx={{ fontWeight: "700", fontSize: "22px" }}>
              Sign in to Cynetix
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Enter E-mail"
                name="email"
                variant="filled"
                size="small"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                InputProps={{ disableUnderline: true }}
                sx={{ background: "#F7F8FD", borderRadius: "6px" }}
                InputLabelProps={{
                  style: { color: "#080605" },
                }}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Enter Password"
                type="password"
                id="password"
                variant="filled"
                size="small"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                InputProps={{ disableUnderline: true }}
                sx={{ background: "#F7F8FD", borderRadius: "6px" }}
                InputLabelProps={{
                  style: { color: "#080605" },
                }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link
                  to="/auth/forgetpassword"
                  variant="body2"
                  sx={{
                    color: "#080605",
                    textDecoration: "none",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                // class="signinbutton"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#000",
                  borderRadius: "6px",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  fontSize: "18px",
                  ":hover": {
                    backgroundColor: "#000",
                    opacity: 1,
                  },
                }}
                onClick={handleSubmit}
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          md={8}
          className="imglogin"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/img/demoMan.png"
              alt="Screenlogo"
              style={{ width: "12em", position: "absolute", top: "10%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "14em",
            }}
          >
            <img
              src="/img/demoMan.png"
              alt="screen"
              style={{ padding: "4em" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "Center" }}>
            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "#fff", fontWeight: "700", marginBottom: "2em" }}
            >
              One Platform to manage everyone
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
