import React, { useState } from "react";
import { StoreCard } from "@/components/StoreCard";
import { FiltersSideMenu } from "@/components/FiltersSideMenu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterSheet } from "@/components/FilterSheet";

const stores = [
  {
    id: "1",
    name: "TechGadgets",
    category: "Electronics",
    rating: 4.7,
    reviews: 1283,
    products: 500,
    coverImageUrl:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    profileImageUrl:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    id: "2",
    name: "FashionForward",
    category: "Fashion",
    rating: 4.5,
    reviews: 952,
    products: 1200,
    coverImageUrl:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    profileImageUrl:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    id: "3",
    name: "HomeEssentials",
    category: "Home & Living",
    rating: 4.8,
    reviews: 1567,
    products: 800,
    coverImageUrl:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    profileImageUrl:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    id: "4",
    name: "SportsWorld",
    category: "Sports & Outdoors",
    rating: 4.6,
    reviews: 789,
    products: 600,
    coverImageUrl:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    profileImageUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  },
];

function StoresPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-6 md:py-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center lg:text-left">
        Our Stores
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
        {/* Sidebar for Filters */}
        <aside className="lg:w-64 hidden lg:block">
          <FiltersSideMenu />
        </aside>

        {/* Mobile Filter Sheet */}
        <div className="lg:hidden mb-2 md:mb-4">
          <FilterSheet />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-8 gap-2 md:gap-4">
            <Input
              type="text"
              placeholder="Search stores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 text-sm"
            />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px] text-sm">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating-desc">Rating: High to Low</SelectItem>
                <SelectItem value="rating-asc">Rating: Low to High</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="products">Most Products</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Store Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
            {stores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoresPage;
