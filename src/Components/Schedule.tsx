import React, { useState, useEffect } from "react";
import _ from "lodash";
import DayScheduleContainer from "./Containers/DayScheduleContainer";
import { IClass } from "../Contracts/Interfaces";

const Schedule = function(props: Props) {
  let schedule = props.classes;

  if (props.errorCode)
    return <p>Запрос завершился с кодом ошибки: {props.errorCode}</p>;

  if (schedule == null) {
    return <p>Расписание загружается..</p>;
  }

  if (schedule.length == 0) return <p>В вашем расписании ничего нет :c</p>;

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
  errorCode: number | null;
};

export default Schedule;
