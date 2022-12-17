import React from "react";
import Calendar from 'react-calendar';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Day from './DayBox.js';

const MonthlyCalendar = () => {

    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false) 

    return (
        <div className="Calendar">
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            {date.length > 0 ? (
                <p>
                    <span>Start:</span>
                    {date[0].toDateString()}
                    <span>End:</span>{date[1].toDateString()}
                </p>
            ) : (
                <p>
                </p>
            )
            }
            <Day showTime={showTime} date={date} />

        </div>
    )
};

export default MonthlyCalendar;