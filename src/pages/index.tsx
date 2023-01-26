import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";

type Results = {
  totalPrice: number;
  data: any[];
}

interface totalPrice {
  total: number;
  product: any;
}

const Home = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: []
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const totalPrice = data.reduce((total: number, product: any|undefined)  => {
      return total + product.price;
    }, 0);

    const formatter = new Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL'
    })

    const products = data.map((product: any) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price)
      }
    });

    setResults({ totalPrice, data: products });
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <form onSubmit={handleSearch}>
      <input
        placeholder="Type here..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button type="submit" disabled={search.length === 0}>
        Search product
      </button>

      <SearchResults 
        onAddToWishList={addToWishList} 
        totalPrice={results.totalPrice}
        results={results.data} />
    </form>
  );
};

export default Home;
