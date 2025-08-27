import RecipeCard from "./recipe-card"

const featuredRecipes = [
  {
    title: "Creamy Mushroom Risotto",
    description: "A rich and creamy Italian classic made with arborio rice, wild mushrooms, and parmesan cheese.",
    image: "/creamy-mushroom-risotto-in-elegant-bowl.png",
    cookTime: "35 min",
    servings: 4,
    difficulty: "Medium",
    category: "Italian",
  },
  {
    title: "Honey Garlic Salmon",
    description: "Perfectly glazed salmon fillets with a sweet and savory honey garlic sauce, ready in 20 minutes.",
    image: "/honey-glazed-salmon.png",
    cookTime: "20 min",
    servings: 2,
    difficulty: "Easy",
    category: "Seafood",
  },
  {
    title: "Classic Beef Bourguignon",
    description: "Traditional French stew with tender beef braised in red wine with vegetables and herbs.",
    image: "/beef-bourguignon-in-cast-iron-pot.png",
    cookTime: "3 hours",
    servings: 6,
    difficulty: "Hard",
    category: "French",
  },
  {
    title: "Fresh Caprese Salad",
    description: "Simple and elegant salad with ripe tomatoes, fresh mozzarella, and basil drizzled with balsamic.",
    image: "/caprese-salad-with-fresh-basil.png",
    cookTime: "10 min",
    servings: 4,
    difficulty: "Easy",
    category: "Salads",
  },
  {
    title: "Chocolate Lava Cake",
    description: "Decadent individual chocolate cakes with a molten center, perfect for special occasions.",
    image: "/chocolate-lava-cake-with-molten-center.png",
    cookTime: "25 min",
    servings: 4,
    difficulty: "Medium",
    category: "Desserts",
  },
  {
    title: "Thai Green Curry",
    description: "Aromatic and spicy Thai curry with coconut milk, vegetables, and your choice of protein.",
    image: "/thai-green-curry.png",
    cookTime: "30 min",
    servings: 4,
    difficulty: "Medium",
    category: "Thai",
  },
]

export default function FeaturedRecipes() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured Recipes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            Discover our most popular and delicious recipes, carefully selected to inspire your next culinary adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  )
}
