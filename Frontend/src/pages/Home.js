import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation.js';
import MonthlyCalendar from '../components/calendar/MonthlyCalendar.js';
import EventBox from '../components/EventBox.js';
import PopupOneEvent from '../components/popup/PopupOneEvent.js';
import PopupAllEvents from '../components/popup/PopupAllEvent.js';
import Day from '../components/DayBox.js';

const Home = () => {
    return (
        <div>
            <Navigation />
            <div id="content" className ="mt-4" >
                <h1 className =" text-xl font-bold text-center text-blue-500">PAGE ACCUEIL</h1>
                <PopupAllEvents events={[{description:"partiel de géo", start:{hours:'10',minutes:'15'},end:{hours:'12',minutes:'15'}},
                {description:"partiel de d'histoire", start:{hours:'15',minutes:'15'},end:{hours:'16',minutes:'15'}}]}/>
                <Day />
            </div>
        </div>
    );
};
export default Home;