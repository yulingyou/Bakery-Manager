import React from 'react';
import { useState } from 'react';

export default function BakeryIndex() {

    const today = dayjs().set('year', year);
    const startWeek = today.startOf("isoWeek");
    const weekDays = Array.from(new Array(7).keys()).map((index) => {
        return startWeek.add(index, "day");
    });
    
    const startOfMonth = today.set("month", month).startOf("month");
    const startOfFirstWeek = startOfMonth.startOf("isoWeek");
    const daysToFirstDay = startOfMonth.diff(startOfFirstWeek, "day");
    const daysToPrepend = Array.from(new Array(daysToFirstDay).keys());
    const daysInMonth = Array.from(new Array(startOfMonth.daysInMonth()).keys());


    
    return (
        <body>
            <div className='flex'>
                <div className="mt-5 ml-20 w-10/12 h-10/12 mockup-window border bg-green">
                    <div className="flex justify-center px-4 py-96 bg-base-200">
    {/* company photo */}
                    <div className='fixed mt-10 h-96 w-96 top-10 left-80 bg-bone card rounded-full'>
                        <div className="artboard artboard-horizontal phone-1"></div>
                    </div>
            </div>
    {/* cards that contain 3 elements */}
                    <div className="fixed mt-40 top-80 left-80 right-30 card-body bg-darkgreen card shadow-xl w-96">
                    <button class="btn bg-beige text-bone btn-block"><a href='/addItem'>Add more items</a></button>
                    </div>
                    <div className="grid grid-cols-7 mt-2 rounded-md border overflow-hidden flex-1"> 
 {weekDays.map((weekDay, index) => (
          <div className="text-center" key={`weekday_${index}`}>
            {weekDay.format("ddd")}
          </div>
        ))}
{daysToPrepend.map((day) => (
          <div key={`prepend_${day}`}></div>
        ))}
{daysInMonth.map((day) => {
          const key = getDate(startOfMonth, day);
          return (
            <div
              className={`text-center `}
              key={key}
            >
              {day + 1}
            </div>
          )
        })}
</div>
        </div>
    </div>
</body>
    )
}