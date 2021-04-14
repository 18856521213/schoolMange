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
//查找轮播图片
export function findSwiperImage(data){
    return service({
        url:"/basicConfiguration/findSwiperImage",
        method:"post",
        data:data,
    })
}
//删除轮播图片
export function deleteSwiperImage(data){
    return service({
        url:"/basicConfiguration/deleteSwiperImage",
        method:"post",
        data:data,
    })
}
