import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground mt-24">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
            Soluções inteligentes em empréstimo consignado. <br />
            Crédito justo, rápido e sem complicação para quem merece o melhor.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent-green">
            Navegação
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white transition-smooth">Início</Link></li>
            <li><Link to="/servicos" className="hover:text-white transition-smooth">Serviços</Link></li>
            <li><Link to="/sobre" className="hover:text-white transition-smooth">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-white transition-smooth">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent-green">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Phone size={14} />(61) 98515-9641</li>
            <li className="flex items-center gap-2"><Mail size={14} />atendimento@kredity.com.br</li>
            <li className="flex items-center gap-2"><MapPin size={14} />Brasilia, DF</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Kredity. Todos os direitos reservados.</p>
          <p>CNPJ: 56.227.725/0001-71 · Correspondente bancário</p>
        </div>
      </div>
    </footer>
  );
}
