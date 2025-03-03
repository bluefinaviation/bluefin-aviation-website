import { z } from "zod";

export const RequestPlaneQuoteSchema = z.object({
  name: z
    .string()
    .min(1, "Name must be at least 1 character long.")
    .max(100, "Name must be less than 100 characters long."),
  email: z.string().email("Invalid email address."),
  origin: z.string().min(1, "Origin must be at least 1 character long."),
  departure: z.coerce
    .date()
    .min(new Date(), "Departure date must be in the future."),
  destination: z
    .string()
    .min(1, "Destination must be at least 1 character long."),
  arrival: z.coerce
    .date()
    .min(new Date(), "Arrival date must be in the future."),
  plane: z.string(),
  passengers: z.coerce.number().min(1, "Passengers must be at least 1."),
  message: z
    .string()
    .min(1, "Message must be at least 1 character long.")
    .max(1000, "Message must be less than 1000 characters long."),
});

export const ContactFormSchema = z.object({
  firstName: z.string().min(1, "First name must be at least 1 character long."),
  lastName: z.string().min(1, "Last name must be at least 1 character long."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(1, "Phone must be at least 1 character long."),
  topic: z.enum(["Jet Charter", "Flight Support", "Fuel Suppoert", "Other"], {
    required_error: "Please select a topic",
  }),
  message: z.string().min(1, "Message must be at least 1 character long."),
});

export const NewsletterSchema = z.object({
  email: z.string().email("Invalid email address."),
});
