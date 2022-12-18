import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DescriptionOneEvent from './DescriptionOneEvent.js';

function DescriptionAllEvents(events) {
    function create_each_events() {
        let items = []
        for (let idx in events.events) {
          items.push(<DescriptionOneEvent description={events.events[idx].description} start={events.events[idx].start}
                                      end={events.events[idx].end}  color={events.events[idx].color}/>)
        }
        return items
    }
  return(
    <div class=" w-full h-full overflow-y-auto">
    <div>
        DAY DAY.
    </div>
    {create_each_events()}
    </div>
  );
};

export default DescriptionAllEvents ;