import React from 'react'

const OpenedCard = () => {
  return (
    <div className="opened-card">
      <div className="card-image">
        <img src="" alt="pokemon" />
      </div>
      <div className="card-description">
        <span className="pokemon-name"></span>
        <span className="pokemon-number"></span>
        <ul className="skills">
          <li>
            <span></span>
            <p></p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OpenedCard
