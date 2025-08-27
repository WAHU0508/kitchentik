import { Button } from "@//components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/beautiful-rustic-kitchen-with-fresh-ingredients-an.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover the Joy of
          <span className="text-primary"> Home Cooking</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          From simple weeknight dinners to impressive weekend feasts, find recipes and tips that make cooking at home
          both delicious and enjoyable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Explore Recipes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
          >
            Watch Cooking Tips
          </Button>
        </div>
      </div>
    </section>
  )
}
