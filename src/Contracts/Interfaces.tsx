import * as joda from "@js-joda/core";
import moment from "moment";

export interface IClass {
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

export interface IUser {
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
  email: string;
}
