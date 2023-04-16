import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const Chat = () => {
  const didMountRef = useRef(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  console.log(user);
  const handleLogout = async () => {
    await auth.signOut();

    navigate("/");
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!user || user === null) {
        navigate("/");
        return;
      }

      axios
        .get("https://api.chatengine.io/users/me", {
          headers: {
            "project-id": "cebd9729-7eb0-4a5a-927d-ab5334c19e6e",
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })
        .then(() => {
          setLoading(false);
        })
        .catch((e) => {
          let formdata = new FormData();
          formdata.append("email", user.email);
          formdata.append("username", user.email);
          formdata.append("secret", user.uid);

          getFile(user.photoURL).then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);

            axios
              .post("https://api.chatengine.io/users", formdata, {
                headers: {
                  "private-key": "c5989e10-5da5-4194-8b31-749f35b98177",
                },
              })
              .then(() => setLoading(false))
              .catch((error) => console.log(error));
          });
        });
    }
  }, [user, navigate]);

  if (!user || loading) return "Loading...";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">PGKChat</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="cebd9729-7eb0-4a5a-927d-ab5334c19e6e"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chat;
