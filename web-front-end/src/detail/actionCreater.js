import { DETAILDATA } from "./actionTypes";

//导入配置好的数据请求格式
import { get } from "@u/http.js";

const detailLoadData = (list) => {
  return {
    type: DETAILDATA,
    list
  };
};

const detailLoadDataAsync =(id)=>{
 return async(dispatch)=>{
   let result=await get(`http://localhost:4400/api/good?id=${id}`)
   console.log(result);
   dispatch(detailLoadData(result.good))
 }
}
export{
    detailLoadData,
    detailLoadDataAsync
}