import service from "../../index.js"

//上传导航栏图片
export function uploadTabarImage(data){
    return service({
        url:"/upload/uploadTabarImage",
        method:"post",
        data:data,
        headers:{ 'content-type': 'multipart/form-data' }
    })
}

//查询导航栏图片
export function findTabarImage(data){
    return service({
        url:"/basicConfiguration/findTabarImage",
        method:"post",
        data:data,
    })
}

//删除导航栏图片
export function deleteTabarImage(data){
    return service({
        url:"/basicConfiguration/deleteTabarImage",
        method:"post",
        data:data,
    })
}

