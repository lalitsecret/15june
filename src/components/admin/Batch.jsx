import React from 'react'
import {_batch} from '../../utils'
import {useSelector,useDispatch} from 'react-redux'

function App()
{	
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let {faculty,student,courses,slots,batch,fid,sid,cid,slot_id,dt}=state	

	const del=(id) =>{
		let ob={fid,sid,cid,slot_id,dt}
		batch=batch.filter(x=>x.id!==id)
		dispatch({type:"batch",payload:batch})
		dispatch({type:"toaster.active",payload:"this batch deleted"})


	}
	const p1=(e,x) =>{
		dispatch({type:"sid",payload:x.name})
		dispatch({type:"cid",payload:x.cid})
	}
	const p2=(e,name) =>{
		e.preventDefault()
		dispatch({type:"slot_id",payload:name})
	}
	const p3=(e,name) =>{
		e.preventDefault()
		dispatch({type:"slot_id",payload:name})
		let ob={fid, sid, cid,slot_id, dt, p:0, reason:"batch created by admin", remarks:"mark your attendance", approved_by:"", enabled:true, id:batch.length+1, }
		if(_batch(batch,ob)===true)
		{
			
			batch=[...batch,ob]
			dispatch({type:"batch",payload:batch})
			dispatch({type:"toaster.active",payload:"new batch created"})
		}
		else
		{
			dispatch({type:"toaster.active",payload:"batch already exists"})
		}

	}
	const _fid=name=>{
		dispatch({type:"fid",payload:name})
	}



	return <div className="batch">
		<div className="item1">
			<h5>slots {slots.length}</h5>
			<div className="scroll">
				{slots.map(x=>
					<p
					key={x.name}
					onDragOver={e=>p2(e,x.name)}
					onDrop={e=>p3(e,x.name)}
					className={x.name===slot_id?'active':''}
					>{x.name}</p>
				)}
			</div>
		</div>
		<div className="item1">
			<h5>student {student.length}</h5>
			<div className="scroll">
				{student.map(x=>
					<p
					draggable={true}
					key={x.name}
					onDragStart={e=>p1(e,x)}
					className={x.name===sid?'active':''}
					>{x.name}</p>
				)}
			</div>
		</div>
		<div className="item1">
			<h5>faculty {faculty.length}</h5>
			<div className="scroll">
				{faculty.map(x=>
					<p
					key={x.name}
					onClick={e=>_fid(x.name)}
					className={x.name===fid?'active':''}
					>{x.name}</p>
				)}
			</div>
		</div>
		<div className="item1">
			<h5>courses {courses.length}</h5>
			<div className="scroll">
				{courses.map(x=>
					<p
					key={x.name}
					className={x.name===cid?'active':''}
					>{x.name}</p>
				)}
			</div>
		</div>
		<div className="item2">
			<h5>batch {batch.length}</h5>
			<input type="date" value={dt} min={dt} onChange={e=>dispatch({type:"dt",payload:e})}/>
			<div className="scroll">
				<table>
					<thead>
						<tr>
							<th>sno</th>
							<th>faculty</th>
							<th>student</th>
							<th>courses</th>
							<th>time</th>
							<th>date</th>
							<th>actions</th>
						</tr>
					</thead>
					<tbody>
						{batch.map(x=>
							<tr key={x.id}>
								<td>{x.id}</td>
								<td>{x.fid}</td>
								<td>{x.sid}</td>
								<td>{x.cid}</td>
								<td>{x.slot_id}</td>
								<td>{x.dt}</td>
								<td>
									<button onClick={e=>del(x.id)}><i className="fa fa-trash-o"></i></button>
								</td>
							</tr>
							
						)}
					</tbody>
				</table>
			</div>
		</div>
		
		
		
		

	</div>
}
export default App