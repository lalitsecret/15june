import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

function App()
{	
	let [ob,setob]=React.useState({email:"",password:""})
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	const handleChange=e=>{
		let {placeholder,value}=e.target
		setob({...ob,[placeholder]:value})
	}

	const handleSubmit=e=>{
		let {name}=e.taregt

		let role=name
		let users=state[name]
		
	}
	
	return <div className="login">
		<h1>Login | LMS</h1>
		<p>email</p>
		<div className="form-flex">
			<input onChange={handleChange} placeholder="email" value={ob.email}/>
			<i className="fa fa-envelope"></i>
		</div>
		<p>password</p>
		<div className="form-flex">
			<input onChange={handleChange} placeholder="password" value={ob.password}/>
			<i className="fa fa-lock"></i>
		</div>
		<button onClick={handleSubmit} name="admin">admin <i className="fa fa-users"></i></button>
		<button onClick={handleSubmit} name="faculty">faculty <i className="fa fa-users"></i></button>
		<button onClick={handleSubmit} name="student">student <i className="fa fa-users"></i></button>
	</div>
}
export default App