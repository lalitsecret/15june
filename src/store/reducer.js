import data from './data'
import {_date} from '../utils'
const intialState={
	admin:data.admin,
	faculty:data.faculty,
	student:data.student,
	courses:data.courses,
	slots:data.slots,
	batch:data.batch,
	fid:"",
	sid:"",
	cid:"",
	slot_id:"",
	dt:_date(),
	user:{id:1,name:"lalit"},
	role:"admin",
	loggedin:true
}
function reducer(state=intialState,action)
{
	switch(action.type)
	{
		case "toaster.active":return {...state,toaster:action.payload}
		case "admin":return {...state,admin:action.payload}
		case "faculty":return {...state,faculty:action.payload}
		case "student":return {...state,student:action.payload}
		case "courses":return {...state,courses:action.payload}
		case "slots":return {...state,slots:action.payload}
		case "batch":return {...state,batch:action.payload}
		case "fid":return {...state,fid:action.payload}
		case "sid":return {...state,sid:action.payload}
		case "cid":return {...state,cid:action.payload}
		case "slot_id":return {...state,slot_id:action.payload}
		case "dt":return {...state,dt:action.payload.target.value}
		case "login":return {...state,user:action.user,role:action.role,loggedin:true}
		case "logout":return {...state,user:{},role:"".role,loggedin:false}
		default:
			return state
	}
}

export default reducer