import React from "react";
import { ITask } from "../Contracts/Interfaces";
import "../css/styles.css";

const Tasks = (props: Props) => {
  if (props.errorCode)
    return <p>Запрос завершился с кодом ошибки: {props.errorCode}</p>;

  if (props.tasks == null) {
    return <p>Задания загружаются...</p>;
  }

  if (props.tasks.length == 0) return <p>У вас нет заданий.</p>;

  let tasks = props.tasks.map(mapTasks);

  return <div className="Tasks">{tasks}</div>;
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
}

export default Tasks;
