import React from "react";
import { ITask } from "../Contracts/Interfaces";

const Tasks = (props: Props) => {
  if (props.errorCode)
    return <p>Request failed with status code: {props.errorCode}</p>;

  if (props.tasks == null) {
    return <p>Tasks are loading...</p>;
  }

  let tasks = props.tasks.map(x => <Task key={x.id} task={x} />);

  return <div className="Tasks">{tasks}</div>;
};

const Task = (props: TaskProps) => {
  return <p>{props.task.taskName}</p>;
};

interface Props {
  tasks: ITask[] | null;
  errorCode: number | null;
}

interface TaskProps {
  task: ITask;
}

export default Tasks;
