import service from "../../index.js"
//添加教师信息
export function addTeacher(data){
  return service({
    url:"/peopleManage/addTeacher",
    method:"post",
    data:data
})
}