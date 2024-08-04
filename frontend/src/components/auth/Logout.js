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
            localStorage.removeItem('auth_token');
            setTimeout(() => {
                navigate('/login');
            }, 1500); // 3 seconds delay
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    React.useEffect(() => {
        handleLogout();
    }, [handleLogout]);

    return <div>Logging out...</div>;
};

export default Logout;
