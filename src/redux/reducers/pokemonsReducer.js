import { FETCH_POKEMONS } from '../actions/types'

function pokemonsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return action.payload
    default:
      return state
  }
}

export default pokemonsReducer