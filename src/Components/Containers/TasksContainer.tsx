import React, { useEffect, useState } from "react";
import { ITask } from "../../Contracts/Interfaces";
import axios from "axios";
import Tasks from "../Tasks";
import { Redirect } from "react-router-dom";

const TasksContainer = (props: Props) => {
  let [tasks, setTasks] = useState<ITask[] | null>(null);
  let [erorrCode, setErrorCode] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<ITask[]>("api/Task", {
        headers: { Authorization: "Bearer " + props.token }
      })
      .then(x => setTasks(x.data))
      .catch(x => {
        console.log(JSON.stringify(x.response));
        setErrorCode(x.response.status);
      });
  }, []);

  if (!props.token) return <Redirect to="/auth" />;

  return <Tasks tasks={tasks} errorCode={erorrCode} />;
};

interface Props {
  token: string | null;
}

export default TasksContainer;
