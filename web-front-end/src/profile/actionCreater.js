import { LOADDATA } from './actionTypes'

//导入配置好的数据请求格式
import { get } from '@u/http.js'

//这是同步请求的action构造函数
const loadDataSync=list=>{
    return{
        type:LOADDATA,
        list
    }
}
// 这是异步请求的action构造函数
const loadDataAsync = ()=>{
    return async (dispatch) =>{
        // let result = await get({
        //     //在mock中配置好的json接口
        //     // 这里已经用了代理了
        //     url: '/api/list'
        // })
        let result = await get("/api/address")
        // 异步完成之后在同步派发
        dispatch(loadDataSync(result))
    }
}

export {
    loadDataSync,
    loadDataAsync
}