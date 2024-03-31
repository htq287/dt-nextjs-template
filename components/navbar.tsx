import Link from "next/link";

export default async function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/signin">Sign in</Link>
        </li>
      </ul>
    </header>
  );
}