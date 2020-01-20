import React, { useState, useEffect } from "react";
import axios from "axios";
import Schedule from "../Schedule";
import _ from "lodash";
import { IClass } from "../../Contracts/Interfaces";

const ScheduleContainer = function() {
  let [schedule, setSchedule] = useState<IClass[] | null>(null);
  let [erorrCode, setErrorCode] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<IClass[]>("api/Schedule")
      .then(x => setSchedule(x.data))
      .catch(x => {
        console.log(JSON.stringify(x.response));
        setErrorCode(x.response.status);
      });
  }, []);

  return <Schedule classes={schedule} errorCode={erorrCode} />;
};

export default ScheduleContainer;
