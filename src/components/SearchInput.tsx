


type Props = {
    searchValue: string,
    setSearchValue: (value: string) => void
}

const SearchInput = ({ searchValue, setSearchValue }: Props) => {
  return (
    <input 
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Type to search for a pokemon"
        autoFocus
    />
  )
}

export default SearchInput