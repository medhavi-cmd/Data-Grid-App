import { use, useEffect, useState } from "react";
import { getProducts } from "./services/api";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import ProductCard from "./components/ProductCard";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = products;
    if (search) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== "all") {
      result = result.filter((item) => item.category === category);
    }

    setFiltered(result);
  }, [search, category, products]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10 ">
        {/* heading container */}
        <div className="flex flex-col items-start">
          {/* heading */}
          <h1 className="text-5xl font-semibold text-center mb-6">
            Discover Amazing Products
          </h1>
          {/* subheading */}
          <p className="text-gray-600 text-center mb-8">
            Discover amazing products tailored to your style and needs
          </p>
        </div>

        {/* searchbar */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
        {/* loader component */}
        {loading && <Loader />}

        {/* error message  */}
        {error && <Error message={error} />}

        {/* product grid */}
        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {filtered.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* no products found */}
        {!loading && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-16">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-illustration-svg-download-png-3363936.png"
              alt="No products"
              className="w-48 opacity-60 mb-6"
            />

            <h2 className="text-xl font-semibold mb-2">No products found</h2>

            <p className="text-gray-500 text-sm">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </div>

      {/* <Footer.jsx /> */}
    </div>
  );
};

export default App;
