import service from "../../index.js"
//添加新闻资讯
export function addComplexInformation(data){
    return service({
      url:"/newsManage/addComplexInformation",
      method:"post",
      data:data
  })
}