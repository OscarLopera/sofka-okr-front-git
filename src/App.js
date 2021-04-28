import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import Calendar from './pages/calendar/Calendar';
import Notifications from './pages/Notifications';
import SingIn from './pages/SingIn';
import DashboardPersonal from './pages/DashboardPersonal';
import MyOkrs from './pages/MyOkrs';
import CreateOkr from './pages/CreateOkr';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={SingIn} />	
					<Route path="/dashboard"  component={Dashboard} />				
					<Route path="/mydashboard"  component={DashboardPersonal} />				
					<Route path="/myokrs"  component={MyOkrs} />				
					<Route path="/createokr"  component={CreateOkr} />				
					<Route path="/calendar" component={Calendar} />
					<Route path="/support" component={Support} />
					<Route path="/notifications" component={Notifications} />					
				</Switch>
			</Router>
		</>
	)
}

export default App
