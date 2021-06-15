import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import Toaster from './Toaster'
import Admin from './admin/App'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
function App()
{
	return <div>
		<BrowserRouter>
			<Header/>
			<div className="container">
				<Switch>
					<Route exact path="/" component={Login}/>
					<Route exact path="/admin/:x" component={Admin}/>
				</Switch>
			</div>
			<Footer/>
			<Toaster/>
		</BrowserRouter>
	</div>
}
export default App