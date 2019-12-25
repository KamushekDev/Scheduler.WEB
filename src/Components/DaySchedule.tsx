import React from 'react'
import Lessons from './Lessons'
import * as joda from '@js-joda/core'

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

const DaySchedule = function name(params: IDayScheduleParams) {
    return (
        <div className="daySchedule">
            <h3>{params.dayNumber}</h3>
            <Lessons lessons={params.lessons} />
        </div>
    );
}

export default DaySchedule;