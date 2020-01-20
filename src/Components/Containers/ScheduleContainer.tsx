import React, { useState, useEffect } from "react";
import axios from "axios";
import Schedule from "../Schedule";
import _ from "lodash";
import { IClass } from "../../Contracts/Interfaces";
import { Redirect } from "react-router-dom";

const ScheduleContainer = function(props: Props) {
  let [schedule, setSchedule] = useState<IClass[] | null>(null);
  let [erorrCode, setErrorCode] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<IClass[]>("api/Schedule", {
        headers: { Authorization: "Bearer " + props.token }
      })
      .then(x => setSchedule(x.data))
      .catch(x => {
        console.log(JSON.stringify(x.response));
        setErrorCode(x.response.status);
      });
  }, []);

  if (!props.token) return <Redirect to="/auth" />;

  return <Schedule classes={schedule} errorCode={erorrCode} />;
};

interface Props {
  token: string | null;
}

export default ScheduleContainer;
