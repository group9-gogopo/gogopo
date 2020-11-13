import { LOADDATA ,CHANGESHOW,CLOSESHOW} from './actionTypes'

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
const loadDataAsync = (userid)=>{
    return async (dispatch) =>{
        let result = await get("http://localhost:4400/api/useraddressquery",{userid})
        // 异步完成之后在同步派发
        dispatch(loadDataSync(result.userAddressList))
    }
}

const  changeShow=(id)=>{
    return {
        type:CHANGESHOW,
        id
    }
}

const closeShow=()=>{
    return{
        type:CLOSESHOW,
        addShow:0
    }
}
export {
    loadDataSync,
    loadDataAsync,
    changeShow,
    closeShow
}