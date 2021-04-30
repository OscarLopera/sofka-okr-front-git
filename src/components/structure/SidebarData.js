import React from 'react'
import { MdDashboard, MdSettings } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { BiSupport } from "react-icons/bi"
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import User from "./User";

export const SidebarData = [
  {
    title: 'Dashboard',
    id:'dashboard-father',
    icon: <GoGraph />,    
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: <User/>,
        path: '/dashboard',
        icon: <MdDashboard />
      }
    ]
  },
  {
    title: 'Calendario',
    id:'calendar',
    path: '/calendar',
    icon: <BsIcons.BsFillCalendarFill />,
    cName: 'nav-text'
  },
  {
    title: 'Administración',
    id:'admin-father',
    icon: <MdSettings />,    
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Configuración de notificaciones',
        id:'admin-notifications',
        path: '/configNotifications',
        icon: <RiIcons.RiMailSettingsFill />
      },
      {
        title: 'Soporte',
        id:'admin-support',
        path: '/support',
        icon: <BiSupport />
      }
    ]
  }
];
