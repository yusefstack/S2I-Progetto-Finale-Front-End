import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const SharedLayout = () => {
    const location = useLocation()

    return (
        <>
            {location.pathname !== "/experience" && <Navbar key={uuidv4()}/>}
            <Outlet />
            {location.pathname !== "/experience" && <Footer key={uuidv4()} />}
        </>
    )
}

export default SharedLayout