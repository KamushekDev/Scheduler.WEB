import React, { useState, useEffect } from 'react'
import DaySchedule from './DaySchedule'
import { IScheduleParams } from '../Contracts/ScheduleInterfaces'

const Schedule = function name(params: IScheduleParams) {

    let days = params.days.map(day => (<DaySchedule dayNumber={day.dayNumber} lessons={day.lessons} key={day.dayNumber} />));

    return (
        <div className="Schedule">
            {days}
        </div>
    );
}

export default Schedule;