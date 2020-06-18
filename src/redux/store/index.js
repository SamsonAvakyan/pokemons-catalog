import { compose, createStore, applyMiddleware } from 'redux'
import throttle from 'lodash/throttle'
import thunk from 'redux-thunk'

import { saveState } from './localStorage'
import rootReducer from '../reducers'

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

store.subscribe(
  throttle(() => {
    saveState({
      pokemons: store.getState().pokemons,
    })
  }, 1000)
)

export default store