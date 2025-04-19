import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button"; // Ensure this is available in your setup

export function FlashSaleProductCard({
  id,
  title,
  price,
  originalPrice,
  rating,
  image,
  onAddToCart,
}) {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
          -{discount}%
        </div>
      </div>

      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2">{title}</h3>

        <div className="flex items-center space-x-1 text-yellow-500">
          <Star className="w-4 h-4 fill-yellow-400" />
          <span className="text-sm text-gray-700">{rating}</span>
        </div>

        <div className="flex items-baseline space-x-2">
          <span className="text-xl font-bold text-primary">
            Rs. {price.toLocaleString()}
          </span>
          <span className="text-sm line-through text-gray-400">
            Rs. {originalPrice.toLocaleString()}
          </span>
        </div>

        <Button onClick={onAddToCart} className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
