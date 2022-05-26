import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/userAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="side-bar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-3xl font-bold mb-10 '>Hey Welcome <span className='text-success'>{user.displayName}</span></h2>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="side-bar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard/">My Profile</Link></li>
                        {(!admin) && <li><Link to="/dashboard/myorder">My Order</Link></li>}
                        {!admin && <li><Link to="/dashboard/myreview">Add a Review</Link></li>}
                        {/* {<li><Link to="/dashboard/update">Update Profile</Link></li>} */}
                        {admin && <li><Link to="/dashboard/manage">All Order</Link></li>}
                        {
                            admin && <li><Link to="/dashboard/user">Make Admin</Link></li>
                        }
                        {
                            admin && <li><Link to="/dashboard/manageproduct">Manage All Products</Link></li>
                        }
                        {
                            admin && <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;