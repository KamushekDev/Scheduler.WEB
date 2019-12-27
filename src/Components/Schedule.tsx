import React, { useState, useEffect } from 'react'
import DaySchedule from './DaySchedule'
import joda from '@js-joda/core';
import axios from 'axios'
import _ from 'lodash';

const Schedule = function (params: IScheduleParams) {

    let [schedule, setSchedule] = useState();

    useEffect(() => {
        //todo: Тут нужно запросить уроки с апишки
        axios.get('getTimetable').then(x => setSchedule(x)).catch(console.log);
    }, params.groups)

    if (schedule == null) {
        return (
            <>
                <p>Schedule is loading...</p>
            </>
        );
    }

    let days = _.groupBy(schedule, sc => sc.dayNumber);

    let daySchedules = new Array();

    for (let index = 1; index <= 7; index++) {
        const day = (<DaySchedule dayNumber={index} lessons={days[index]} key={index}/>);
        daySchedules = [...daySchedules, day];
    }

    return (
        <div className="Schedule">
            {days}
        </div>
    );
}

type IScheduleParams = {
    groups: string[]
}

type IDayScheduleParams = {
    dayNumber: number
    lessons: ILesson[]
}

type ILesson = {
    dayNumber: number
    startTime: joda.LocalTime
    endTime: joda.LocalTime
    lessonType: string
    name: string
    teacher: string
    room: string
}

export default Schedule;