import { CHANGENUM } from './actionTypes'

const changeNum = (num)=>{
    return {
        type:CHANGENUM,
        num
        
    }
}

export default {
    changeNum
}