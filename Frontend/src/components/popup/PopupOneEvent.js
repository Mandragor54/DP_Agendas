import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DescriptionOneEvent from '../DescriptionOneEvent.js';

function PopupOneEvent(event) {
  return(
    <div class=" w-1/3 h-1/3">
    <Popup open={true} position="right center">
    <DescriptionOneEvent description={event.description} start={event.start}
                          end={event.end}  color={event.color}/>
    </Popup>
    </div>
  );
};

export default PopupOneEvent ;