import {useState} from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
// import Searchbar from './components/Searchbar';

const App = () => {
  // const [search, setSearch] = useState('');
  // const [category, setCategory] = useState('');

  return (
    <div >
      <Navbar />
      {/* <Searchbar search={search} setSearch={setSearch} category={category} setCategory={setCategory} /> */}
      <ProductCard />
    </div>
  )
}

export default App
