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
            <div class="drawer drawer-mobile">
                <input id="side-bar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-3xl font-bold text-purple-500'>Welcome To Your Dashboard</h2>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="side-bar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard/">My Profile</Link></li>
                        {(!admin) && <li><Link to="/dashboard/myorder">My Order</Link></li>}
                        {/* {!admin && <li><Link to="/dashboard/myreview">Add a Review</Link></li>} */}
                        {<li><Link to="/dashboard/update">Update Profile</Link></li>}
                        {admin && <li><Link to="/dashboard/manage">All Order</Link></li>}
                        {
                            admin && <li><Link to="/dashboard/user">All User</Link></li>
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