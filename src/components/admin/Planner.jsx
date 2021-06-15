import React from 'react'
import {_cal,_batch_from_this_date,_existsBatch} from '../../utils'
import {useSelector,useDispatch} from 'react-redux'
import Popup from '../Popup'
function App()
{	
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let a=_cal()
	let {batch,dt}=state
	batch=_batch_from_this_date(batch,dt)

	let [popup,setpopup]=React.useState([])

	const modal=num =>{
		// date=2021-06-15
		// 15
		// 
		batch=batch.filter(x=>+x.dt.split("-").slice(-1)[0]===+num)

		setpopup(batch)
	}

	return <div>
		<div className="cal">
				{a.map(x=>
					<div className={_existsBatch(batch,x)?"item active":"item"}>
						{x}
						{"  "}
						{_existsBatch(batch,x)?<i onClick={ () => modal(x) } className="fa fa-eye"></i>:null}
					</div>
				)}
			</div>
		<Popup onClose={e=>setpopup([])} a={popup}/>	
	</div>
}
export default App




