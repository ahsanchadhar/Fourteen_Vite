import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8">
      {/* Left Section (2/3) */}
      <div className="w-full lg:w-2/3 bg-white text-black rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-8 border-b pb-4">
          About FourteenMart
        </h2>

        <div className="space-y-12">
          {/* Story Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              Founded in 2020, FourteenMart has grown from a small online
              boutique to a leading e-commerce destination. We curate the finest
              collections to bring you the latest trends and timeless classics
              across various categories.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-xl hover:shadow-md transition duration-300">
              <div className="relative w-16 h-16 mb-4">
                <img
                  src="/LED.png"
                  alt="Fast Shipping"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Fast Shipping</h4>
              <p className="text-gray-600">2-3 day delivery nationwide</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-md transition duration-300">
              <div className="relative w-16 h-16 mb-4">
                <img
                  src="/camera.png"
                  alt="Premium Quality"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Premium Quality</h4>
              <p className="text-gray-600">Curated high-quality products</p>
            </div>
          </div>

          {/* Featured Collections */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Featured Collections</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Electronics", "Fashion", "Home & Living", "Sports"].map(
                (category) => (
                  <div
                    key={category}
                    className="relative h-32 rounded-lg overflow-hidden"
                  >
                    <img
                      src={`https://source.unsplash.com/400x300/?${category}`}
                      alt={category}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {category}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (1/3) */}
      <div className="w-full lg:w-1/3 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <div className="space-y-6">
          {/* Customer Service Hours */}
          <div>
            <h3 className="text-xl font-bold mb-2">Customer Service</h3>
            <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
            <p className="text-gray-600">Weekend: 10AM - 4PM</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Info</h3>
            <p className="text-gray-600">Email: support@fourteenmart.com</p>
            <p className="text-gray-600">Phone: (555) 123-4567</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" rows={4} />
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
