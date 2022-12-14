import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation.js';
import { NavLink } from 'react-router-dom';

const SignUp = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const post_method = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'username': username, 'password': password })
        };
        fetch('http://localhost:8000/api/accounts/inscription', requestOptions)
        .map(response => response.json()).then(data => alert(data[0]))
    }

    return (
        <div>
            <Navigation />
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                            style={{ 'backgroundImage': "url('https://source.unsplash.com/oWTW-jNGl9I/600x800')" }}
                        ></div>
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <div className="px-8 mb-4 text-center">
                                <h3 className="pt-4 mb-2 text-2xl">INSCRIPTION</h3>
                                <p className="mb-4 text-sm text-gray-700">
                                    Formulaire d'inscription
                                </p>
                            </div>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                                onSubmit={(e) => { e.preventDefault(); post_method(); }}>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        value={username}
                                        type="email"
                                        placeholder="Enter Email Address..."
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="mdp">
                                        Mot de passe
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="mdp"
                                        value={password}
                                        type="password"
                                        placeholder="*****"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                        disabled = {username.length == 0 || password.length == 0}
                                    >
                                        CR??ER UN COMPTE
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <div className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                        <NavLink to="/sign_in" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                            Connectez-vous
                                        </NavLink>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;