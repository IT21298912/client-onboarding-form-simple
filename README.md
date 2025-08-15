<<<<<<< HEAD
# Client Onboarding Form

A modern **client onboarding form** built with **Next.js**, **React**, **React Hook Form**, and **Zod** for schema validation. This project demonstrates form handling, validation, and submission entirely within Next.js, with a clean UI using Tailwind CSS.

---

## Demo

<!-- You can replace these with actual screenshots or GIFs -->

Form validates input, handles submission, and ensures terms are accepted.

---

## Features

- **Form Validation**: Powered by [Zod](https://github.com/colinhacks/zod) for type-safe schema validation.
- **React Hook Form Integration**: Efficient form state management and validation.
- **Dynamic Defaults**: Prefills fields from URL query parameters (e.g., `?service=UI/UX`).
- **Project Start Date Validation**: Ensures date cannot be in the past.
- **Terms Acceptance Validation**: Ensures users accept terms before submission.
- **API Integration**: Handles form submission through a Next.js API route (`/api/onboard`).
- **Optional Budget Field**: Validates numeric input within a specified range.
- **Tailwind CSS Styling**: Clean, responsive design for modern UI.
- **Unit Testing**: Zod schema tests using **Vitest**.

---

## Tech Stack

- **Next.js 15**
- **React 19**
- **TypeScript**
- **React Hook Form**
- **Zod**
- **Tailwind CSS**
- **Vitest** for unit testing

---

## Getting Started

### Prerequisites

- Node.js >= 20
- npm >= 9

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/client-onboarding-form.git
cd client-onboarding-form
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 6cc00e7 (Initial commit from Create Next App)
