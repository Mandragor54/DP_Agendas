import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import './calendar/MonthlyCalendar.js';
import EventBox from './EventBox.js';

function Day(props) {

 function hours() {
  let items = [];
  for (let i = 0; i < 24; i++) {
    items.push(<div class="h-40 border-t border-black">{i} h</div>);
  }
  return items
}
function addEvent(event,percent,margin_left){
  const h = (parseInt(event.end.hours)-parseInt(event.start.hours))*10 + (parseInt(event.end.minutes)-parseInt(event.start.minutes))/15*2.5;
  const offset = parseInt(event.start.hours)*10+ parseInt(event.start.minutes)/15*2.5;
  return <div class="absolute" style={{height: h+'rem',width: percent+'%', 'margin-top': offset+'rem','margin-left': margin_left+'%'}}><EventBox description={event.description} start={event.start} end={event.end} color="red"/></div>
  
}

function concur(eventA,eventB){
  //((parseInt(eventA.end.hours)*60+parseInt(eventA.end.minutes)<parseInt(eventB.start.hours)*60+parseInt(eventB.start.minutes)) || (parseInt(eventB.end.hours)*60+parseInt(eventB.end.minutes)-parseInt(eventA.start.hours)*60+parseInt(eventA.start.minutes)))
  return true
}

function addEvents(events){
  let items = [];
  for (let indice in events.events) {
      items.push( addEvent(events.events[indice],100));
  }
  return <div>{items}</div>;
}

return (
 
 <div class="flex">
  <div class="absolute z-0 w-48">
  {hours()}
  </div>
  <div id="events" class='absolute w-40 opacity-80 ml-8'>
    {addEvents({events:[{description:"partiel math", start:{hours:'1',minutes:'15'},end:{hours:'2',minutes:'15'}},{description:"partiel info",start:{hours:'1',minutes:'15'},end:{hours:'5',minutes:'15'}}]})}
  </div>
 </div>
  );
};

export default Day;