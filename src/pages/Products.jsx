"use client";

import { useState } from "react";
import { FiltersSideMenu } from "@/components/FiltersSideMenu";
import { FilterSheet } from "@/components/FilterSheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    description: "Immerse yourself in crystal-clear sound with our premium wireless headphones.",
    price: 15999,
    rating: 4.5,
    originalPrice: 17999,
    media: {
      items: [
        { url: "/headphone.png" },
        { url: "/watch1.jpg" },
        { url: "/LED.png" },
        { url: "/camera.png" },
      ],
    },
    options: [
      { name: "Color", choices: ["Red", "Blue", "Green"] },
      { name: "Size", choices: ["Small", "Medium", "Large"] },
    ],
  },
  {
    id: 2,
    title: "Smart Fitness Tracker Watch",
    description: "Track your fitness goals with our sleek and feature-packed smartwatch.",
    price: 8999,
    rating: 4.2,
    originalPrice: 9999,
    media: {
      items: [
        { url: "/watch1.jpg" },
        { url: "/headphone.png" },
        { url: "/LED.png" },
        { url: "/camera.png" },
      ],
    },
    options: [
      { name: "Color", choices: ["Red", "Blue", "Green"] },
      { name: "Size", choices: ["Small", "Medium", "Large"] },
    ],
  },
  {
    id: 3,
    title: "Ultra HD 4K Smart TV - 55 inch",
    description: "Experience stunning visuals and smart features with our 55-inch 4K smart TV.",
    price: 54999,
    rating: 4.8,
    originalPrice: 59999,
    media: {
      items: [
        { url: "/LED.png" },
        { url: "/headphone.png" },
        { url: "/watch1.jpg" },
        { url: "/camera.png" },
      ],
    },
    options: [
      { name: "Color", choices: ["Red", "Blue", "Green"] },
      { name: "Size", choices: ["Small", "Medium", "Large"] },
    ],
  },
  {
    id: 4,
    title: "Ultra HD 4K 28 Zoom Camera",
    description: "Capture life's moments in stunning detail with our 4K 28x zoom camera.",
    price: 84999,
    rating: 4.8,
    originalPrice: 99999,
    media: {
      items: [
        { url: "/camera.png" },
        { url: "/headphone.png" },
        { url: "/watch1.jpg" },
        { url: "/LED.png" },
      ],
    },
    options: [
      { name: "Color", choices: ["Red", "Blue", "Green"] },
      { name: "Size", choices: ["Small", "Medium", "Large"] },
    ],
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12">
      <div className="flex justify-between w-full" />
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 hidden md:block">
          <div className="md:fixed top-30 z-50">
            <Breadcrumbs />
            <FiltersSideMenu />
          </div>
        </aside>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-8">All Products</h1>
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="flex-1 mb-4 md:mb-0 md:mr-4">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
              <div className="md:hidden">
                <FilterSheet />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="mr-2">Previous</Button>
            <Button variant="outline" className="mr-2">1</Button>
            <Button variant="outline" className="mr-2">2</Button>
            <Button variant="outline" className="mr-2">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
