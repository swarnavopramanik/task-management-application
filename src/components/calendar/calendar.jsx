import React, { useState } from 'react'
import {
    startOfToday,
    format,
    eachDayOfInterval,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isToday,
    isThisMonth,
    isEqual,
    subMonths,
    addMonths,
} from 'date-fns'
import clsx from 'clsx';
import {
    HiChevronLeft,
    HiChevronRight,
} from "react-icons/hi"


export default function Calendar() {
    let today = startOfToday();
    let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let [currentDay, setcurrentDay] = useState(today);
    let [selectedDay, setSelectedDay] = useState(today)
    let days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(currentDay)),
        end: endOfWeek(endOfMonth(currentDay))
    });
    function nextMonth() {
        today = currentDay;
        setcurrentDay(addMonths(today, 1))
    }
    function prevMonth() {
        today = currentDay;
        setcurrentDay(subMonths(today, 1))
    }
    function toCurrentDay() {
        today = currentDay;
        setcurrentDay(startOfToday());
    }
    return (
        <div className='p-4 h-full'>
            {/* controls */}
            <div className='flex justify-evenly py-2'>
                <button type='button'
                    onClick={() => prevMonth()}
                    className=' p-2 rounded-lg text-xl hover:bg-slate-800 '>
                    <HiChevronLeft />
                </button>
                <button
                    type='button'
                    onClick={() => toCurrentDay()}
                    className='col-span-3 text-lg font-semibold font-mono'>
                    {format(currentDay, 'MMMM - yyyy')}
                </button>
                <button type='button'
                    onClick={() => nextMonth()}
                    className=' p-2 rounded-lg text-xl hover:bg-slate-800'>
                    <HiChevronRight />
                </button>
            </div>

            {/* week days */}
            <div className="grid grid-cols-7 border-l-2 border-dashed">

                {dayNames.map((day, i) =>
                    <Cell className={'border-t-2 font-light font-mono py-1.5'} key={i}>
                        {day}
                    </Cell>
                )}

                {/* days of the month */}
                {days.map((day) =>
                    <Cell key={day}
                    >
                        <button type='button'
                            onClick={() => setSelectedDay(day)}
                            className={clsx(
                                isToday(day) && 'font-bold text-yellow-300',
                                isEqual(day, selectedDay) && 'text-black bg-slate-100 hover:bg-slate-100',
                                !isThisMonth(day) && 'text-slate-500',
                                isToday(day) && isEqual(day, selectedDay) && 'text-rose-500',
                                'w-full p-2 hover:bg-zinc-700 h-20',
                                // day.getDay() === 0 && 'border-l border-dashed',
                            )}>
                            <time dateTime={format(day, 'yyy-MM-dd')}>
                                {format(day, 'd')}
                            </time>
                        </button>
                    </Cell>
                )}

            </div>
        </div>
    )
}

function Cell({ children, className }) {
    return (
        <div className={clsx("text-center border-b-2 border-r-2 border-dashed select-none" , className)}>
            {children}
        </div>
    )
}
