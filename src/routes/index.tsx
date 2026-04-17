import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, TrendingDown, Users, ArrowRight, CheckCircle2, Star } from "lucide-react";
import heroImg from "@/assets/hero-kredity.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kredity — Empréstimo consignado com as melhores taxas" },
      { name: "description", content: "Simule seu empréstimo consignado em minutos. Taxas a partir de 1,49% a.m. para INSS, servidores e militares. Aprovação rápida e dinheiro na conta." },
      { property: "og:title", content: "Kredity — Empréstimo consignado com as melhores taxas" },
      { property: "og:description", content: "Simule seu empréstimo consignado em minutos. Taxas a partir de 1,49% a.m." },
    ],
  }),
  component: Home,
});

const benefits = [
  { icon: TrendingDown, title: "Menores taxas", desc: "A partir de 1,49% ao mês, entre as menores do mercado." },
  { icon: Zap, title: "Aprovação rápida", desc: "Análise em minutos e dinheiro na conta em até 24 horas." },
  { icon: ShieldCheck, title: "100% seguro", desc: "Operamos com instituições financeiras reguladas pelo Banco Central." },
  { icon: Users, title: "Atendimento humano", desc: "Especialistas prontos para te ajudar em cada passo." },
];

const stats = [
  { value: "+4 mil", label: "Clientes atendidos" },
  { value: "R$ 300 milhões", label: "Em crédito liberado" },
  { value: "1,49%", label: "Taxa a partir de" },
  { value: "4,5/5", label: "Avaliação dos clientes" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-green/15 text-brand text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                Simulação gratuita em 2 minutos
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-brand leading-[1.05]">
                Empréstimo consignado <span className="text-gradient-brand">do seu jeito.</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Crédito justo, rápido e sem burocracia para aposentados, pensionistas,
                servidores públicos e militares. Mais dinheiro no seu bolso, menos juros.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contato">
                  <Button variant="cta" size="xl" className="w-full sm:w-auto">
                    Simular agora <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/servicos">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    Conhecer serviços
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent-green text-accent-green" />
                  ))}
                </div>
                <span><strong className="text-foreground">4,5/5</strong> em mais de 500 avaliações</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-brand rounded-3xl blur-2xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src={heroImg}
                  alt="Cliente Kredity satisfeita usando o aplicativo"
                  width={1280}
                  height={1280}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-elegant p-5 max-w-[240px] hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-green/20 flex items-center justify-center">
                    <CheckCircle2 className="text-accent-green" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Aprovado</p>
                    <p className="font-bold text-brand">R$ 25.000,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-brand text-brand-foreground">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-green">{s.value}</div>
              <div className="text-sm text-white/70 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-accent-green uppercase tracking-wider mb-3">
              Por que Kredity
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand">
              Crédito que faz sentido para você
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent-green/50 hover:shadow-soft transition-smooth"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth">
                  <b.icon className="text-white" size={22} />
                </div>
                <h3 className="font-semibold text-lg text-brand mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-green/30 rounded-full blur-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Pronto para liberar seu crédito?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Simulação gratuita, sem compromisso. Em poucos minutos você descobre
                quanto pode economizar com a Kredity.
              </p>
              <div className="mt-8">
                <Link to="/contato">
                  <Button variant="hero" size="xl">
                    Fazer simulação grátis <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
