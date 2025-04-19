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

const dummyProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 1000,
    discount_price: 800,
    discount_percentage: 20,
    average_rating: 4.5,
  },
  {
    id: 2,
    name: "Product 2",
    price: 1500,
    discount_price: 1200,
    discount_percentage: 15,
    average_rating: 4.0,
  },
  {
    id: 3,
    name: "Product 3",
    price: 2000,
    discount_price: 1800,
    discount_percentage: 10,
    average_rating: 4.8,
  },
  {
    id: 4,
    name: "Product 4",
    price: 2500,
    discount_price: 2200,
    discount_percentage: 12,
    average_rating: 4.2,
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar with Filters */}
        <aside className="lg:w-64 hidden md:block">
          <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-auto">
            <Breadcrumbs />
            <FiltersSideMenu />
          </div>
        </aside>

        {/* Product Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-8">All Products</h1>

          {/* Search and Sort */}
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

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pagination */}
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
