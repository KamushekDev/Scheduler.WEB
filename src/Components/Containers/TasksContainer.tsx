import React, { useEffect, useState } from "react";
import { ITask } from "../../Contracts/Interfaces";
import axios from "axios";
import Tasks from "../Tasks";
import { Redirect } from "react-router-dom";
import * as moment from "moment";

const TasksContainer = (props: Props) => {
  const createTask = (
    groupId: number,
    taskName: string,
    taskDescription: string
  ) => {
    axios({
      method: "post",
      url: "/api/tasks",
      headers: {
        Authorization: "Bearer " + props.token,
        "Content-Type": "application/json"
      },
      data: {
        classId: groupId,
        Name: taskName,
        Description: taskDescription
      }
    })
      .then(x => setGeneration(generation + 1))
      .catch(console.log);
  };

  let [tasks, setTasks] = useState<ITask[] | null>(null);
  let [generation, setGeneration] = useState<number>(0);
  let [erorrCode, setErrorCode] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<ITask[]>("api/Tasks", {
        headers: { Authorization: "Bearer " + props.token }
      })
      .then(x => setTasks(x.data))
      .catch(x => {
        console.log(JSON.stringify(x.response));
        setErrorCode(x.response.status);
      });
  }, [generation]);

  if (!props.token) return <Redirect to="/auth" />;

  return <Tasks createTask={createTask} tasks={tasks} errorCode={erorrCode} />;
};

interface Props {
  token: string | null;
}

export default TasksContainer;
