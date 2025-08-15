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

