import React from "react";
import { IGroup } from "../Contracts/Interfaces";
import "../css/styles.css";

const Groups = (props: Props) => {
  const mapGroups = (group: IGroup) => {
    let button = null;
    if (props.allowButton) {
      button = (
        <button onClick={() => props.onLeave(group)}>{props.buttonText}</button>
      );
    }

    return (
      <>
        <div className="Group">
          <p>Id: {group.id}</p>
          <p>Название: {group.name}</p>
          {button}
        </div>
      </>
    );
  };

  if (props.errorCode)
    return <p>Запрос завершился с кодом ошибки: {props.errorCode}</p>;

  if (props.groups == null) {
    return <p>Группы загружается..</p>;
  }

  if (props.groups.length == 0) return <p>Вы не состоите в группах :c</p>;

  let groups = props.groups.map(mapGroups);

  return (
    <>
      <div className="Groups">{groups}</div>
    </>
  );
};

interface Props {
  groups: IGroup[] | null;
  errorCode: number | null;
  allowButton: boolean;
  buttonText: string | null;
  onLeave: (group: IGroup) => void;
}

export default Groups;
