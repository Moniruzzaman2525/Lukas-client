import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const AllUser = () => {
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('https://cryptic-retreat-62396.herokuapp.com/user', {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://cryptic-retreat-62396.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user => <UserRow refetch={refetch} user={user} key={user._id}></UserRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;