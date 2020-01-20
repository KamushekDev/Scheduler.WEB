import React from "react";
import { Redirect } from "react-router-dom";

const ProfileContainer = (props: Props) => {
  const logOut = () => {
    props.setToken(null);
  };

  if (!props.token) return <Redirect to="/auth" />;

  return (
    <>
      <h1>Тут типа инфа о пользователе. Его группы</h1>
      <button onClick={logOut}>Log out</button>
    </>
  );
};

interface Props {
  token: string | null;
  setToken: (token: string | null) => void;
}

export default ProfileContainer;
