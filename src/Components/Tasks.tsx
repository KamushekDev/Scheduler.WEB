import React, { useState } from "react";
import { ITask } from "../Contracts/Interfaces";
import "../css/styles.css";

const Tasks = (props: Props) => {
  const onIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(event.currentTarget.value));
  };
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const onDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(event.currentTarget.value);
  };

  let [id, setId] = useState<number>(0);
  let [name, setName] = useState<string>("");
  let [desc, setDesc] = useState<string>("");

  if (props.errorCode)
    return <p>Запрос завершился с кодом ошибки: {props.errorCode}</p>;

  if (props.tasks == null) {
    return <p>Задания загружаются...</p>;
  }
  let tasks = null;
  if (props.tasks.length == 0) tasks = <p>У вас нет заданий.</p>;
  else tasks = props.tasks.map(mapTasks);

  return (
    <>
      <form
        onSubmit={x => {
          x.preventDefault();
          props.createTask(id, name, desc);
        }}
      >
        <input type="text" name="id" onChange={onIdChange} />
        <input type="text" name="name" onChange={onNameChange} />
        <input type="text" name="desc" onChange={onDescChange} />
        <input type="submit" value="Send" />
      </form>
      <div className="Tasks">{tasks}</div>
    </>
  );
};

const mapTasks = (task: ITask) => {
  return (
    <>
      <div className="Task">
        <p>Название: {task.taskName}</p>
        <p>Предмет: {task.lessonName}</p>
        <p>Описание: {task.description}</p>
        <p>Задание выдано: {task.begin.toLocaleString()}</p>
        <p>Сдать до: {task.end.toLocaleString()}</p>
      </div>
    </>
  );
};

interface Props {
  tasks: ITask[] | null;
  errorCode: number | null;
  createTask: (
    groupId: number,
    taskName: string,
    taskDescription: string
  ) => void;
}

export default Tasks;
