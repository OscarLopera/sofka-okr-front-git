import React from 'react'
import {useLocation } from 'react-router-dom'

const Route = () => {
    const location = useLocation();
    return <>location.pathname</>
    
}

export default Route