import { useGetPokemonByNameQuery } from './hooks/usePokemon'

import './App.css'

function App() {

  const {data, isLoading, isError } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <div className="App">
      {isError ? (
        <div>Oh no, there was an error</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_default} alt={data.species.name} />
        </>
      ) : null

      }
    </div>
  )
}

export default App
