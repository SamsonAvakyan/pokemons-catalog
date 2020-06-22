import React from 'react'

import Card from '../Card'
import './style.css'

const Dashboard = ({ pokemons }) => {
  return (
    <div className="dashboard">
      {pokemons.map((pokemon, index) => (
        <Card
          name={pokemon.name}
          key={index}
          id={pokemon.id}
          abilities={pokemon.abilities}
        />
      ))}
    </div>
  )
}

export default Dashboard
