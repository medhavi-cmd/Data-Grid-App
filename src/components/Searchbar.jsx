import React from 'react'

const Searchbar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select 
      className="w-full mt-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      value={category} 
      onChange={(e) => setCategory(e.target.value)}
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

    </div>
  )
}

export default {search, setSearch, category, setCategory, Searchbar}
