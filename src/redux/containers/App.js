import { connect } from 'react-redux'

import App from '../../components/App'
import { pokemonsFetchData } from '../actions'

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (offset, limit) => dispatch(pokemonsFetchData(offset, limit)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)