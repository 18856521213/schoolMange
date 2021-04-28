import service from "../../index.js"

//查找教师下拉值
export function findHandStudent(data){
    return service({
        url:"/basicConfiguration/findHandStudent",
        method:"post",
        data:data,
    })
}
//查找教师下拉值
export function addNewClass(data){
    return service({
        url:"/basicConfiguration/addNewClass",
        method:"post",
        data:data,
    })
}
