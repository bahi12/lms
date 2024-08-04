// Profile.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/actions';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Profile</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* Add other user information here */}
        </div>
    );
};

export default Profile;
