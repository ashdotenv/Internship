import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Users = () => {
    const [userData, setUserData] = useState([]);
    const [flag, setFlag] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [editUser, setEditUser] = useState({ id: '', fullName: '', username: '', email: '', password: '' });

    useEffect(() => {
        const getUsers = () => {
            axios.get("http://localhost:5000/api/users/bulk").then(({ data }) => {
                setUserData(data);
            });
        };
        getUsers();
    }, [flag]);

    const handleDelete = (id) => {
        let prompt = confirm("Do you want to delete?");
        if (prompt) {
            axios.delete(`http://localhost:5000/api/delete/${id}`).then(({ data }) => {
                setFlag(flag + 1);
                toast.success("User Deleted Successfully");
            }).catch(err => {
                console.log(err);
            });
        }
    };

    const handleEditClick = (user) => {
        setEditUser({ ...user, password: '' });
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditUser({ ...editUser, [name]: value });
    };

    const handleEditSubmit = () => {
        axios.patch(`http://localhost:5000/api/update/${editUser.id}`, editUser).then(({ data }) => {
            setFlag(flag + 1);
            setShowModal(false);
            toast.success("User Updated Successfully");
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <>
            <ToastContainer />
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th>Id</th>
                            <th scope="col" className="px-6 py-3">FullName</th>
                            <th scope="col" className="px-6 py-3">UserName</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((u, i) => (
                            <tr key={i} className='text-black border border-black'>
                                <td>{u.id}</td>
                                <td>{u.fullName}</td>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
                                <td className='m-2'>
                                    <button onClick={() => handleDelete(u.id)} className='rounded-xl text-white p-2 bg-red-500 border-2 border-black'>Delete</button>
                                    <button onClick={() => handleEditClick(u)} className='rounded-xl text-white p-2 bg-sky-500 border-2 border-black'>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-2xl mb-4">Edit User</h2>
                        <label className="block mb-2">
                            First Name:
                            <input type="text" name="fullName" value={editUser.fullName} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" />
                        </label>
                        <label className="block mb-2">
                            Username:
                            <input type="text" name="username" value={editUser.username} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" />
                        </label>
                        <label className="block mb-2">
                            Email:
                            <input type="email" name="email" value={editUser.email} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" />
                        </label>
                        <label className="block mb-2">
                            Password:
                            <input type="password" name="password" value={editUser.password} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" />
                        </label>
                        <button onClick={handleEditSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Save</button>
                        <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2">Cancel</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Users;
