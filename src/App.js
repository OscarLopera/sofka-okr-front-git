import React from 'react';
import './App.css';
import './assets/styles/planification/Planification.scss';
import './assets/styles/dashboard/Dashboard.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardPersonal from './pages/dashboard/DashboardPersonal';
import Dashboard from './pages/dashboard/Dashboard';
import Support from './pages/administration/Support';
import Calendar from './pages/calendar/Calendar';
import ConfigNotifications from './pages/confignotification/ConfigNotification';
import SingIn from './pages/administration/SingIn';
import Okrs from './pages/planification/Okrs';
import OkrCreate from './pages/planification/OkrCreate';
import KrCreate from './pages/planification/KrCreate';
import faq from '../src/pages/administration/Faq';

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
					<Route path="/mydashboard" component={DashboardPersonal} />
					<Route path="/myokrs" component={Okrs} />
					<Route path="/okrCreate" component={OkrCreate} />
					<Route path="/faq" component={faq} />
				</Switch>
			</Router>
		</>
	)
}

export default App
