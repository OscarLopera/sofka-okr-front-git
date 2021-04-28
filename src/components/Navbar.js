import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Bell from "./ModalBell";



function Navbar() {

    let state = {
        data: [
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3a',
            name: 'Notification Proyect',
            typeN: 'OKR',
            detail: '30',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect',
            typeN: 'OKR',
            detail: '70',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect',
            typeN: 'OKR',
            detail: '100 Or Finished',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3a',
            name: 'Notification Proyect',
            typeN: 'KR',
            detail: '30',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect',
            typeN: 'KR',
            detail: '70',
            viewed:'true'
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3b',
            name: 'Notification Proyect ',
            typeN: 'KR',
            detail: '100',
            viewed:'true'
          },
        ],
      };


    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className='nav-menu-header'>
                        <h1>Sofka y SofkaU</h1>

                        <ul>
                            <li><Bell state={state.data}/></li>
                            <li><Link to='/singin'>Sing In</Link></li>
                            <li><Link to='/'>Sing Out</Link></li>
                        </ul>
                    </div>
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar
