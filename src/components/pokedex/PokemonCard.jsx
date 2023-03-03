import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/pokemonCard.css"

const PokemonCard = ({pokemonUrl}) => {

  const [pokemon, setPokemon] = useState()

  const navigate = useNavigate()

  const handleClickPokemon = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }

  useEffect(() => {
    axios.get(pokemonUrl)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err))
  }, [])
  

  return (
      <article className='container__pokemonCards' onClick={handleClickPokemon}>
      
          <section className='pokemonCard__section'>
              <div>
                  <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="pokemon" />
              </div>
              <div className="infoPokemon">
                <h3 className='pokemonName'>{pokemon?.name}</h3>
                <h6>Type</h6>
                <h4 className='pokemon__type'>{pokemon?.types[0].type.name} {pokemon?.types[1] && `/ ${pokemon?.types[1].type.name}`}</h4>
      
                <hr />
                <section className='stats__section'>
                    {
                      pokemon?.stats.map(stat => (
                        <div key={stat.stat.url}>
                          <h5>{stat.stat.name}</h5>
                          <h5>{stat.base_stat}</h5>
                        </div>
                      ))
                    }
                </section>
              </div>
          </section>
      </article>
  )
}

export default PokemonCard