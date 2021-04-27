import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Support from './pages/Support'
import Calendar from './pages/Calendar'
import Messages from './pages/Messages'
import Notifications from './pages/Notifications'
import ConfigNotifications from './pages/ConfigNotification'
import SingIn from './pages/SingIn'
import Okrs from './pages/Okrs'
import OkrCreate from './pages/OkrCreate'
import KrCreate from './pages/KrCreate'

import './assets/styles/planification/Planification.scss'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/okrs" exact component={Okrs} />
					<Route path="/okrCreate" exact component={OkrCreate} />
					<Route path="/krCreate" exact component={KrCreate} />
					<Route path="/calendar" component={Calendar} />
					<Route path="/support" component={Support} />
					<Route path="/messages" component={Messages} />
					<Route path="/notifications" component={Notifications} />
					<Route path="/configNotifications" component={ConfigNotifications} />
					<Route path="/singin" component={SingIn} />
				</Switch>
			</Router>
		</>
	)
}

export default App
