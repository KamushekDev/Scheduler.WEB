import React from "react";
import { IClass } from "../Contracts/Interfaces";

const DaySchedule = (props: Props) => {
  let dayName = getDayName(props.dayNumber);

  let classes = props.lessons.map(mapLesson);

  return (
    <div className="Day">
      <h3>{dayName}</h3>
      <div className="Lessons">{classes}</div>
    </div>
  );
};

const mapLesson = (l: IClass) => {
  return (
    <div className="Title" key={l.id}>
      <p>{l.lessonName}</p>
    </div>
  );
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

export default DaySchedule;
