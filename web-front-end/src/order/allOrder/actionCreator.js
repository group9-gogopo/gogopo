// import { LOADDATA } from './actionTypes'
// import { get } from "@u/http.js";

// //这是同步请求的action构造函数
// const loadDataSync=(list,showList)=>{
//     return{
//         type:LOADDATA,
//         // list,
//         // showList
//     }
// }
// // 这是异步请求的action构造函数
// const loadDataAsync = (sort,page,limit)=>{
//     return async (dispatch) =>{
//         let result=await get(`http://localhost:4400/api/goodslist`,{})
//         // 异步完成之后在同步派发
//         dispatch(loadDataSync(result))
//     }
// }

// export default{
//     loadDataSync,
//     loadDataAsync
// }