"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container detail">
      <h1>Something went wrong</h1>
      <p className="empty">{error.message || "An unexpected error occurred."}</p>
      <button type="button" onClick={() => reset()} className="search-input">
        Try again
      </button>
    </main>
  );
}