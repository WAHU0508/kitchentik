import { Card, CardContent, CardFooter } from "@//components/ui/card"
import { Badge } from "@//components/ui/badge"
import { Clock, Users } from "lucide-react"

interface RecipeCardProps {
  title: string
  description: string
  image: string
  cookTime: string
  servings: number
  difficulty: string
  category: string
}

export default function RecipeCard({
  title,
  description,
  image,
  cookTime,
  servings,
  difficulty,
  category,
}: RecipeCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {difficulty}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-card-foreground text-balance">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{description}</p>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{servings} servings</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
