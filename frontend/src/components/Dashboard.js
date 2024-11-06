// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import authService from '../services/authService';
import axios from 'axios';

const Dashboard = () => {
    const [greeting, setGreeting] = useState('');
    const user = authService.getCurrentUser();

    useEffect(() => {
        if (user) {
            axios.get('http://localhost:8000/api/user-role/', {
                headers: { Authorization: `Bearer ${user.token}` }
            })
            .then(response => setGreeting(response.data.greeting))
            .catch(error => console.error("Authorization error", error.response?.data));
        }
    }, [user]);

    return (
        <div>
            {user ? (
                <h2>
                    Hello {user.username}, your role is {user.role}!
                </h2>
            ) : (
                <h2>Please log in</h2>
            )}
        </div>
    );
};

export default Dashboard;
