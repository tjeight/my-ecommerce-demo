"use client";

import Stripe from "stripe";
import { ProductCard } from "./product-card";
import { useState } from "react";

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;

    return nameMatch || descriptionMatch;
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-lg rounded-full border border-gray-300 px-5 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
        />
      </div>

      {/* Product Grid */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProduct.map((product, key) => (
          <li key={key} className="transition duration-300 hover:scale-[1.01]">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      {filteredProduct.length === 0 && (
        <p className="mt-10 text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};
