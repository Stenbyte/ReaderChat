import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

export default function Login() {
  return (
    <div id="login">
      <div id="loginCard">
        <h2 id="wlc">Welcome to ReaderChat</h2>
        <div className="loginBtn google">
          <GoogleOutlined /> Sign In with Google
        </div>
        <br /> <br />
        <div className="loginBtn facebook">
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}
