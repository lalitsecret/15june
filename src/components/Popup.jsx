import React from 'react'
function App(props)
{	
	let {a}=props
	return <div className={a.length>0?"popup active":"popup"}>
		<div className="inner">
			<button onClick={props.onClose} className="close">&times;</button>
			<h1>Modal</h1>
			<table>
				<thead>
					<tr>
						<th>sno</th>
						<th>faculty</th>
						<th>student</th>
						<th>courses</th>
						<th>time</th>
						<th>date</th>
					</tr>
				</thead>
				<tbody>
					{a.map(x=>
						<tr key={x.id}>
							<td>{x.id}</td>
							<td>{x.fid}</td>
							<td>{x.sid}</td>
							<td>{x.cid}</td>
							<td>{x.slot_id}</td>
							<td>{x.dt}</td>
						</tr>
						
					)}
				</tbody>
			</table>
		</div>
	</div>
}
export default App