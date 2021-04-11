import service from "../../index.js"
//添加校园信息资讯
export function addSchoolInformation(data){
    return service({
      url:"/newsManage/addSchoolInformation",
      method:"post",
      data:data
  })
}