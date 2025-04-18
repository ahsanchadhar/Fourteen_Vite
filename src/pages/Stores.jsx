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

const stores = [
  {
    id: "1",
    name: "TechGadgets",
    category: "Electronics",
    shortDescription:
      "Your one-stop shop for all the latest tech gadgets and accessories.",
    rating: 4.7,
    reviews: 1283,
    products: 500,
    address: "123 Tech Street, Gadget City, TC 12345",
    phone: "+1 (555) 123-4567",
    email: "info@techgadgets.com",
    coverImageUrl:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    profileImageUrl:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    id: "2",
    name: "FashionForward",
    category: "Fashion",
    shortDescription:
      "Trendy and stylish clothing for all occasions. Stay ahead in fashion.",
    rating: 4.5,
    reviews: 952,
    products: 1200,
    address: "456 Style Avenue, Fashion District, FD 67890",
    phone: "+1 (555) 987-6543",
    email: "hello@fashionforward.com",
    coverImageUrl:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    profileImageUrl:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    id: "3",
    name: "HomeEssentials",
    category: "Home & Living",
    shortDescription:
      "Everything you need to make your house a home. Quality home essentials.",
    rating: 4.8,
    reviews: 1567,
    products: 800,
    address: "789 Comfort Lane, Homeville, HV 54321",
    phone: "+1 (555) 246-8135",
    email: "support@homeessentials.com",
    coverImageUrl:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    profileImageUrl:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    id: "4",
    name: "SportsWorld",
    category: "Sports & Outdoors",
    shortDescription:
      "Gear up for your favorite sports and outdoor activities. Quality equipment for all.",
    rating: 4.6,
    reviews: 789,
    products: 600,
    address: "321 Athlete Road, Sportsville, SV 13579",
    phone: "+1 (555) 369-2580",
    email: "info@sportsworld.com",
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Stores</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64">
          <FiltersSideMenu />
        </aside>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="flex-1 mb-4 md:mb-0 md:mr-4">
              <Input
                type="text"
                placeholder="Search stores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
