import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        const getUsers = () => {
            axios.get("http://localhost:5000/api/users/bulk").then(({ data }) => {
                setUserData(data)
                console.log(userData);
            })
        }
        getUsers()
    }, [])
    return (
        <>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th>Id </th>
                            <th scope="col" class="px-6 py-3">
                                FullName
                            </th>
                            <th scope="col" class="px-6 py-3">
                                UserName
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((u, i) => (
                            <>
                                <tr className='*:text-black border border-black'>
                                    <td>
                                        {u.id}
                                    </td>
                                    <td >
                                        {u.fullName}
                                    </td>
                                    <td>
                                        {u.username}
                                    </td>
                                    <td>
                                        {u.email}
                                    </td>

                                    <div className='*:m-2'>
                                        <button className='rounded-xl text-white p-2 bg-red-500 border-2 border-black '>Delete</button>
                                        <button className='rounded-xl text-white p-2 bg-sky-500  border-2 border-black '>Edit</button>
                                    </div>
                                </tr>
                            </>

                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Users