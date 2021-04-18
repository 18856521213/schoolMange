const BASE_URL = "http://127.0.0.1:3001"
const request = (data) =>{
	return new Promise((resolve,reject) =>{
		uni.request({
			url: `${BASE_URL}${data.url}`, //仅为示例，并非真实接口地址。
			data:data.data,
			method:data.method || "POST",
			header:data.header || {'Content-Type': 'application/json'},
			success: (res) => {
				resolve(res);
			},
			fail:(err)=>{
				reject(err);
			}
		});
	}) 
}
export default request;