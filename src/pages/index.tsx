import { FormEvent, useState } from 'react';
import { SearchResults } from '../components/SearchResults';

const Home = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    setResults(data);
  }

  return (

      <form onSubmit={handleSearch}>
        <input
          placeholder="Type here..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button
          type="submit"
          disabled={search.length === 0}
        >
          Search product
        </button>

        <SearchResults results={results}/>
      </form>
  )
}

export default Home