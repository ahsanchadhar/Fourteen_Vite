import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";

// Define a structure for the product
const FeaturedProducts = () => {
  // Dummy data for products
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

  const [products, setProducts] = useState(dummyProducts);
  const [loading, setLoading] = useState(false); // Set to false since we're using dummy data
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a delay to mimic data fetching
    const fetchProducts = () => {
      setLoading(true);
      setTimeout(() => {
        setProducts(dummyProducts);
        setLoading(false);
      }, 1000); // 1-second delay
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Featured Products</h2>
        <Button variant="link" className="flex items-center">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
