import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, Sun, Moon } from "lucide-react";

// import { CartSheet } from "./CartSheet";
// import { useCart } from "@/contexts/CartContext";
// import { CartDropdown } from "./CartDropDown";

const pages = ["Home", "Products", "Stores", "About"];

export function Navbar() {
 
  // const { cart } = useCart();
  const location = useLocation();

  // const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile View */}
          <div className="md:hidden flex justify-between w-full">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mr-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px]">
                <nav className="flex flex-col space-y-4">
                  {pages.map((page) => (
                    <Link
                      key={page}
                      to={
                        page.toLowerCase() === "home"
                          ? "/"
                          : `/${page.toLowerCase()}`
                      }
                      className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {page}
                    </Link>
                  ))}
                  <div className="relative mt-4">
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full bg-background text-foreground placeholder-muted-foreground rounded-md pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    {/* <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      {theme === "dark" ? (
                        <Sun className="h-6 w-6" />
                      ) : (
                        <Moon className="h-6 w-6" />
                      )}
                    </Button> */}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
            {/* <CartSheet count={cartItemsCount} /> */}
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold hidden md:block">
              FourteenMart
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {pages.map((page) => (
                <Link
                  key={page}
                  to={
                    page.toLowerCase() === "home"
                      ? "/"
                      : `/${page.toLowerCase()}`
                  }
                  className={`text-foreground hover:bg-accent ${
                    location.pathname === `/${page.toLowerCase()}`
                      ? "bg-accent"
                      : ""
                  } hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-background text-foreground placeholder-muted-foreground rounded-md pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="ml-3">
                {/* <CartDropdown count={cartItemsCount} /> */}
              </div>
              {/* <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-3"
              >
                {theme === "dark" ? (
                  <Sun className="h-6 w-6" />
                ) : (
                  <Moon className="h-6 w-6" />
                )}
              </Button> */}
              <Button variant="outline" className="ml-3 px-8">
                <Link to="/login">Log in</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
