import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams
} from "react-router-dom";

interface Props {}

const Task = (props: Props) => {
  let { id } = useParams();
  if (!id) return null;

  let taskId = parseInt(id);

  let taskTSX = <></>;
  return taskTSX;
};

export default Task;
