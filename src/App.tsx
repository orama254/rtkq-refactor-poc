import { useState } from 'react';


import { useGetPokemonByNameQuery } from './services/api';


import SearchInput from './components/SearchInput';

import './App.css'

function App() {

  const [searchValue, setSearchValue] = useState('')

  //TODO: add a debouncer to the search input to prevent unnecessary requests to the API

  const {data, isLoading, isError } = useGetPokemonByNameQuery(searchValue || 'bulbasaur')

  return (
    <div className="App">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      {isError ? (
        <div>Oh no, there was an error</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <>
          <h3>{data?.species?.name}</h3>
          <img src={data.sprites.front_default} alt={data.species.name} />
        </>
      ) : null

      }
    </div>
  )
}

export default App
