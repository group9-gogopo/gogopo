import { LOADDATA } from './actionTypes'
//导入配置好的数据请求格式
import { get } from "@u/http.js";


//这是同步请求的action构造函数
const loadDataSync=(showList)=>{
    // console.log(showList.story)
    return{
        type:LOADDATA,
        showList:showList.story
    }
}
// 这是异步请求的action构造函数
const loadDataAsync = (storytype)=>{
    return async (dispatch) =>{
        let result=await get(`http://localhost:4400/api/story?storytype=${storytype}`)
        dispatch(loadDataSync(result))
    }
}

export {
    loadDataSync,
    loadDataAsync
}