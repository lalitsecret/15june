import React from 'react'
import {_keys,_unique} from '../../utils'
import {useSelector,useDispatch} from 'react-redux'

function App()
{	
	let page="courses"
	let keys=["name","price","days"]
	let [ob1,setob1]=React.useState(_keys(keys,false))
	let [ob2,setob2]=React.useState(_keys(keys,true))



	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()
	let a=state[page]

	const insert=e=>{
		e.preventDefault()
		if(_unique(a,ob1,"name"))
		{
			a=[...a,{...ob1,id:a.length+1}]
			dispatch({type:page,payload:a})
			setob1(_keys(keys,false))
			dispatch({type:"toaster.active",payload:`new ${page} added`})
		}
	}
	const update=e=>{
		e.preventDefault()
		a=a.map(x=>x.id===ob2.id?ob2:x)
		dispatch({type:page,payload:a})
		setob2(_keys(keys,true))
		dispatch({type:"toaster.active",payload:`this ${page} udpates`})
	}
	const edit=x=>{
		setob2(x)
	}
	const del=id=>{
		a=a.filter(x=>x.id!==id)
		dispatch({type:page,payload:a})
		dispatch({type:"toaster.active",payload:`this ${page} deleted`})
	}
	
	
	return <div className="wrapper">
		<form onSubmit={insert}>
			<h3>new {page}</h3>
			{keys.map(x=>
				<input 
				placeholder={x}
				value={ob1[x]}
				onChange={e=>setob1({...ob1,[x]:e.target.value})}
				/>
			)}
			<button>insert</button>
		</form>
		{
			ob2.id>0
			&&
			<form onSubmit={update}>
				<h3>edit {page} {ob2.id}</h3>
				{keys.map(x=>
					<input 
					placeholder={x}
					value={ob2[x]}
					onChange={e=>setob2({...ob2,[x]:e.target.value})}
					/>
				)}
				<button>update</button>
			</form>
		}
		
		<h1>All {page} {a.length}</h1>
		<table>
			<thead>
				<tr>
					<th>id</th>
					{keys.map(x=>
						<th>{x}</th>
					)}
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				{a.map(x=>
					<tr>
						<td>{x.id}</td>
						{keys.map(y=>
							<td>{x[y]}</td>	
						)}
						<td>
							<button onClick={e=>edit(x)}><i className="fa fa-pencil"></i></button>
							<button onClick={e=>del(x.id)}><i className="fa fa-trash-o"></i></button>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	</div>
}
export default App

