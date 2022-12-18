import React from 'react';
import 'reactjs-popup/dist/index.css';

function DescriptionOneEvent(event) {
    function hours() {
        let items = []
        for (let i = 0; i < 24; i++) {
          items.push(<option value={i}>{i}</option>)
        }
        return items
    }
    function minutes() {
        let items = []
        for (let i = 0; i < 60; i+=15) {
            items.push(<option value={i}>{i}</option>)
        }
        return items
    }

    function update(){
        let start_hours = parseInt(document.getElementById('start_hours').value);
        let end_hours = parseInt(document.getElementById('end_hours').value);
        let start_minutes =parseInt(document.getElementById('start_minutes').value);
        let end_minutes =parseInt(document.getElementById('end_minutes').value);
        
        if ( start_hours > end_hours ){
            document.getElementById('end_hours').value = start_hours;
            end_hours = parseInt(document.getElementById('end_hours').value);
        }
        if((start_hours == end_hours ) && ( start_minutes > end_minutes)){
            document.getElementById('end_minutes').value = start_minutes;
        }
    }
    
  return(
    <div>
        <h1 class="text-center"> lundi 24 {event.date}</h1>
        <div class="grid grid-cols-2 gap-4">
        <div id="times" >
            <label for="start">start</label>
            <div class="mt-2 p-5 w-24 bg-white rounded-lg shadow-xl">
                <div id="start" class="flex">
                    <select id="start_hours" onChange={update} name="hours" defaultValue={event.start.hours} class="bg-transparent text-xl appearance-none outline-none">
                        {hours()}
                    </select>
                    <span class="text-xl mr-3">:</span>
                    <select id="start_minutes" onChange={update} name="minutes" defaultValue={event.start.minutes} class="bg-transparent text-xl appearance-none outline-none mr-4">
                    {minutes()}
                    </select>
                </div>
            </div>

            <label for="end">end</label>
            <div class="mt-2 p-5 w-24 bg-white rounded-lg shadow-xl">
                <div id="end" class="flex">
                    <select id="end_hours" onChange={update} name="hours" defaultValue={event.end.hours} class="bg-transparent text-xl appearance-none outline-none">
                        {hours()}
                    </select>
                    <span class="text-xl mr-3">:</span>
                    <select id="end_minutes" onChange={update} name="minutes" defaultValue={event.end.minutes} class="bg-transparent text-xl appearance-none outline-none mr-4">
                    {minutes()}
                    </select>
                </div>
            </div>
        </div>

        <div id="description" class="w-full content-center center">
        <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="description" defaultValue={event.description}></input>
        </div>
    </div>
    </div>
  );
};

export default DescriptionOneEvent ;