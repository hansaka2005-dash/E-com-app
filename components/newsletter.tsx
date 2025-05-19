import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter to receive updates on new products, special offers, and tech tips.
        </p>

        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Your email address"
            className="bg-primary-foreground text-primary placeholder:text-gray-500"
            required
          />
          <Button variant="secondary">Subscribe</Button>
        </form>
      </div>
    </section>
  )
}
