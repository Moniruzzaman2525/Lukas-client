import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/userAdmin';
import Loading from '../../Shared/Loading';
import { toast } from 'react-toastify';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, load] = useAdmin(user);
    const location = useLocation();
    if (loading || load) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        toast.error('You Are not an admin')
        signOut(auth);
        return <Navigate to="/" state={{ from: location }} replace></Navigate>

    }
    return children;
};

export default RequireAdmin;