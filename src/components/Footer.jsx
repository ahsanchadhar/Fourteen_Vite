import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-lg font-bold mb-4">About Us</h5>
            <p className="text-sm mb-4">
              Fourteen Mart is an e-commerce store dedicated to providing the
              best products to our customers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Customer Service</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/returns">Returns & Refunds</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Payment & Shipping</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/payment-methods">Payment Methods</Link>
              </li>
              <li>
                <Link to="/shipping-policy">Shipping Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-8 text-center">
        <p>&copy; 2024 Fourteen Mart. All rights reserved.</p>
      </div>
    </footer>
  );
}
