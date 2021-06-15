import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

function App()
{	
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	
	return <div></div>
}
export default App