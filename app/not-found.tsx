import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container detail">
      <h1>Recipe not found</h1>
      <p className="empty">
        We couldn&apos;t find the recipe you were looking for.
      </p>
      <Link href="/" className="back-link">
        ← Back to all recipes
      </Link>
    </main>
  );
}