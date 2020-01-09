import React, { useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import axios from "axios";

interface Props {
  setToken: (token: string | null) => void;
  token: string | null;
}

const Auth = (props: Props) => {
  const gitHub = (provider: string) => {
    window.location.href = "/api/auth/" + provider;
  };

  const logOut = () => {
    props.setToken(null);
  };

  let { accessToken } = useParams();

  if (accessToken) {
    //Если пришёл токен
    props.setToken(accessToken);
    return <Redirect to="/auth" />;
  }

  if (!props.token) {
    //Пользователь не авторизован
    return (
      <>
        {/* <button onClick={() => gitHub("github")}>Auth via GitHub</button> */}
        <button onClick={() => gitHub("vk")}>Auth via VKontakte</button>
      </>
    );
  }

  //Пользователь авторизован

  return (
    <>
      <h3>Token</h3>
      <p>{props.token}</p>
      <button onClick={logOut}>Log out</button>
    </>
  );
};

export default Auth;
