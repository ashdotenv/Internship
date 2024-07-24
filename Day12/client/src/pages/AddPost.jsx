import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
    const [formData, setFormData] = useState({ title: "", content: "" });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('content', formData.content);
        if (file) {
            data.append('image', file);
        }

        try {
            axios.defaults.withCredentials = true
            const response = await axios.post('http://localhost:5000/api/add', data, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                console.log('Post added successfully');
                // Handle success
            } else {
                console.error('Failed to add post');
                // Handle error
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-lg w-96'>
                <h2 className='text-2xl font-bold mb-4 text-center'>Add New Post</h2>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Title</label>
                    <input
                        className='w-full p-2 border border-gray-300 rounded mt-2'
                        name='title'
                        type='text'
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Content</label>
                    <textarea
                        className='w-full p-2 border border-gray-300 rounded mt-2'
                        name='content'
                        value={formData.content}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Image</label>
                    <input
                        className='w-full p-2 border border-gray-300 rounded mt-2'
                        type='file'
                        name='image'
                        onChange={handleFileChange}
                    />
                </div>
                <button
                    className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200'
                    type='submit'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddPost;
