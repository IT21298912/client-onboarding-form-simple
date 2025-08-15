"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OnboardSchema, OnboardInput, SERVICES } from "@/app/lib/schema";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function todayLocalISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); // avoid timezone shift
  return d.toISOString().slice(0, 10);
}

export default function OnboardingPage() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<OnboardInput | null>(null);

  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    getValues,
  } = useForm<OnboardInput>({
    resolver: zodResolver(OnboardSchema) as any,
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      services: [],
      budgetUsd: undefined,
      projectStartDate: todayLocalISO(), // default today
      acceptTerms: false as any,
    } as OnboardInput,
  });

  // Bonus: Prefill from query param ?service=UI%2FUX
  useEffect(() => {
    const s = searchParams.get("service");
    if (s && SERVICES.includes(s as any)) {
      const current = getValues("services");
      if (!current.includes(s as any)) {
        setValue("services", [...current, s as any], { shouldValidate: true });
      }
    }
  }, [searchParams, getValues, setValue]);

  const onSubmit = async (data: OnboardInput) => {
    setServerError(null);
    setServerSuccess(null);

    try {
      const res = await fetch("/api/onboard", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});


      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      setServerSuccess(data);
      reset({
        ...data,
        projectStartDate: todayLocalISO(), // reset date to today
        acceptTerms: false as any,
      });
    } catch (err: any) {
      setServerError(err.message || "Something went wrong");
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Client Onboarding</h1>

      {serverError && (
        <div className="bg-red-100 text-red-800 p-3 mb-4 rounded">
          {serverError}
        </div>
      )}

      {serverSuccess && (
        <div className="bg-green-100 text-green-800 p-3 mb-4 rounded">
          Form submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            {...register("fullName")}
            className="border rounded w-full p-2"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="border rounded w-full p-2"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block font-medium">Company Name</label>
          <input
            {...register("companyName")}
            className="border rounded w-full p-2"
          />
          {errors.companyName && (
            <p className="text-red-600 text-sm">{errors.companyName.message}</p>
          )}
        </div>

        {/* Services */}
        <fieldset>
          <legend className="font-medium">Services Interested In</legend>
          <div className="space-y-1">
            {SERVICES.map((service) => (
              <label key={service} className="block">
                <input
                  type="checkbox"
                  value={service}
                  {...register("services")}
                  className="mr-2"
                />
                {service}
              </label>
            ))}
          </div>
          {errors.services && (
            <p className="text-red-600 text-sm">{errors.services.message}</p>
          )}
        </fieldset>

        {/* Budget */}
        <div>
          <label className="block font-medium">Budget (USD) - optional</label>
          <input
            type="number"
            {...register("budgetUsd")}
            className="border rounded w-full p-2"
          />
          {errors.budgetUsd && (
            <p className="text-red-600 text-sm">{errors.budgetUsd.message}</p>
          )}
        </div>

        {/* Project Start Date */}
        <div>
          <label className="block font-medium">Project Start Date</label>
          <input
            type="date"
            min={todayLocalISO()} // ✅ no past dates
            {...register("projectStartDate")}
            className="border rounded w-full p-2"
          />
          {errors.projectStartDate && (
            <p className="text-red-600 text-sm">
              {errors.projectStartDate.message}
            </p>
          )}
        </div>

        {/* Accept Terms */}
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" {...register("acceptTerms")} className="mr-2" />
            Accept Terms
          </label>
          {errors.acceptTerms && (
            <p className="text-red-600 text-sm">{errors.acceptTerms.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </main>
  );
}
