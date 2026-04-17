import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#2c445c] backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm font-medium text-white hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
              activeProps={{ className: "text-brand font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/contato">
            <Button variant="cta" size="lg">
              Simular agora
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-brand"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
                activeProps={{ className: "text-brand font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contato" onClick={() => setOpen(false)}>
              <Button variant="cta" className="w-full">
                Simular agora
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
