import React, { useState } from "react";
import { IGroup } from "../Contracts/Interfaces";
import "../css/styles.css";

const Groups = (props: Props) => {
  const mapGroups = (group: IGroup) => {
    let button = null;
    if (props.allowButton) {
      button = (
        <button onClick={() => props.onClick(group)}>{props.buttonText}</button>
      );
    }

    return (
      <div className="Group" key={group.id}>
        <p>Id: {group.id}</p>
        <p>Название: {group.name}</p>
        {button}
      </div>
    );
  };

  const onChange = (event: any) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    } else setFile(null);
  };

  const onGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setGroup(event.target.value);
  };

  let [file, setFile] = useState();
  let [group, setGroup] = useState();

  if (props.errorCode)
    return <p>Запрос завершился с кодом ошибки: {props.errorCode}</p>;

  if (props.groups == null) {
    return <p>Группы загружается..</p>;
  }

  if (props.groups.length == 0)
    return <p>Нет публичных групп, в которые можно вступить :c</p>;

  let groups = props.groups.map(mapGroups);

  return (
    <>
      <div className="Groups">
        <form
          onSubmit={x => {
            x.preventDefault();
            props.onSubmitFile(file, group);
          }}
        >
          <input type="file" onChange={onChange} />
          <input type="text" onChange={onGroupChange} />
          <input type="submit" value="Send" />
        </form>
        <p>{groups}</p>
      </div>
    </>
  );
};

interface Props {
  groups: IGroup[] | null;
  errorCode: number | null;
  allowButton: boolean;
  buttonText: string | null;
  onClick: (group: IGroup) => void;
  onSubmitFile: (file: any, group: string) => void;
}

export default Groups;
