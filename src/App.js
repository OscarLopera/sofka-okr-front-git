import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Support from './pages/Support'
import Calendar from './pages/Calendar'
import Notifications from './pages/Notifications'
import SingIn from './pages/SingIn'
import Sidebar from './components/Sidebar'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Sidebar/>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/calendar" component={Calendar} />
					<Route path="/support" component={Support} />					
					<Route path="/notifications" component={Notifications} />	
				</Switch>
			</Router>	
					
		</>
	)
}

export default App
