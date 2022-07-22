import React from "react";
import { Grid } from "@mui/material";
import {
  getCurrentUser,
  updateUser,
  useLoginUserMutation,
} from "../../redux/reduicers/auth/auth";
import logo from "../../assets/images/register.gif";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.currentUser);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginUser, { data, isSuccess, isError, error, isLoading }] =
    useLoginUserMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email: email, password: password });
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [data, dispatch]);
  useEffect(() => {
    if (data) {
      dispatch(updateUser(data.user));
    }
  }, [data, dispatch]);
  // console.log(data);
  return (
    <div style={{ padding: "0px 0px" }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div style={{ width: "100% " }}>
            <img style={{ width: "97% " }} src={logo} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ width: "100% " }}>
            <div
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                width: "70%",
                height: "320px",
                padding: "50px 10px",
                marginTop: "20px",
                borderRadius: "7px",
              }}
            >
              <div className="register_header" style={{ textAlign: "center" }}>
                <h4
                  style={{
                    color: "#344055",
                    fontFamily: "monospace",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  Login
                </h4>
              </div>
              {/* login with google and facebook  */}
              <div
                style={{
                  width: "100%",
                  margin: "0 auto",
                  marginTop: "1rem",
                }}
              >
                <div style={{ padding: "20px 0px" }}>
                  <form
                    onSubmit={handleSubmit}
                    style={{ width: "90%", margin: "0 auto" }}
                  >
                    <br />

                    <input
                      onBlur={(e) => setEmail(e.target.value)}
                      style={{
                        marginLeft: "9px",
                        width: "90%",
                        border: "1px solid #ECEDF3",
                        outline: "none",
                        padding: "10px 2px",
                        borderRadius: "3px",
                        marginTop: "10px",
                      }}
                      type="email"
                      placeholder="example@com:"
                    />

                    <br />

                    <input
                      onBlur={(e) => setPassword(e.target.value)}
                      style={{
                        marginLeft: "9px",
                        width: "90%",
                        border: "1px solid #ECEDF3",
                        outline: "none",
                        padding: "10px 2px",
                        borderRadius: "3px",
                        marginTop: "10px",
                      }}
                      type="password"
                      placeholder="password:12345"
                    />
                    <input
                      style={{
                        marginLeft: "9px",
                        width: "91%",
                        border: "1px solid #ECEDF3",
                        outline: "none",
                        padding: "8px 2px",
                        borderRadius: "3px",
                        marginTop: "10px",
                        cursor: "pointer",
                        color: "#344055",
                        fontFamily: "monospace",
                        fontWeight: "600",
                        fontSize: "15px",
                      }}
                      type="submit"
                      value="Login"
                    />
                  </form>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
