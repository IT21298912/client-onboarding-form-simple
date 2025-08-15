import { describe, it, expect } from "vitest";
import { OnboardSchema } from "../lib/schema";

describe("OnboardSchema validation", () => {
  it("should fail if fullName is too short", () => {
    const result = OnboardSchema.safeParse({
      fullName: "A",
      email: "test@example.com",
      companyName: "Company",
      services: ["UI/UX"],
      budgetUsd: 500,
      projectStartDate: "2099-01-01",
      acceptTerms: true,
    });
    expect(result.success).toBe(false);
  });

  it("should pass with valid data", () => {
    const result = OnboardSchema.safeParse({
      fullName: "John Doe",
      email: "john@example.com",
      companyName: "Tech Corp",
      services: ["UI/UX"],
      budgetUsd: 500,
      projectStartDate: "2099-01-01",
      acceptTerms: true,
    });
    expect(result.success).toBe(true);
  });
});
