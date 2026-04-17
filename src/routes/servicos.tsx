import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Briefcase, User, Shield, Building2, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Empréstimo Consignado | Kredity" },
      {
        name: "description",
        content:
          "Empréstimo consignado para INSS, servidores públicos federais e estaduais, militares e empresas privadas. Conheça nossas modalidades.",
      },
      { property: "og:title", content: "Serviços — Empréstimo Consignado | Kredity" },
      {
        property: "og:description",
        content: "Modalidades de consignado para cada perfil: INSS, servidores, militares e CLT.",
      },
    ],
  }),
  component: Servicos,
});

const servicos = [
  {
    icon: User,
    title: "Consignado INSS",
    desc: "Para aposentados e pensionistas do INSS.Taxas exclusivas e parcelamento estendido.",
    features: [
      "Até 96 meses para pagar",
      "Taxa a partir de 1,49% a.m.",
      "Margem de 35% do benefício",
    ],
  },
  {
    icon: Briefcase,
    title: "Servidores Públicos",
    desc: "Federal, estadual e municipal. Convênios com mais de 200 órgãos em todo o Brasil.",
    features: [
    "Até 96 meses para pagar", 
    "Taxa a partir de 1,29% a.m.", 
    "Aprovação prioritária"],
  },
  {
    icon: Shield,
    title: "Militares",
    desc: "Forças Armadas (Exército, Marinha, Aeronáutica). Condições especiais para quem serve ao país.",
    features: ["Até 96 meses para pagar", "Taxa a partir de 1,70% a.m.", "Atendimento dedicado"],
  },
  {
    icon: Building2,
    title: "Empresas Privadas",
    desc: "Para colaboradores CLT de empresas conveniadas. Desconto direto em folha.",
    features: [
      "Até 60 meses para pagar",
      "Taxa a partir de 1,89% a.m.",
      "Sem consulta ao SPC/Serasa",
    ],
  },
];

function Servicos() {
  return (
    <>
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-sm font-semibold text-accent-green uppercase tracking-wider mb-3">
            Nossos serviços
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-brand tracking-tight">
            Crédito sob medida para o seu perfil
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A Kredity oferece empréstimo consignado para diferentes categorias, sempre com as
            melhores condições do mercado.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6 max-w-6xl">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6">
                <s.icon className="text-white" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-brand mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
              <ul className="space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-accent-green" strokeWidth={3} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-brand text-white p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Não sabe qual é o seu caso?</h2>
            <p className="mt-4 text-white/80">
              Fale com um especialista e descubra a melhor opção para você.
            </p>
            <Link to="/contato" className="inline-block mt-8">
              <Button variant="cta" size="xl">
                Falar com especialista <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
