import Image from "next/image";
import { Button } from "@/components/ui/button";

const specialOffers = [
  {
    id: "1",
    title: "Summer Sale",
    discount: "30% OFF",
    image:
      "https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "2",
    title: "New User Bonus",
    discount: "Extra 10% OFF",
    image:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "3",
    title: "Clearance",
    discount: "Up to 50% OFF",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

export function SpecialOffers() {
  return (
    <section className="bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  {offer.discount}
                </p>
                <Button className="w-full">Shop Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
