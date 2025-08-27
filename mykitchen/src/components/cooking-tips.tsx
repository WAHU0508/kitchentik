import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, ChefHat, Timer, Thermometer } from "lucide-react"

const tips = [
  {
    icon: ChefHat,
    title: "Mise en Place",
    description:
      "Always prepare and organize all your ingredients before you start cooking. This French technique ensures smooth cooking and prevents mistakes.",
  },
  {
    icon: Thermometer,
    title: "Temperature Matters",
    description:
      "Use a meat thermometer to ensure proteins are cooked to safe temperatures. Let meat rest after cooking to redistribute juices.",
  },
  {
    icon: Timer,
    title: "Timing is Everything",
    description:
      "Start with ingredients that take the longest to cook. Use timers for each component to ensure everything finishes together.",
  },
  {
    icon: Lightbulb,
    title: "Taste as You Go",
    description:
      "Season throughout the cooking process, not just at the end. Taste frequently and adjust flavors to achieve the perfect balance.",
  },
]

export default function CookingTips() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Essential Cooking Tips</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            Master these fundamental techniques to elevate your cooking and create restaurant-quality dishes at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon
            return (
              <Card key={index} className="bg-card hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{tip.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{tip.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
