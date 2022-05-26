import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
        toast.success('Sign Out Successfully')
    };
    // console.log(user);
    return (
        <div className="navbar bg-white z-50 sticky top-0 py-5 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu z-10 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {user && <li><Link className='text-success ' to="/dashboard">DASHBOARD</Link></li>}
                        <li><Link className='text-success cursor-pointer' to="/blog">BLOG</Link></li>
                        <li><Link className='text-success' to="/portfolio">PORTFOLIO</Link></li>
                        <li><Link className='text-success' to="/about">ABOUT</Link></li>
                        <li>{
                            user ? <button className='text-success' onClick={logout}>SIGN OUT</button> :
                                <Link className='text-success' to="/login" >
                                    Login
                                </Link>
                        }</li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-success normal-case text-2xl font-bold">.Lukas</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {user && <li><Link className='text-success font-bold' to="/dashboard">DASHBOARD</Link></li>}
                    <li><Link className='text-success font-bold' to="/blog">BLOG</Link></li>
                    <li><Link className='text-success font-bold' to="/portfolio">PORTFOLIO</Link></li>
                    <li><Link className='text-success font-bold' to="/about">ABOUT</Link></li>
                    <li>{
                        user ? <button className='text-success font-bold' onClick={logout}>SIGN OUT</button> :
                            <Link className='text-success font-bold' to="/login" >
                                Login
                            </Link>
                    }</li>
                </ul>
            </div>
            <div className="navbar-end pl-40 block md:hidden">
                <label htmlFor="side-bar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;