import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'


const Card = ({ name, id, abilities }) => {
  return (
    <NavLink to={'/pokemons/' + id} className="card">
      <div className="card-image">
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt="pokemon"
        />
      </div>
      <div className="card-description">
        <span className="pokemon-name">{name}</span>
        <span className="pokemon-id">{'#' + id}</span>
        <ul className="abilities">
          {abilities.map((item, index) => (
            <li key={index} className="pokemon-ability">
              {item.ability.name}
            </li>
          ))}
        </ul>
      </div>
    </NavLink>
  )
}

export default Card
