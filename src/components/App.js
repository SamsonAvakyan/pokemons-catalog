import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import OpenedCard from './OpenedCard'

const App = ({ fetchData, pokemons }) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    fetchData(0, 20)
  }, [])

  return (
    <div className="container">
      <input
        className="search"
        type="text"
        value={value}
        onChange={(e) => setValue(e.value)}
      />
      <Dashboard pokemons={pokemons} />
      <button className="show-more-btn" onClick={() => fetchData(0, 40)}>
        Show more...
      </button>
      <Switch>
        <Route exact path="/cards/:id" component={OpenedCard} />
      </Switch>
    </div>
  )
}

export default App