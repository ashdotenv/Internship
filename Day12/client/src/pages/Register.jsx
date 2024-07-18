import React from 'react'

const Register = () => {
    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <form class="bg-white p-8 rounded-lg shadow-lg space-y-6 w-full max-w-md">
                <div>
                    <label for="username" class="block text-gray-700 font-semibold">Username</label>
                    <input name="username" type="text" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label for="email" class="block text-gray-700 font-semibold">Email</label>
                    <input name="email" type="text" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label for="password" class="block text-gray-700 font-semibold">Password</label>
                    <input name="password" type="password" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
            </form>
        </div>

    )
}

export default Register