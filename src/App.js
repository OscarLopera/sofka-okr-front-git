import React, {Fragment} from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route as DefaultRoute,history} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import DashboardPersonal from './pages/DashboardPersonal'
import Support from './pages/Support'
import Calendar from './pages/Calendar'
import Notifications from './pages/Notifications'
import SingIn from './pages/SingIn'
import MainLayout from './components/structure/MainLayout'
import Navbar from './components/structure/Navbar'


const DefaultLayout = ({ children }) => (
	<Fragment>	  
	  {children}
	</Fragment>
  )

const Route = ({
	component: Component,
	layout: Layout = DefaultLayout,
	...rest
  }) => {
	return (
	  <DefaultRoute
		{...rest}
		render={props => (
		  <Layout>
			<Component {...props} />
		  </Layout>
		)}
	  />
	)
  }

function App() {
	return (
		<>
			<Router> 						
				<Switch>				
					<Route path="/" exact component={SingIn} />							
					<Route path="/dashboard" layout={MainLayout} component={Dashboard} />	
					<Route path="/mydashboard" layout={MainLayout} component={DashboardPersonal} />
					<Route path="/calendar" layout={MainLayout} component={Calendar} />
					<Route path="/support" layout={MainLayout} component={Support} />
					<Route path="/notifications" layout={MainLayout} component={Notifications} />
				   			
				</Switch>
			</Router>
		</>
	)
}

export default App
