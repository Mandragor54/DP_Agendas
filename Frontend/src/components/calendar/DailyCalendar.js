import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DescriptionAllEvents from '../DescriptionAllEvents.js';

function PopupAllEvents(events) {
    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-5">
          {month.map((row, i) => (
            <React.Fragment key={i}>
              {row.map((day, idx) => (
                <DayBox day={day} key={idx} rowIdx={i} />
              ))}
            </React.Fragment>
          ))}
        </div>
      );
};

export default PopupAllEvents ;