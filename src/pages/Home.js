import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation.js';

const Home = () => {

    return (
        <div>
            <Navigation />
            <div id="content" className ="mt-4" >
                <h1 className =" text-xl font-bold text-center text-blue-500">PAGE ACCUEIL</h1>
            </div>
        </div>
    );
};

export default Home;