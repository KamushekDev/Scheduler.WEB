import React from "react";
import { IClass } from "../Contracts/Interfaces";
import "../css/styles.css";

const DaySchedule = (props: Props) => {
  let classes = props.lessons.map(mapLesson);

  return (
    <div className="Day">
      <h1>{props.dayName}</h1>
      <div className="Lessons">{classes}</div>
    </div>
  );
};

const mapLesson = (l: IClass) => {
  return (
    <div className="Lesson" key={l.id}>
      <p>Название: {l.lessonName}</p>
      <p>Тип: {l.classTypeName}</p>
      <p>Аудитория: {l.roomName}</p>
      <p>Начало: {l.startTime}</p>
      <p>Продолжительность: {l.duration} минут</p>
      <p>Учитель: {l.teacher ? l.teacher.surname : ""}</p>
      <p>Тип недели: {l.weekType}</p>
      <p>Группа: {l.groupName}</p>
    </div>
  );
};

interface Props {
  dayName: string;
  lessons: IClass[];
}

export default DaySchedule;
