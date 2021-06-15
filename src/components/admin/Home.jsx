import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

function App()
{	
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let a=["admin","faculty","student","courses","slots","batch"]
	return <div className="home">
		{a.map(x=>
			<div key={x} className="item">
				<i className="fa fa-dashboard fa-3x"></i>
				<h2>All {x}</h2>
				<h3>total {x} : {state[x].length}</h3>
				<br/>
				<Link to={"/admin/"+x}>View <i className="fa fa-eye"></i></Link>
			</div>
			
		)}
	</div>
}
export default App