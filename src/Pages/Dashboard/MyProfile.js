import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        fetch(`https://cryptic-retreat-62396.herokuapp.com/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    console.log(profile);
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div className='mr-20'>
                    <img src={profile.image ? profile.image : 'data:image/png;base64,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'} class="max-w-sm rounded-lg shadow-2xl" />
                    {/* <h1>{profile.email ? profile.email : 'hello'}</h1> */}
                </div>
                <div>
                    <h1 class="text-5xl font-bold">{user?.displayName}</h1>
                    <p class="py-6">{user?.email}</p>
                    <p class="py-6">{profile.phone}</p>
                    <p class="py-6">{profile.education}</p>
                    <Link to="/dashboard/update"><button class="btn btn-primary">Update Profile</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;