import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";

const ProductCard = ({ item }) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1}}
      className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col h-full relative overflow-hidden"
    >
      {/* Wishlist Icon */}
      <motion.button
        onClick={() => setLiked(!liked)}
        whileTap={{ scale: 0.8 }}
        animate={{ scale: liked ? 1.2 : 1 }}
        className="absolute top-3 right-3 p-1 rounded-full bg-white shadow"
      >
        <Heart
          size={18}
          className={`transition ${
            liked ? "text-red-500 fill-red-500" : "text-gray-500"
          }`}
        />
      </motion.button>

      {/* Product Image */}
      <div className="bg-gray-100 rounded-lg p-3 mb-4 flex items-center justify-center overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="h-40 object-contain"
        />
      </div>

      {/* Title */}
      <h2
        className="text-base font-semibold mb-1 line-clamp-2 min-h-12"
      >
        {item.title}
      </h2>

      {/* Category */}
      <p className="text-gray-500 text-sm capitalize mb-2">
        {item.category}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1 text-sm mb-3">
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <span className="font-medium">{item.rating.rate}</span>
        <span className="text-gray-400">({item.rating.count})</span>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto flex items-center justify-between">
        {/* Price */}
        <span className="text-lg font-bold text-gray-900">
          ${item.price}
        </span>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-black text-white text-sm px-3 py-1.5 rounded-lg"
        >
          Add
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;