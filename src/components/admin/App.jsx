import React from 'react'
import {Switch,Route} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Home from './Home';
import Admin from './Admin';
import Faculty from './Faculty';
import Student from './Student';
import Courses from './Courses';
import Slots from './Slots';
import Batch from './Batch';
import Chart from './Chart';
import Graph from './Graph';
import Attendance from './Attendance';
import Planner from './Planner';

function App()
{	
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	
	return <Switch>
		<Route exact path="/admin/Home" component={Home} />
		<Route exact path="/admin/Admin" component={Admin} />
		<Route exact path="/admin/Faculty" component={Faculty} />
		<Route exact path="/admin/Student" component={Student} />
		<Route exact path="/admin/Courses" component={Courses} />
		<Route exact path="/admin/Slots" component={Slots} />
		<Route exact path="/admin/Batch" component={Batch} />
		<Route exact path="/admin/Chart" component={Chart} />
		<Route exact path="/admin/Graph" component={Graph} />
		<Route exact path="/admin/Attendance" component={Attendance} />
		<Route exact path="/admin/Planner" component={Planner} />
	</Switch>
}
export default App