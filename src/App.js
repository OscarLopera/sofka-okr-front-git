import React from 'react';
import './App.css';
import './assets/styles/planification/Planification.scss';
import './assets/styles/dashboard/Dashboard.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Support from './pages/administration/Support';
import Calendar from './pages/calendar/Calendar';
import Schedule from './pages/calendar/Schedule';
import ConfigNotifications from './pages/confignotification/ConfigNotification';
import SingIn from './pages/administration/SingIn';
import Okrs from './pages/planification/Okrs';
import CrearOKR from './pages/planification/CrearOKR';
import CrearKR from './pages/planification/CrearKR';
import { Profile } from './components/structure/Profile';
import faq from '../src/pages/administration/Faq';


function App() {
	return (
		<>		
			<Router>
				<Switch>
					<Route path="/" exact component={SingIn} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/calendar" component={Calendar} />
					<Route path="/schedule" component={Schedule} />
					<Route path="/support" component={Support} />
					<Route path="/configNotifications" component={ConfigNotifications} />
					<Route path="/krCreate" exact component={CrearKR} />
					<Route path="/myokrs" component={Okrs} />
					<Route path="/okrCreate" component={CrearOKR} />
					<Route path="/profile" component={Profile} />
					<Route path="/faq" component={faq} />
				</Switch>
			</Router>
		</>
	)
}

export default App
