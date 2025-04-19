import { Link } from "react-router-dom"; // Simple Link from React Router
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCard = ({
  id,
  name,
  price,
  discount_price,
  average_rating,
  discount_percentage,
}) => {
  return (
    <div className="bg-card text-card-foreground shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform flex flex-col h-full">
      <Link to={`/products/${id}`} className="relative cursor-pointer">
        <img
          src={"/camera.png"} // Replace with your actual image path or dynamic data
          alt={name}
          className="w-full h-40 object-contain"
        />
        <div className="absolute top-2 left-2">
          <span className="text-xs font-semibold text-white rounded-full bg-red-500 px-2 py-1 shadow-md">
            -{discount_percentage}%
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background rounded-full shadow-md"
        >
          <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500" />
        </Button>
      </Link>
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded-full">
            New
          </span>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-xs font-semibold text-yellow-700">
              {average_rating}
            </span>
          </div>
        </div>

        <h3 className="text-sm sm:text-base font-bold mb-2 hover:text-primary transition-colors duration-300 line-clamp-2">
          {name}
        </h3>

        <div className="flex items-baseline mb-4">
  <span className="text-lg sm:text-xl font-bold text-primary mr-2">
    RS. {discount_price?.toLocaleString?.() ?? "0"}
  </span>
  <span className="text-xs sm:text-sm font-medium line-through text-muted-foreground">
    RS. {price?.toLocaleString?.() ?? "0"}
  </span>
</div>

      </div>
      <div className="px-4 pb-4 mt-auto">
        <div className="flex justify-between gap-2">
          <Button className="flex-grow text-xs sm:text-sm">Buy Now</Button>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
