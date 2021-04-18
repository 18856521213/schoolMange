import request from "../index.js";
export function getStudentList(data){
	 return request({
		url:"/basicConfiguration/findSwiperImage",
		data:data
	})
}