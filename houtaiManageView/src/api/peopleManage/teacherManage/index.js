import service from "../../index.js"
//添加教师信息
export function addTeacher(data){
  return service({
    url:"/peopleManage/addTeacher",
    method:"post",
    data:data
  })
}
//查询教师信息
export function findTeacher(data){
  return service({
    url:"/peopleManage/findTeacher",
    method:"post",
    data:data
  })
}
//删除教师信息
export function deleteTeacher(data){
  return service({
    url:"/peopleManage/deleteTeacher",
    method:"post",
    data:data
  })
}

//更新教师信息
export function updateTeacher(data){
  return service({
    url:"/peopleManage/updateTeacher",
    method:"post",
    data:data
  })
}

