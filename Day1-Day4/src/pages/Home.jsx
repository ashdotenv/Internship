import React from 'react'
import Card from '../Component/Card'

const Home = () => {
  return (
    <div className='grid grid-cols-2 '>
      <Card author={"Ashish"} title={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut impedit dolore optio tempora, repellendus vero error iusto quasi sapiente voluptates.`} />
      <Card author={"Ash"} title={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut impedit dolore optio tempora, repellendus vero error iusto quasi sapiente voluptates.`} />
      <Card author={"Ash"} title={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut impedit dolore optio tempora, repellendus vero error iusto quasi sapiente voluptates.`} />
      <Card author={"Ash"} title={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut impedit dolore optio tempora, repellendus vero error iusto quasi sapiente voluptates.`} />
      <Card author={"Ash"} title={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut impedit dolore optio tempora, repellendus vero error iusto quasi sapiente voluptates.`} />
    </div>
  )
}

export default Home