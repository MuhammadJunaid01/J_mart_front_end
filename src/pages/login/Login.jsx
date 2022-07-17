import React from "react";
import { useAddUserMutation } from "../../redux/reduicers/auth/auth";

const Login = () => {
  const [{ data, isSuccess, isError, error, isLoading }] = useAddUserMutation();

  console.log("data login comp", data);
  return (
    <div>
      <h1>hello login</h1>
    </div>
  );
};

export default Login;
