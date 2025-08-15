import { z } from "zod";

export const SERVICES = ["UI/UX", "Branding", "Web Dev", "Mobile App"] as const;

export const OnboardSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name must be at most 80 characters")
    .regex(/^[\p{L}\s'’-]+$/u, "Only letters, spaces, apostrophes, and hyphens allowed"),

  email: z.string().email("Enter a valid email"),

  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be at most 100 characters"),

  services: z
    .array(z.enum(SERVICES))
    .nonempty("Select at least one service"),

  budgetUsd: z
    .preprocess((v) => {
      if (v === "" || v === null || typeof v === "undefined") return undefined;
      const n = typeof v === "number" ? v : Number(v);
      return Number.isNaN(n) ? undefined : n;
    }, z
      .number()
      .int("Budget must be an integer")
      .min(100, "Min is 100")
      .max(1_000_000, "Max is 1,000,000")
      .optional()),

  projectStartDate: z
    .string()
    .refine((val) => {
      if (!val) return false;
      const input = new Date(`${val}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return input >= today;
    }, "Start date must be today or later"),

acceptTerms: z
  .boolean()
  .refine((val) => val === true, {
    message: "You must accept the terms",
  }),

});

export type OnboardInput = z.infer<typeof OnboardSchema>;
