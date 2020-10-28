const defaultState={
    profileMsg:{},
    adressMsg:[]
}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'LOADDATA':
            return{
                profileMsg:action.profileMsg,
                adressMsg:action.adressMsg
            }
        default:
            return state
    }
}

export default reducer