import { CircleNotch } from "@phosphor-icons/react/dist/ssr";
import { UseFormRegister } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterInput = ({
  register,
  name,
  isSubmitting,
  error,
}: {
  register: UseFormRegister<{ [key: string]: string }>;
  name: string;
  isSubmitting: boolean;
  error?: string;
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
        variant="outline"
        disabled={isSubmitting || !!error}
        className="text-primary-background bg-primary-foreground hover:bg-primary-foreground/90"
      >
        {isSubmitting && <CircleNotch className="mr-2 size-4 animate-spin" />}
        Subscribe
      </Button>
    </div>
  );
};
