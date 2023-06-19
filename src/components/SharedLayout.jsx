import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const SharedLayout = () => {
    const homeIsLoading = useSelector(state => state.homeLoader.homeIsLoading)

    return (
        <>
            {homeIsLoading ? <></> : <Navbar />}
            <Outlet />
            {homeIsLoading ? <></> : <Footer />}
        </>
    )
}

export default SharedLayout