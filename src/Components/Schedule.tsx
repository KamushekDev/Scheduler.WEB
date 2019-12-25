import React from 'react'
import DaySchedule from './DaySchedule'
import * as joda from '@js-joda/core'

interface IScheduleParams {
    days: IDayScheduleParams[]
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

    let days = params.days.map(day => (<DaySchedule dayNumber={day.dayNumber} lessons={day.lessons} key={day.dayNumber} />));

    return (
        <div className="Schedule">
            {days}
        </div>
    );
}

export default Schedule;