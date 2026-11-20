import Link from "next/link";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="nav-inner">
        <Link href="/" className="brand">
          🍽️ NextBites
        </Link>
        <span>Fresh Recipes</span>
      </nav>
    </header>
  );
}