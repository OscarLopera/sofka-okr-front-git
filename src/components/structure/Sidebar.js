import React from 'react'
import "../../assets/styles/structure/Sidebar.css"
import SubMenu from './SubMenu'
import {SidebarData} from './SidebarData'
import {Link,useLocation} from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation();
    let buttonDifferent=false;
    console.log(buttonDifferent);
    location.pathname==="/myokrs"?buttonDifferent=true:buttonDifferent=false;
    return(
        <nav className="sidebar">  
        <div className="container-button-sidebar">  
              
        <Link  to={buttonDifferent?'/crearOkrs':'/myokrs'}>
        <button color='#F0950E' className="button-sidebar"            
            >{buttonDifferent? "Crear OKR": "Mis OKR"}</button> </Link>      
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