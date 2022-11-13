import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation.js';
import MonthlyCalendar from '../components/monthly_calendar.js';

const Home = () => {

    return (
        <div>
            <Navigation />
            <div id="content" className ="mt-4" >
                <h1 className =" text-xl font-bold text-center text-blue-500">PAGE ACCUEIL</h1>
            </div>
            <MonthlyCalendar />
        </div>
    );
};

export default Home;