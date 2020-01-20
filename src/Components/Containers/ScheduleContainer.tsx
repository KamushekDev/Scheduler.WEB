import React, { useState, useEffect } from "react";
import * as moment from "moment";
import axios from "axios";
import Schedule from "../Schedule";
import _ from "lodash";

const ScheduleContainer = function() {
  let [schedule, setSchedule] = useState<IClass[] | null>(null);

  useEffect(() => {
    axios
      .get<IClass[]>("api/Schedule")
      .then(x => setSchedule(x.data))
      .catch(console.log);
  }, []);

  return <Schedule classes={schedule} />;
};

interface IClass {
  id: number;
  lessonName: string;
  roomName: string;
  startTime: moment.Moment;
  duration: number;
  classTypeName: string;
  groupName: string;
  teacher: IUser;
  weekType: string;
  dayNumber: number;
}

interface IUser {
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
  email: string;
}

interface IUser {
  Name: string;
  Surname: string;
  Patronymic: string;
  Phone: string;
  Email: string;
}

export default ScheduleContainer;
