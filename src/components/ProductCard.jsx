import React from 'react'
import {motion} from 'framer-motion'
import { Star} from 'lucide-react';


const ProductCard = ({ item }) => {
  return (
    // container
    <motion.div
      whileHover={{ scale: 1.05 }} className='bg-white p-4 rounded-xl shadow-sm'>

      {/* product image */}
      <img src = {item.image} alt = {item.title} className='w-full h-48 object-scale-down rounded-md mb-4' />

    {/* product title */}
      <h2 className='text-lg font-semibold mb-2'>{item.title}</h2>

    {/* product category */}
      <p className='text-gray-600 mb-4'>{item.category }</p>
    
    {/* product price */}
      <h4 className='text-xl font-bold mb-4'>${item.price}</h4>

    {/* inner container - price + rating */}
<div className="flex justify-between items-center mt-2">

  {/* product price */}
  <span className="font-semibold">
    ${item.price}
  </span>

  {/* product rating */}
  <span className="flex items-center gap-1 text-sm">
    <Star size={18} color="#edbc35" fill="#edbc35"  strokeWidth={2} />
    {item.rating.rate}
  </span>

</div>
    </motion.div>
  )
}

export default ProductCard
