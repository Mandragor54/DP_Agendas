import React from 'react'
import  { useContext, useState }  from 'react';
import './calendar/MonthlyCalendar.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DescriptionOneEvent from './DescriptionOneEvent.js';

function EventBox(event){
    
  const [showPopup, setShowPopup] = useState(false);
    
    return (
        <div class="w-full h-full" >
            <div onClick={() => setShowPopup(true)} className={ `bg-${event.color}-500 hover:border-${event.color}-700 `+ "w-full h-full border-transparent border border-dashed rounded-md text-center"}>
                <div>
                {event.description}<br/>
                </div>
            </div>  

          {showPopup ?   ( <div class=" w-1/3 h-1/3">
            <Popup open={true} position="right center" onClose={() => setShowPopup(false)}>
            <DescriptionOneEvent description={event.description} start={event.start} end={event.end} color={event.color}/>
            </Popup>
            </div>) : null
            }
        </div>
    );
};

export default EventBox;