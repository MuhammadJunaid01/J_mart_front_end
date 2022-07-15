import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import registerLogo from "../../assets/images/register.gif";
import GoogleIcon from "@mui/icons-material/Google";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "../../assets/styles/register.css";
import {
  useGetAllPostQuery,
  useAddUserMutation,
} from "../../redux/reduicers/auth/auth";
const Register = ({ isCheckout }) => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [addUser, { data, isSuccess, isError, error, isLoading }] =
    useAddUserMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    addUser(data);
  };
  if (isLoading) {
    return <h1>Loading.........</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  console.log("hello is checkout", isCheckout);
  return (
    <div style={{ backgroundColor: "white", padding: "20px 0px" }}>
      <Grid container spacing={2}>
        {/* {isCheckout && undefined ? (
        
        ) : (
          <div></div>
        )} */}

        {isCheckout ? (
          <>
            {/* <Grid
              sx={{ display: { xs: "none", md: "flex" } }}
              item
              xs={6}
              md={6}
            >
              <img
                style={{ height: "30rem", width: "auto" }}
                src={registerLogo}
                alt="register logo"
              />
            </Grid> */}
            <Grid item xs={12} md={2}></Grid>

            <Grid item xs={12} md={6}>
              <div
                className={
                  isCheckout ? "checkout_container" : "register_container"
                }
              >
                <div
                  className="register_header"
                  style={{ textAlign: "center" }}
                >
                  <h4 style={{ color: "#344055", fontFamily: "helvetica" }}>
                    Create New Account
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
                      <input
                        onBlur={(e) => setName(e.target.value)}
                        style={{
                          marginLeft: "9px",
                          width: "90%",
                          border: "1px solid #ECEDF3",
                          outline: "none",
                          padding: "10px 2px",
                          borderRadius: "3px",
                        }}
                        type="text"
                        placeholder="Please Enter your Name:"
                      />

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
                        }}
                        type="submit"
                        value="Create an account"
                      />
                    </form>
                  </div>
                  {/*  */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <button
                      style={{
                        border: "1px solid #ECEDF3",
                        cursor: "pointer",
                        position: "relative",
                        width: "70%",
                        padding: "5px 25px",
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "white",
                      }}
                    >
                      <GoogleIcon /> login google
                    </button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={2}></Grid>
          </>
        ) : (
          <>
            <Grid
              sx={{ display: { xs: "none", md: "flex" } }}
              item
              xs={6}
              md={6}
            >
              <img
                style={{ height: "30rem", width: "auto" }}
                src={registerLogo}
                alt="register logo"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="register_container">
                <div
                  className="register_header"
                  style={{ textAlign: "center" }}
                >
                  <h4 style={{ color: "#344055", fontFamily: "helvetica" }}>
                    Create New Account
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
                      <input
                        onBlur={(e) => setName(e.target.value)}
                        style={{
                          marginLeft: "9px",
                          width: "90%",
                          border: "1px solid #ECEDF3",
                          outline: "none",
                          padding: "10px 2px",
                          borderRadius: "3px",
                        }}
                        type="text"
                        placeholder="Please Enter your Name:"
                      />

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
                        }}
                        type="submit"
                        value="Create an account"
                      />
                    </form>
                  </div>
                  {/*  */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <button
                      style={{
                        border: "1px solid #ECEDF3",
                        cursor: "pointer",
                        position: "relative",
                        width: "70%",
                        padding: "5px 25px",
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "white",
                      }}
                    >
                      <GoogleIcon /> login google
                    </button>
                  </div>
                </div>
              </div>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default Register;
