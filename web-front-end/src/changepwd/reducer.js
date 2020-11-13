const defaultState = {
  current: 0,
  username: '',
  userid: 0
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'addCurrent':
      return {
        ...state,
        current: action.current,
      }
    case 'reduceCurrent':
      return {
        ...state,
        current: action.current,
      }
    case 'zeroCurrent':
      return {
        ...state,
        current: action.current,
      }
    case 'storeUserid':
      return {
        ...state,
        userid: action.userid
      }
    default:
      return state
    }
}
export default reducer
