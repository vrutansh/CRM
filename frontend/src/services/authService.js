// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const register = (username, firstName, lastName, email, password, confirmPassword, role) => {
    return axios.post(`${API_URL}register/`, {
        username,
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        confirm_password: confirmPassword,
        role
    });
};

const login = (username, password) => {
    return axios.post(`${API_URL}login/`, { username, password })
        .then(response => {
            if (response.data.token) {
                const { user, token } = response.data; // Destructure user and token
                const userData = {
                    username: user.username,
                    firstName: user.first_name, // Store first name
                    lastName: user.last_name,   // Store last name
                    role: user.role,            // Store role
                    token                       // Store the token
                };
                localStorage.setItem('user', JSON.stringify(userData));
            }
            return response.data;
        })
        .catch(error => {
            console.error("Login error", error.response?.data);
            throw error; // Re-throw error for further handling
        });
};

const logout = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        try {
            await axios.post(`${API_URL}logout/`, {}, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            localStorage.removeItem('user'); // Clear user data after successful logout
        } catch (error) {
            console.error("Error during logout:", error.response?.data);
            throw error; // Re-throw error for further handling
        }
    } else {
        console.warn("No user is logged in or token is missing.");
    }
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

// Assign the functions to an object and export it as a named object
const authService = {
    register,
    login,
    logout,
    getCurrentUser
};

export default authService;
