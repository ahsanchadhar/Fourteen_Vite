


import Categories from "@/components/categories";
import SpecialOffers from "@/components/SpecialOffers";
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
      {/* Categories Section */}
      <Categories/>

      {/* Special Offers Section */}
      <SpecialOffers/>
    </div>
  );
}

export default Home