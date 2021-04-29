import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/styles/structure/Sidebar.css";

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
        <Link className="sidebarLink" id="sidebarLink" to={item.path} onClick={item.subNav && showSubnav}>
          <div>
            {item.icon}
            <span className="label-sidebar" id="label-sidebar" >{item.title}</span>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </Link>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <Link className="DropdownLink-sidebar" id="DropdownLink-sidebar" to={item.path} key={index}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            );
          })}
      </>
    );
  };
  
  export default SubMenu;