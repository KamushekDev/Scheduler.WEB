import React from "react";
import { IClass } from "../../Contracts/Interfaces";
import DaySchedule from "../DaySchedule";

const DayScheduleContainer = (props: Props) => {
  let dayName = getDayName(props.dayNumber);

  if (!dayName) return null;

  return <DaySchedule dayName={dayName} lessons={props.lessons} />;
};

const getDayName = (dayNumber: number) => {
  switch (dayNumber) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";
  }
};

interface Props {
  dayNumber: number;
  lessons: IClass[];
}

export default DayScheduleContainer;
