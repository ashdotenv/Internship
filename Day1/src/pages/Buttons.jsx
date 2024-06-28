import React from 'react'
import Button from '../Component/Button'
import Heading from '../Component/Heading'

const Buttons = () => {
    return (
        <div className='flex h-screen justify center *:text-black  items-start'>
            <Button Label={"Login"} />
            <Button Label={"Register"} />
            <Button Label={"Logout"} />
        </div>
    )
}

export default Buttons