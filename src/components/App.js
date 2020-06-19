import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import OpenedCard from './OpenedCard'

const App = ({ fetchData, pokemons }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    fetchData(0, 20)
  }, [])

  function getVisiblePokemons() {
    return pokemons.filter((pokemon) =>
      value.trim() ? pokemon.name === value.toLowerCase() : pokemon
    )
  }

  return (
    <div className="container">
      <input
        className="search"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Pokemon query..."
      />
      <Dashboard pokemons={getVisiblePokemons()} />
      <button className="show-more-btn" onClick={() => fetchData(0, 40)}>
        Show more...
      </button>
      <Switch>
        <Route path="/pokemons/:id">
          <OpenedCard pokemons={pokemons} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
