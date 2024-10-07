"use client";
// Error boundary should always ne client component
// This error boundary might not catch errors which might occur in the root layout

// The Error component gets access to error and reset arguments

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        onClick={reset}
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Try again
      </button>
    </main>
  );
}
