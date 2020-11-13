import {LOADDATA,CHANGESHOW,PASSDATA} from './actionCreateTypes'

import { get } from '@u/http.js'
const loadDataSync = list => {
    return{
        type:LOADDATA,
        list:list.userAddressList
    }
    
}

const loadDataAsync = (userid) => {
    return async (dispatch) =>  {
        let result = await get('http://localhost:4400/api/useraddressquery',{userid})
        dispatch(loadDataSync(result))
    }
}

const changeShow = (show) => {
    return{
        type:CHANGESHOW,
        show
    }
}
const pasData = (data) => {
    return{
        type:PASSDATA,
        data
    }
}
export {
    loadDataSync,
    loadDataAsync,
    changeShow,
    pasData
}