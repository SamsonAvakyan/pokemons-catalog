import { FETCH_POKEMONS } from './types'

export function pokemonsFetchData(offset, limit) {
  return async (dispatch) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    )
    const apiData = await response.json()
    const results = apiData.results
    const itemsUrls = results.map((item) => item.url)
    const json = []

    for (const item of itemsUrls) {
      const response = await fetch(item)
      const apiData = await response.json()
      json.push(apiData)
    }

    dispatch({ type: FETCH_POKEMONS, payload: json })
  }
}