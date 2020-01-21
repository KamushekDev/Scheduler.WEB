import moment from "moment";

export interface IClass {
  id: number;
  lessonName: string;
  roomName: string;
  startTime: moment.Moment;
  duration: number;
  classTypeName: string;
  groupName: string;
  teacher: IUser | null;
  weekType: string;
  dayNumber: number;
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
  patronymic: string | null;
  phone: string | null;
  email: string | null;
}

export interface ITask {
  id: number;
  begin: moment.Moment;
  end: moment.Moment;
  taskName: string;
  lessonName: string;
  description: string | null;
}

export interface IGroup {
  id: number;
  name: string;
  inviteLink: string;
}
