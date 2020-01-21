import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { IUser } from "../../Contracts/Interfaces";
import Profile from "../Profile";
import axios from "axios";

const ProfileContainer = (props: Props) => {
  const logOut = () => {
    props.setToken(null);
  };

  const updateUser = (event: React.FormEvent<HTMLFormElement>) => {
    if (user == null) return;
    axios({
      method: "post",
      url: "/api/user/" + user.id,
      headers: {
        Authorization: "Bearer " + props.token,
        "Content-Type": "application/json"
      },
      data: { name: user.name, surname: user.surname }
    }).catch(console.log);
  };

  let [user, setUser] = useState<IUser | null>(null);
  let [errorCode, setErrorCode] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<IUser>("/api/User/me", {
        headers: { Authorization: "Bearer " + props.token }
      })
      .then(x => setUser(x.data))
      .catch(x => {
        console.log(JSON.stringify(x.response));
        setErrorCode(x.response.status);
      });
  }, []);

  if (!props.token) return <Redirect to="/auth" />;

  return (
    <Profile
      setUser={setUser}
      onSubmit={updateUser}
      logOut={logOut}
      user={user}
      errorCode={errorCode}
    />
  );
};

interface Props {
  token: string | null;
  setToken: (token: string | null) => void;
}

export default ProfileContainer;
