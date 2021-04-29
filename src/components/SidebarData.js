import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as SiIcons from "react-icons/si";

export const SidebarData = [
    {
		title: 'My OKRs',
		path: '/okrs',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text',
	},
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text',
	},
	{
		title: 'Calendar',
		path: '/calendar',
		icon: <BsIcons.BsFillCalendarFill />,
		cName: 'nav-text',
	},
	{
		title: 'Support',
		path: '/support',
		icon: <GiIcons.GiHelp />,
		cName: 'nav-text',
	},
	{
		title: 'Notifications Settings',
		path: '/configNotifications',
		icon: <AiIcons.AiTwotoneNotification />,
		cName: 'nav-text',
	},

	{
		title: 'Messages',
		path: '/messages',
		icon: <SiIcons.SiGooglemessages />,
		cName: 'nav-text',
	},
]

