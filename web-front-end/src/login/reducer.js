const defaultState = {
  isLogin: false
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'changeLoginTab':
      return {
        isLogin: action.isLogin
      }
    default: 
      return state
  }
}

export default reducer