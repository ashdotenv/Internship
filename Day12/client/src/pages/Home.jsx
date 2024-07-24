import React, { useContext, useState } from 'react'
import AuthContext from '../Context/Auth/AuthContext'
import axios from 'axios'

const Home = () => {
    const [blogs, setBlogs] = useState([])
    const [flag, setFlag] = useState(0)
    useState(() => {
        axios.get("http://localhost:5000/api/blogs/bulk").then(({ data }) => {
            setBlogs(data)
        })
    }, [])

    return (
        <>
            <div className='grid grid-cols-4 gap-4 mt-2' >
                {blogs.map((b, i) => (
                    <div key={i} className='border border-black p-4 rounded ' >
                        <img src={`http://localhost:5000/` + b.image} alt="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" />
                        {b.title} <br />
                        {b.content} <br />

                    </div>
                ))}
            </div>
        </>
    )
}

export default Home