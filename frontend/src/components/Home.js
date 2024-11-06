// src/components/Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Home = () => {
    const navigate = useNavigate();
    const user = authService.getCurrentUser();

    const handleLogout = async () => {
        try {
            await authService.logout(); // Attempt to log out
            navigate('/'); // Redirect to login
        } catch (error) {
            console.error("Logout error", error); // Log the error for debugging
            alert("Logout failed. Please try again."); // Optionally show an alert to the user
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            {user ? (
                <>
                    <h2 className="text-3xl font-bold mb-4">
                        Welcome Back, {user.firstName} {user.lastName}!
                    </h2>
                    <p className="text-xl">Your Role: {user.role}</p>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <h2 className="text-xl">You are not logged in.</h2>
            )}
        </div>
    );
};

export default Home;
