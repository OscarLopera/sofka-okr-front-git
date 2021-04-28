import React, {Fragment} from 'react'
import Navbar from '../structure/Navbar'
import Sidebar from '../structure/Sidebar'

export default function MainLayout({ children }) {
    return (
        <Fragment>
            <Navbar/>
            <Sidebar/>
            {children}
        </Fragment>
    )
}