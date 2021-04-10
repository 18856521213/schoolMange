import service from "../index.js"
//添加新闻资讯
export function findComplexInformation(data){
    return service({
      url:"/newsManage/findComplexInformation",
      method:"post",
      data:data
  })
}