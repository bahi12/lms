import React from 'react';
import axios from 'axios';

const Logout = () => {
    const handleLogout = async () => {
        try {
            // Make a POST request to the logout endpoint
            await axios.post('/api/logout/');

            // Clear the JWT token from local storage or session storage
            localStorage.removeItem('access_token');
            sessionStorage.removeItem('access_token');

            // Redirect the user to the login page or any other desired page
            window.location.href = '/login';
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default Logout;