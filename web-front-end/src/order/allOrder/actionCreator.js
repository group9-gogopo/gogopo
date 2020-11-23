import { LOADDATA } from './actionTypes'
import { get } from "@u/http.js";

//这是同步请求的action构造函数
const loadDataSync=(list)=>{
    return{
        type:LOADDATA,
        list,
        // showList
    }
}
// 这是异步请求的action构造函数
const loadDataAsync = (userid)=>{
    return async (dispatch) =>{
        let arr = [];
        let result = await get("http://localhost:4400/api/searchorderinfo", {
            userId: userid,
          });
          result.searchOrderInfo.map((item) => {
            item.orderContent = JSON.parse(decodeURIComponent(item.orderContent));
            arr.push(item);
          });
        dispatch(loadDataSync(arr))
    }
}

export {
    loadDataSync,
    loadDataAsync
}