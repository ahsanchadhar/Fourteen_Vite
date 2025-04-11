import FeaturedProducts from "@/sections/FeaturedProducts";
import { Hero } from "@/sections/Hero";
import { HotSalesCarousel } from "@/sections/HotSalesCarousel";


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Products Carousel Section */}
      <HotSalesCarousel />

      {/* FeaturedProducts Section */}
      <FeaturedProducts/>
    </div>
  );
}

export default Home