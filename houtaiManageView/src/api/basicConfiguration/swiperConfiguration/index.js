import service from "../../index.js"

//上传轮播图片
export function uploadSwiperImage(data){
    return service({
        url:"/upload/uploadSwiperImage",
        method:"post",
        data:data,
        headers:{ 'content-type': 'multipart/form-data' }
    })
}
