import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { _id, email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully make an admin ${email}`)
                }
            })
    }


    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {
            const url = `http://localhost:5000/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    toast.success('Items Delate Successful')
                })

        }
    }


    return (
        <tr>
            <th>{user.email}</th>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">Make admin</button> : 'Already An Admin'}</td>
            <td>
                <button onClick={() => handleDelete(_id)} class="btn btn-xs">remove user</button>
            </td>
        </tr>
    );
};

export default UserRow;