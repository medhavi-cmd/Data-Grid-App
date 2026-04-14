import React from 'react'
import { Search } from 'lucide-react';

const Searchbar = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">

        {/* Search Input (2/3 width) */}
      <div className="relative w-full md:w-2/3">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />


        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-red-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Category Filter (1/3 width) */}
      <select
        className="w-full md:w-1/3 px-4 py-3 border border-gray-200 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-red-400"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
     
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

    </div>
  )
}
      
export default Searchbar;