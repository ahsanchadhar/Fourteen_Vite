import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MessageSquare,
  ShoppingBag,
} from "lucide-react";

export function StoreCard({ store }) {
  return (
    <Card className="w-full overflow-hidden shadow-md rounded-md md:rounded-2xl">
      {/* Cover Image */}
      <div className="relative h-20 md:h-36">
        <img
          src={store.coverImageUrl}
          alt={`${store.name} cover`}
          className="w-full h-full object-cover"
        />
        {/* Profile Image */}
        <div className="absolute -bottom-5 md:-bottom-10 left-2 md:left-4">
          <img
            src={store.profileImageUrl}
            alt={`${store.name} profile`}
            className="w-10 h-10 md:w-20 md:h-20 rounded-full border-2 md:border-4 border-white object-cover shadow-sm md:shadow-md"
          />
        </div>
      </div>

      {/* Store Info */}
      <CardContent className="pt-7 md:pt-12 px-2 md:px-6 pb-2 md:pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[11px] md:text-xl font-semibold leading-tight">
              {store.name}
            </h2>
            <Badge
              variant="secondary"
              className="mt-0.5 text-[8px] md:text-sm px-1 py-0.5"
            >
              {store.category}
            </Badge>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mt-3 md:mt-6 bg-muted p-2 md:p-3 rounded-md md:rounded-lg">
          <div className="text-center">
            <div className="flex items-center justify-center mb-0.5 text-[9px] md:text-sm">
              <Star className="text-yellow-400 mr-1 h-2.5 w-2.5 md:h-4 md:w-4" />
              <span className="font-semibold">{store.rating}</span>
            </div>
            <p className="text-[8px] md:text-xs text-muted-foreground">Rating</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-0.5 text-[9px] md:text-sm">
              <MessageSquare className="text-blue-500 mr-1 h-2.5 w-2.5 md:h-4 md:w-4" />
              <span className="font-semibold">{store.reviews}</span>
            </div>
            <p className="text-[8px] md:text-xs text-muted-foreground">Reviews</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-0.5 text-[9px] md:text-sm">
              <ShoppingBag className="text-green-500 mr-1 h-2.5 w-2.5 md:h-4 md:w-4" />
              <span className="font-semibold">{store.products}</span>
            </div>
            <p className="text-[8px] md:text-xs text-muted-foreground">Products</p>
          </div>
        </div>
      </CardContent>

      {/* Button */}
      <CardFooter className="px-2 md:px-6 pb-3 md:pb-6 pt-1">
        <Button className="w-full text-[10px] md:text-sm h-7 md:h-10">
          Visit Store
        </Button>
      </CardFooter>
    </Card>
  );
}
