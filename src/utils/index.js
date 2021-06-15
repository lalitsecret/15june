export function _date()
{

	let y=new Date().getFullYear()
	let m=new Date().getMonth()+1
	let d=new Date().getDate()
	m=m.toString().length===2?m:`0${m}`
	d=d.toString().length===2?d:`0${d}`
	return `${y}-${m}-${d}`
}

export function _keys(a,status=false)
{
	let ob={}
	for(let item of a)
	{
		ob[item]=""
	}
	if(status)
	{
		return {...ob,id:0}
	}
	else
	{
		return ob
	}
}

export function _unique(a,ob,key)
{
	return a.some(x=>x[key]===ob[key])===false
}
export function _batch(batch,ob)
{
	return batch.some(x=>x.fid===ob.fid &&x.sid===ob.sid &&x.cid===ob.cid &&x.dt===ob.dt &&x.slot_id===ob.slot_id)===false
}

export function _cal()
{
	let date=_date().split("-")
	let [y,m,d]=date
	let newDate=new Date(y,m,0).getDate()

	let a=new Array(newDate).fill(0).map((item,index) => index+1)
	return a

}

export function _batch_from_this_date(a,dt)
{
	return a.filter(x=>+x.dt.split("-").slice(1)[0]===+dt.split("-").slice(1)[0])
}
export function _existsBatch(a,day) {
	return a.some(x=>+x.dt.split("-").slice(-1)[0]===+day)
}