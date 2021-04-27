import React from 'react'
import "./Sidebar.css";
import SubMenu from './SubMenu'
import {SidebarData} from './SidebarData'

const Sidebar = () => {
    return(
        <nav className="sidebar">  
        <div className="container-button-sidebar">
        <button color='#F0950E' className="button-sidebar"
            component="a"
            href="#"
            >Mis OKR</button> 
        </div>  
        <div>
        {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}   
        </div>     
        </nav>       
    )

}

export default Sidebar