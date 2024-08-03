import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/actions';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()); // Call your logout action
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            navigate('/login');
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    React.useEffect(() => {
        handleLogout();
    }, []);

    return <div>Logging out...</div>;
};

export default Logout;
