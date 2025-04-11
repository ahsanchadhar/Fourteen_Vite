import { HotProductsCard } from "@/components/HotProductsCard";
import { useState, useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    description:
      "Immerse yourself in crystal-clear sound with our premium wireless headphones.",
    price: 15999,
    rating: 4.5,
    originalPrice: 17999,
    media: { items: [{ url: "/headphone.png" }] },
  },
  {
    id: 2,
    title: "Smart Fitness Tracker Watch",
    description:
      "Track your fitness goals with our sleek and feature-packed smartwatch.",
    price: 8999,
    rating: 4.2,
    originalPrice: 9999,
    media: { items: [{ url: "/watch1.jpg" }] },
  },
  {
    id: 3,
    title: "Ultra HD 4K Smart TV - 55 inch",
    description:
      "Experience stunning visuals and smart features with our 55-inch 4K smart TV.",
    price: 54999,
    rating: 4.8,
    originalPrice: 59999,
    media: { items: [{ url: "/LED.png" }] },
  },
  {
    id: 4,
    title: "Ultra HD 4K 28 Zoom Camera",
    description:
      "Capture life's moments in stunning detail with our 4K 28x zoom camera.",
    price: 84999,
    rating: 4.8,
    originalPrice: 99999,
    media: { items: [{ url: "/camera.png" }] },
  },
];

export function HotSalesCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const speed = 0.5;

    let animationFrameId;

    const animate = () => {
      setScrollPosition((prev) => (prev + speed) % (scrollWidth / 2));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleProductClick = (productId) => {
    console.log(`Product clicked: ${productId}`);
    // You can route to product detail or show modal etc.
  };

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        ref={containerRef}
        className="flex transition-transform duration-100 ease-linear"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {[...products, ...products].map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="flex-shrink-0 w-80 mr-4"
          >
            <HotProductsCard
              rating={product.rating}
              image={product.media.items[0].url}
              title={product.title}
              price={product.price}
              onClick={() => handleProductClick(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
