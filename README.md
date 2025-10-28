# Asano - Personal Finance App

A modern personal finance tracking application built with Next.js 13+, TypeScript, Redux Toolkit, and Supabase.

## Project Architecture

### Directory Structure

```
asano/
├── app/                   # Next.js 13+ App Router
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Root page with PWA setup
│   └── home/            # Home route
├── components/           # Shared UI components
│   └── ItemCard/        # Reusable transaction card
├── lib/                  # Core business logic
│   ├── features/        # Redux slices & features
│   ├── hooks.ts         # Custom React hooks
│   ├── store.ts         # Redux store configuration
│   └── supabase/        # Database client & helpers
├── types/               # TypeScript type definitions
├── utils/               # Shared utilities
└── public/              # Static assets & PWA files
```

### Key Technologies

- **Next.js 13+**: App Router for server/client components
- **TypeScript**: Full type safety across the application
- **Redux Toolkit**: State management with typed hooks
- **Supabase**: Backend as a service for data storage
- **TailwindCSS**: Utility-first styling

### State Management

- Uses Redux Toolkit for global state
- Implements proper loading/error states
- Typed selectors and actions
- Centralized store configuration

### Data Flow

1. User interactions trigger Redux actions
2. Actions may call Supabase database functions
3. Results update Redux store
4. Components react to state changes

### Components

- Clear separation between client and server components
- Reusable UI components in `/components`
- Route-specific components in respective `/app` directories

### Type Safety

- Strict TypeScript configuration
- Shared type definitions in `/types`
- No use of `any` - proper typing throughout
- Type-safe database operations

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
