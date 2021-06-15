import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

function App()
{	
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {toaster}=state

	const abc=() =>{
		dispatch({type:"toaster.active",payload:""})
	}

	React.useEffect(function(){
		setTimeout(abc,500)
	},[toaster])

	return <div className={toaster?"toaster active":"toaster"}>
		{toaster?toaster:"server successfully completed action"}
	</div>
}
export default App