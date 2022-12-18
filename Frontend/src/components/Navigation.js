import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="shadow-lg font-bold z-40 flex h-16 w-full items-center  place-content-evenly">
            <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
                <NavLink to="/sign_up" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <p> CONNEXION</p>
                </NavLink>
            </div>
            |
            <div className="transform skew-y-3 bg-blue-500 inline-block">
                <div className="m-2 transform -skew-y-3 text-2xl font-semibold">
                    <NavLink to="/sign_in" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <p> INSCRIPTION </p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;