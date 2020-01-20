import React, { useState, useEffect } from "react";
import _ from "lodash";
import DayScheduleContainer from "./Containers/DayScheduleContainer";
import moment from "moment";

const Schedule = function(params: Props) {
  let schedule = params.classes;
  if (schedule == null) {
    return <p>Schedule is loading...</p>;
  }

  let days: Map<number, IClass[]> = new Map<number, IClass[]>();

  schedule.forEach(c => {
    let day = days.get(c.dayNumber);
    if (day) {
      days.set(c.dayNumber, [...day, c]);
    } else days.set(c.dayNumber, [c]);
  });

  let daySchedules: JSX.Element[] = [];
  for (let day of days) {
    let daySchedule = (
      <DayScheduleContainer dayNumber={day[0]} lessons={day[1]} key={day[0]} />
    );
    daySchedules.push(daySchedule);
  }

  return (
    <div className="Schedule">
      {daySchedules.sort((a, b) =>
        a.props.dayNumber > b.props.dayNumber ? 1 : -1
      )}
    </div>
  );
};

type Props = {
  classes: IClass[] | null;
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

export default Schedule;
