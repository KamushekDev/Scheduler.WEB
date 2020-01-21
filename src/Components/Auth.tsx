import React, { useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import axios from "axios";

const Auth = (props: Props) => {
  const gitHub = (provider: string) => {
    window.location.href = "/api/auth/" + provider;
  };

  let { accessToken } = useParams();

  if (accessToken) {
    //Если пришёл токен
    if (accessToken === "clr") props.setToken(null);
    else props.setToken(accessToken);
    return <Redirect to="/profile" />;
  }

  if (!props.token) {
    //Пользователь не авторизован
    return (
      <>
        {/* <button onClick={() => gitHub("github")}>Auth via GitHub</button> */}
        <button onClick={() => gitHub("vk")}>Авторизоваться через VK</button>
      </>
    );
  }

  //Пользователь авторизован
  return <Redirect to="/" />;
};

interface Props {
  setToken: (token: string | null) => void;
  token: string | null;
}

export default Auth;
