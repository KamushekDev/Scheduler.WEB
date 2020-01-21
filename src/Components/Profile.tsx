import React from "react";
import { IUser, IGroup } from "../Contracts/Interfaces";
import UserGroupsContainer from "./Containers/UserGroupsContainer";

const Profile = (props: Props) => {
  if (props.errorCode)
    return <p>Запрос завершился с кодом ошибки: {props.errorCode}</p>;

  if (props.user == null) {
    return <p>Профиль загружается...</p>;
  }

  return (
    <>
      <form
        onSubmit={x => {
          x.preventDefault();
          props.onSubmit(x);
        }}
      >
        <p>Id: {props.user.id}</p>
        <p>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={props.user.name}
            onChange={x =>
              props.setUser(
                Object.assign({}, props.user, { name: x.currentTarget.value })
              )
            }
          />
        </p>
        <p>
          <label htmlFor="surname">Фамилия:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            defaultValue={props.user.surname}
            onChange={x =>
              props.setUser(
                Object.assign({}, props.user, {
                  surname: x.currentTarget.value
                })
              )
            }
          />
        </p>
        <input type="submit" value="Изменить" />
      </form>
      <button onClick={props.logOut}>Выйти</button>
      <br />
      <UserGroupsContainer token={props.token} />
    </>
  );
};

interface Props {
  logOut: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setUser: (user: IUser) => void;
  user: IUser | null;
  errorCode: number | null;
  token: string | null;
}

export default Profile;
