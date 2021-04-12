import service from "../../index.js"
//添加校园信息资讯
export function addScholarship(data){
  return service({
    url:"/newsManage/addScholarship",
    method:"post",
    data:data
  })
}
