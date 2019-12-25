import React from 'react'
import DaySchedule from './DaySchedule'
import * as joda from '@js-joda/core'

interface IScheduleParams {

}

interface IDayScheduleParams {
    dayNumber: number
    lessons: ILesson[]
}

interface ILesson {
    startTime: joda.LocalTime
    endTime: joda.LocalTime
    lessonType: string
    name: string
    teacher: string
    room: string
}

const Schedule = function name(params: IScheduleParams) {
    return (
        <>
            <DaySchedule dayNumber={1} lessons={[]} />
            <DaySchedule dayNumber={2} lessons={[]} />
            <DaySchedule dayNumber={3} lessons={[]} />
        </>
    );
}

export default Schedule;