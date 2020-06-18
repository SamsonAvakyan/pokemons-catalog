import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Dashboard from '../../components/Dashboard'
import OpenedCard from '../../components/OpenedCard'
import { pokemonsFetchData } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchData(0, 20)
  }

  render() {
    return (
      <div className="container">
        <input className="search" />
        <Dashboard pokemons={this.props.pokemons} />
        <button className="show-more-btn">Show more...</button>
        <Switch>
          <Route exact path="/cards/:id" component={OpenedCard} />
        </Switch>
      </div>
    )
  }
}

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