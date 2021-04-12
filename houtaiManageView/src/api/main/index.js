import service from "../index.js"
//查找新闻资讯
export function findComplexInformation(data){
  return service({
    url:"/newsManage/findComplexInformation",
    method:"post",
    data:data
  })
}
//查找校园资讯
export function findSchoolInformation(data){
  return service({
    url:"/newsManage/findSchoolInformation",
    method:"post",
    data:data
  })
}

//查找校园信息资讯
export function findScholarship(data){
  return service({
    url:"/newsManage/findScholarship",
    method:"post",
    data:data
  })
}