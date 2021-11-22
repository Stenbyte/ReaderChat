import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

export default function Chat() {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const history = useNavigate();

  async function handleLogout() {
    await auth.signOut();
    history("/");
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: "image/jpeg" });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!user || user === null) {
        history("/");
        return;
      }

      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "project-id": "784bdb9e-8724-4f63-8ab6-3c10d59f74a7",
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })

        .then(() => setLoading(false))

        .catch((e) => {
          let formdata = new FormData();
          formdata.append("email", user.email);
          formdata.append("username", user.email);
          formdata.append("secret", user.uid);

          getFile(user.photoURL).then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);

            axios
              .post("https://api.chatengine.io/users/", formdata, {
                headers: {
                  "private-key": process.env.REACT_APP_API_KEY,
                },
              })
              .then(() => setLoading(false))
              .catch((e) => console.log("e", e.response));
          });
        });
    }
  }, [user, history]);
  //   if (user || loading) return "Loading...";
  return (
    <div className="chat">
      <div className="nav">
        <div className="logo">ReaderChat</div>
        <div className="logout" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh- 66px)"
        userName={user?.email}
        userSecret={user?.uid}
        projectID={process.env.REACT_APP_ID}
      />
    </div>
  );
}
