import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const NewsletterInput = ({
  register,
  name,
  isSubmitting,
  error,
}: {
  register: any
  name: string
  isSubmitting: boolean
  error?: any
}) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        {...register(name)}
        type="email"
        id="email"
        placeholder="Enter your email"
        autoComplete="email"
        className="text-background"
      />
      <Button
        type="submit"
        disabled={isSubmitting || error}
        className="text-primary-background bg-primary-foreground hover:bg-primary-foreground/90"
      >
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Subscribe
      </Button>
    </div>
  )
}
