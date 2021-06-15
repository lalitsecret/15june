import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

function App()
{	
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {role,user,loggedin}=state

	let a=["home","admin","faculty","student","courses","slots","batch","attendance","chart","graph","planner"]
	if(loggedin)
	{
		return <header>
			<div>
				{role} panel
			</div>
			<div>
				{a.map(x=>
					<Link to={`/${role}/${x}`}>{x}</Link>
				)}
			</div>
			<div>
				<Link to="/">Logout {user.name}</Link>
			</div>
		</header>
	}
	else
	{
		return <header>
			<div>LMS Panel</div>
			<div>Login to continue</div>
		</header>
	}
}
export default App