const defaultState = {
  current: 0,
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'changeCurrent':
      return {
        current: action.current,
      }
    default:
      return state
    }
}
export default reducer
