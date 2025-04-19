"use client";

import { FlashSaleTimer } from "./FlashSaleTimer";
import { FlashSaleProductCard } from "./FlashSaleProductCard";

const flashSaleProducts = [
  {
    id: "1",
    title: "Wireless Noise-Cancelling Headphones",
    price: 12999,
    originalPrice: 19999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "2",
    title: "Smart Fitness Tracker Watch",
    price: 7999,
    originalPrice: 11999,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "3",
    title: "Portable Bluetooth Speaker",
    price: 3999,
    originalPrice: 5999,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "4",
    title: "Portable Bluetooth Speaker",
    price: 3999,
    originalPrice: 5999,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

export function FlashSale() {
  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
    // Implement your add to cart logic here
  };

  return (
    <section className="bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1   gap-8">
          <div className="lg:col-span-1">
            <FlashSaleTimer
              endTime={new Date().getTime() + 24 * 60 * 60 * 1000}
            />
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Flash Sale Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flashSaleProducts.map((product) => (
                <FlashSaleProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={() => handleAddToCart(product.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
