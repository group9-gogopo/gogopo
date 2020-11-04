<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux'

=======
import { createStore,applyMiddleware } from 'redux'
>>>>>>> liyx
import thunk from 'redux-thunk'

import reducer from './reducer'

<<<<<<< HEAD
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store

=======
const store=createStore(reducer,applyMiddleware(thunk))

export default store;
>>>>>>> liyx
