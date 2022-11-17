import React, { useState } from "react";
import "./LoginPage.css";
function LoginPage() {
  const [userDetails, setUserDetails] = useState({
    userName: "Please Enter user Name",
    password: "Please enter your password",
  });

  return (
    <div className="login-container">
      <form>
        <h2>Login</h2>
        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          id="userName"
          name="username"
          minLength={5}
          maxLength={12}
          required
          placeholder={userDetails.userName}
          onChange={(e) => {
            setUserDetails((prev) => ({
              ...prev,
              userName: e.target.value,
            }));
          }}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength={5}
          maxLength={12}
          placeholder={userDetails.password}
          onChange={(e) => {
            setUserDetails((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
          required
        />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
