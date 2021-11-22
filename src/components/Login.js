import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

export default function Login() {
  return (
    <div id="login">
      <div id="loginCard">
        <h2 id="wlc">Welcome to ReaderChat</h2>
        <div
          className="loginBtn google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In with Google
        </div>
      </div>
    </div>
  );
}
