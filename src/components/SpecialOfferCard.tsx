import Image from "next/image";
import { Button } from "@/components/ui/button";

interface SpecialOfferCardProps {
  title: string;
  discount: string;
  image: string;
}

export function SpecialOfferCard({
  title,
  discount,
  image,
}: SpecialOfferCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
      <div className="relative h-40">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-2xl font-bold text-primary mb-4">{discount}</p>
        <Button className="w-full">Shop Now</Button>
      </div>
    </div>
  );
}
