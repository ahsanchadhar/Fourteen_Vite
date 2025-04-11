import { Button } from "@/components/ui/button";

const categories = [
  { name: "Electronics", icon: "🖥️" },
  { name: "Fashion", icon: "👕" },
  { name: "Home & Living", icon: "🏠" },
  { name: "Beauty", icon: "💄" },
  { name: "Sports", icon: "⚽" },
  { name: "Books", icon: "📚" },
];

export function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="outline"
            className="flex flex-col items-center justify-center h-24 text-center"
          >
            <span className="text-2xl mb-2">{category.icon}</span>
            <span className="text-sm">{category.name}</span>
          </Button>
        ))}
      </div>
    </section>
  );
}
