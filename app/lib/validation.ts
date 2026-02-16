import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  email: z.string().min(1, "Email is required").email("Invalid email address"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message is too long"),
});

export type FormSchemaType = z.infer<typeof formSchema>;
