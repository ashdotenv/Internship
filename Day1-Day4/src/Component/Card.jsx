import React from 'react'

const Card = ({ title, author }) => {
    return (
        <div style={{  gap: "20px", marginBottom: "20px", border: "2px solid white", padding: "20px", borderRadius: "20px", display: 'flex' }}>
            <h1>{title}
                <br /> <br /> <br />
                @{author}
            </h1>
            <br /> <img style={{ height: "200px" }} src="blog.png" alt="" />
        </div>
    )
}

export default Card