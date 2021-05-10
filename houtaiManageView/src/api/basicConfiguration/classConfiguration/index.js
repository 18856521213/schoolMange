import service from "../../index.js"

//查找教师下拉值
export function findHandStudent(data){
    return service({
        url:"/basicConfiguration/findHandStudent",
        method:"post",
        data:data,
    })
}
//添加班级
export function addNewClass(data){
    return service({
        url:"/basicConfiguration/addNewClass",
        method:"post",
        data:data,
    })
}
//查找班级
export function findClass(data){
    return service({
        url:"/basicConfiguration/findClass",
        method:"post",
        data:data,
    })
}
//查找科目老师
export function findSubjectTeacher(data){
    return service({
        url:"/basicConfiguration/findSubjectTeacher",
        method:"post",
        data:data,
    })
}
