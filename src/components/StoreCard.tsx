import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MessageSquare,
  ShoppingBag,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

interface StoreCardProps {
  store: {
    id: string;
    name: string;
    category: string;
    shortDescription: string;
    rating: number;
    reviews: number;
    products: number;
    address: string;
    phone: string;
    email: string;
    coverImageUrl: string;
    profileImageUrl: string;
  };
}

export function StoreCard({ store }: StoreCardProps) {
  return (
    <Card className="w-full max-w-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={store.coverImageUrl}
          alt={`${store.name} cover`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-20 h-20 mr-4">
            <Image
              src={store.profileImageUrl}
              alt={`${store.name} profile`}
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-background"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{store.name}</h2>
            <Badge variant="secondary" className="mt-1">
              {store.category}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
          {store.shortDescription}
        </p>
        <div className="grid grid-cols-3 gap-4 p-4 border rounded-lg mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Star className="text-yellow-400 mr-1 h-4 w-4" />
              <span className="font-semibold">{store.rating}</span>
            </div>
            <p className="text-xs text-muted-foreground">Rating</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <MessageSquare className="text-blue-500 mr-1 h-4 w-4" />
              <span className="font-semibold">{store.reviews}</span>
            </div>
            <p className="text-xs text-muted-foreground">Reviews</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <ShoppingBag className="text-green-500 mr-1 h-4 w-4" />
              <span className="font-semibold">{store.products}</span>
            </div>
            <p className="text-xs text-muted-foreground">Products</p>
          </div>
        </div>
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm">
            <MapPin className="mr-2 text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground">{store.address}</span>
          </div>
          <div className="flex items-center text-sm">
            <Phone className="mr-2 text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground">{store.phone}</span>
          </div>
          <div className="flex items-center text-sm">
            <Mail className="mr-2 text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground">{store.email}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Visit Store</Button>
      </CardFooter>
    </Card>
  );
}
