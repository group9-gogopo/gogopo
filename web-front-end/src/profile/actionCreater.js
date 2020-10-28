import { LOADDATA } from './actionTypes'

//导入配置好的数据请求格式
// import { get } from '@u/http.js'

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
        let result = [{
            adressId:1,
            name: '李云祥',
            tel: '15022581580',
            state: '默认',
            location: '北京市 昌平区 北京科技职业学院'
        },
        {
            adressId:2,
            name: '李腾飞',
            tel: '15022587784',
            state: '默认',
            location: '北京市 昌平区 北京科技职业学院'
        },
        {
            adressId:3,
            name: '檀旭',
            tel: '15022584567',
            state: '默认',
            location: '北京市 昌平区 北京科技职业学院'
        }
        ]
        // 异步完成之后在同步派发
        dispatch(loadDataSync(result))
    }
}

export {
    loadDataSync,
    loadDataAsync
}