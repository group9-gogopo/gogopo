import { LOADDATA } from './actionTypes'
import { get } from "@u/http.js";


//导入配置好的数据请求格式
// import { get } from '@u/http.js'

//这是同步请求的action构造函数
const loadDataSync=(list,showList)=>{
    return{
        type:LOADDATA,
        list,
        showList
    }
}
// 这是异步请求的action构造函数
const loadDataAsync = (sort,page,limit)=>{

    return async (dispatch) =>{
        let resulttest=await get(`http://localhost:4400/api/goodslist`,{sort,page,limit})
        // console.log(resulttest.goodslist)
        // let result = await get({
        //     //在mock中配置好的json接口
        //     // 这里已经用了代理了
        //     url: '/api/list'
        // })
        
        let result = {
            '国产水果':[
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
            '进口水果':[
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
            '水果饮品':[
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
            '果肉制品':[
                {
                proId:1,
                proType:1,
                proImage:'image1',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },
            {
                proId:1,
                proType:1,
                proImage:'image1',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },
            {
                proId:1,
                proType:1,
                proImage:'image1',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },{
                proId:1,
                proType:1,
                proImage:'image1',
                proPrice:198,
                proName:'泰国金枕头榴莲1个装(五斤左右)'
            },
            ],
            '礼盒包装':[
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                },
                {
                    proId:1,
                    proType:1,
                    proImage:'image1',
                    proPrice:198,
                    proName:'泰国金枕头榴莲1个装(五斤左右)'
                }
            ],
        }
        // 异步完成之后在同步派发
        dispatch(loadDataSync(result,resulttest.goodslist))
    }
}

export {
    loadDataSync,
    loadDataAsync
}