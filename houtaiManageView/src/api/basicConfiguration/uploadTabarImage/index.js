import service from "../../index.js"

//上传轮播图片
export function uploadTabarImage(data){
    return service({
        url:"/upload/uploadTabarImage",
        method:"post",
        data:data,
        headers:{ 'content-type': 'multipart/form-data' }
    })
}