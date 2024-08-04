import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess, userLoadedSuccess } from '../../redux/actions';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/auth/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, re_password, email }),
            });

            if (response.ok) {
                setMessage('Registration successful');
                const loginResponse = await axios.post('http://localhost:8000/api/auth/token/login/', { username, password });
                const { auth_token } = loginResponse.data;
                dispatch(loginSuccess(auth_token));

                // Load the user data after login
                const userResponse = await axios.get('http://localhost:8000/api/auth/user/', {
                    headers: {
                        Authorization: `Token ${auth_token}`
                    }
                });
                dispatch(userLoadedSuccess(userResponse.data));
                navigate('/me/');
            } else {
                const data = await response.json();
                setMessage(data[Object.keys(data)[0]][0]); // Show the first error message
            }
        } catch (error) {
            console.error('An error occurred during registration', error);
            setMessage('An error occurred during registration');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {message && <p>{message}</p>}
            <form>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        value={re_password}
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
