import React from 'react'
import './App.css'
import './assets/styles/planification/Planification.scss'
import './assets/styles/dashboard/Dashboard.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Support from './pages/Support'
import Calendar from './pages/calendar/Calendar'
import ConfigNotifications from './pages/confignotification/ConfigNotification'
import SingIn from './pages/SingIn'
import Okrs from './pages/Okrs'
import OkrCreate from './pages/OkrCreate'
import KrCreate from './pages/KrCreate'
import DashboardPersonal from './pages/DashboardPersonal';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={SingIn} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/calendar" component={Calendar} />
					<Route path="/support" component={Support} />
					<Route path="/configNotifications" component={ConfigNotifications} />
					<Route path="/krCreate" exact component={KrCreate} />
					<Route path="/mydashboard"  component={DashboardPersonal} />				
					<Route path="/myokrs"  component={Okrs} />				
					<Route path="/okrCreate"  component={OkrCreate} />	
				</Switch>
			</Router>
		</>
	)
}

export default App
