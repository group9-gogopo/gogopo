const defaultState = {
  current: 0,
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'addCurrent':
      return {
        current: action.current,
      }
    case 'reduceCurrent':
      return {
        current: action.current,
      }
    case 'zeroCurrent':
      return {
        current: action.current,
      }
    default:
      return state
    }
}
export default reducer
