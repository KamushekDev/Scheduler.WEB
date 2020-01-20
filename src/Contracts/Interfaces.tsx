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

export interface ITask {
  id: number;
  begin: moment.Moment;
  end: moment.Moment;
  taskName: string;
  lessonName: string;
  description: string | null;
}
