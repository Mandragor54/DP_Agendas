import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DescriptionAllEvents from '../DescriptionAllEvents.js';

function PopupAllEvents(events) {
  return(
    <div class=" w-1/3 h-2/3">
    <Popup open={true} position="right center">
      
    <DescriptionAllEvents events={events.events}/>
    </Popup>
    </div>
  );
};

export default PopupAllEvents ;