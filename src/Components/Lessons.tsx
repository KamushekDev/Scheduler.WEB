import React from 'react'
import CSS from 'csstype'
import * as joda from '@js-joda/core'

interface ILessonsParams {
    lessons: Array<ILesson>
}

interface ILesson {
    startTime: joda.LocalTime
    endTime: joda.LocalTime
    lessonType: string
    name: string
    teacher: string
    room: string
}

const Lessons = function name(params: ILessonsParams) {

    var lessons = params.lessons.map((item, index) => (
        <div className="lesson" style={lessonStyle} key={item.name}>
            <div className="LessonNumber" style={lessonNumberStyle}><p>{index + 1}</p></div>
            <div className="LessonTime" style={LessonTimeStyle}>
                <p>
                    {item.startTime.toString()}
                    <br />
                    {item.endTime.toString()}
                </p>
            </div>
            <div className="LessonName" style={LessonNameStyle}>
                <div className="LessonType" style={LessonTypeStyle}>
                    <p>{item.lessonType}</p>
                </div>
                <p>{item.name}</p>
            </div>
            <div className="LessonTeacherRoom" style={LessonTeacherRoomStyle}>
                <p>{item.teacher}</p>
                <p>{item.room}</p>
            </div>
        </div>
    ));

    return (<div className="Lessons">{lessons}</div>);
}

const lessonStyle: CSS.Properties = {
    textAlign: 'center',
    verticalAlign: 'middle'
};

const lessonNumberStyle: CSS.Properties = {
    width: '10%',
    display: 'inline-block',
    verticalAlign: 'middle'
};
const LessonTimeStyle: CSS.Properties = {
    width: '10%',
    display: 'inline-block',
    verticalAlign: 'middle'
};
const LessonNameStyle: CSS.Properties = {
    width: '60%',
    display: 'inline-block',
    verticalAlign: 'middle'
};
const LessonTypeStyle: CSS.Properties = {
    padding: '0 0 0 30%',
    textAlign: 'left'
};
const LessonTeacherRoomStyle: CSS.Properties = {
    width: '20%',
    display: 'inline-block',
    verticalAlign: 'middle'
};

export default Lessons;