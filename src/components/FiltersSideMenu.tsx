import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const categories = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Sports & Outdoors",
];
const brands = ["Apple", "Samsung", "Nike", "Adidas", "Sony", "LG"];

export function FiltersSideMenu() {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const handleApplyFilters = () => {
    // Implement filter application logic here
    console.log("Applying filters:", {
      priceRange,
      selectedCategories,
      selectedBrands,
    });
  };

  return (
    <div className="w-64 bg-card text-card-foreground p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <Slider
          min={0}
          max={100000}
          step={1000}
          value={priceRange}
          onValueChange={handlePriceChange}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>RS. {priceRange[0].toLocaleString()}</span>
          <span>RS. {priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Categories</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <Checkbox
              id={`category-${category}`}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => handleCategoryChange(category)}
            />
            <Label htmlFor={`category-${category}`} className="ml-2 text-sm">
              {category}
            </Label>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Brands</h3>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-2">
            <Checkbox
              id={`brand-${brand}`}
              checked={selectedBrands.includes(brand)}
              onCheckedChange={() => handleBrandChange(brand)}
            />
            <Label htmlFor={`brand-${brand}`} className="ml-2 text-sm">
              {brand}
            </Label>
          </div>
        ))}
      </div>

      <Button onClick={handleApplyFilters} className="w-full">
        Apply Filters
      </Button>
    </div>
  );
}
