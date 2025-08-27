import { Button } from "@//components/ui/button"
import { Input } from "@//components/ui/input"
import { Card, CardContent } from "@//components/ui/card"

export default function Newsletter() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Never Miss a Recipe</h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Join our community of food lovers and get weekly recipes, cooking tips, and kitchen inspiration delivered
              straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-primary-foreground text-foreground border-0 flex-1"
              />
              <Button
                variant="secondary"
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Subscribe
              </Button>
            </div>

            <p className="text-primary-foreground/70 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
