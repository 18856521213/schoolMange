import request from "../index.js";
export function getStudentList(data){
	 return request({
		url:"admin/findStudent",
		data:data
	})
}