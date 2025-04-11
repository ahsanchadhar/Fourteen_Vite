
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CartDropdown({ count }: { count: number }) {
  const { cart, updateQuantity } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {count}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="max-h-96 overflow-auto">
          {cart.map((item) => (
            <DropdownMenuItem
              key={item.id}
              className="flex items-center gap-4 py-4"
            >
              <div className="relative w-16 h-16">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.quantity} x RS. {item.price.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </div>
            </DropdownMenuItem>
          ))}
        </div>
        {cart.length > 0 ? (
          <>
            <div className="border-t p-4">
              <p className="font-semibold mb-4">
                Subtotal: RS. {subtotal.toLocaleString()}
              </p>
              <div className="flex gap-2">
                <Button asChild className="flex-1">
                  <Link href="/cart">View Cart</Link>
                </Button>
                <Button asChild className="flex-1">
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="p-4 text-center">Your cart is empty</div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
