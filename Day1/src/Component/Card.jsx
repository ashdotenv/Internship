import React from 'react'

const Card = ({ title, author }) => {
    return (
        <div style={{ textAlign: "left", gap: "20px", marginBottom: "20px", border: "2px solid white", padding: "20px", borderRadius: "20px", display: 'flex' }}>
            {title} <br /> <br /> <br />
            @{author}
            <br /> <img style={{ height: "200px" }} src="blog.png" alt="" />
        </div>
    )
}

export default Card