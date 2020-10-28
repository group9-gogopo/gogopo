const defaultState={
    // profileMsg:{},
    adressMsg:[{
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
}

const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'LOADDATA':
            return{
                // profileMsg:action.profileMsg,
                adressMsg:action.list
            }
        default:
            return state
    }
}

export default reducer