import * as joda from '@js-joda/core'

type IScheduleParams = {
    groups: string[]
}

type IDayScheduleParams = {
    dayNumber: number
    lessons: ILesson[]
}

type ILesson = {
    startTime: joda.LocalTime
    endTime: joda.LocalTime
    lessonType: string
    name: string
    teacher: string
    room: string
}