// src/components/Landing.js

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to Hitech CRM</h1>
            <div>
                <Link to="/register" className="bg-blue-500 text-white p-2 rounded mr-4 hover:bg-blue-600 transition">
                    Register
                </Link>
                <Link to="/login" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Landing;
