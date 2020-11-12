import {LOADDATA,CHANGESHOW} from './actionCreateTypes'

import { get } from '@u/http.js'
const loadDataSync = list => {
    return{
        type:LOADDATA,
        list
    }
}

const loadDataAsync = () => {
    return async (dispatch) =>  {
        let result = await get('')
        dispatch(loadDataSync(result))
    }
}

const changeShow = (show) => {
    return{
        type:CHANGESHOW,
        show
    }
}

export {
    loadDataSync,
    loadDataAsync,
    changeShow
}