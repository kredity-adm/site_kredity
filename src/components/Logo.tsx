import { Link } from "@tanstack/react-router";

export function Logo({ variant = "default" }: { variant?: "default" | "light" }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="/logo.jpg" alt="Kredity" className="h-9 w-auto" />
    </Link>
  );
}
