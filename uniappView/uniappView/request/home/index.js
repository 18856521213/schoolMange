import request from "../index.js";
export function getSwiperList(data){
	 return request({
		url:"/basicConfiguration/findSwiperImage",
		data:data
	})
}