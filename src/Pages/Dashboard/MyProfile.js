import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    console.log(profile);
    return (
        <div>
            <h2>{user?.displayName}</h2>
            <h2>{user?.email}</h2>
        </div>
    );
};

export default MyProfile;