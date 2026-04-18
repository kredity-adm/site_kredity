import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Target, Eye, User, Award } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Kredity — Nossa missão e valores" },
      {
        name: "description",
        content:
          "Conheça a história da Kredity, fintech especializada em empréstimo consignado. Mais de 250 mil clientes e R$ 2 bilhões liberados.",
      },
      { property: "og:title", content: "Sobre a Kredity — Nossa missão e valores" },
      {
        property: "og:description",
        content: "Fintech especializada em consignado, com mais de 250 mil clientes atendidos.",
      },
    ],
  }),
  component: Sobre,
});

const valores = [
  {
    icon: Target,
    title: "Missão",
    desc: "Democratizar o acesso ao crédito justo, com transparência e eficiência.",
  },
  {
    icon: Eye,
    title: "Visão",
    desc: "Ser a fintech de consignado mais confiável e amada do Brasil.",
  },
  {
    icon: User,
    title: "Valores",
    desc: "Empatia, transparência, inovação e responsabilidade financeira.",
  },
  {
    icon: Award,
    title: "Compromisso",
    desc: "Crédito responsável que melhora a vida de quem confia em nós.",
  },
];

function Sobre() {
  return (
    <>
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-sm font-semibold text-accent-green uppercase tracking-wider mb-3">
            Sobre nós
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-brand tracking-tight">
            Crédito que transforma vidas
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Desde 2018, a Kredity vem reinventando a forma como brasileiros acessam empréstimo
            consignado. Tecnologia, transparência e gente que se importa.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">Nossa história</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Na vida, imprevistos acontecem — e ter com quem contar faz toda a diferença. Foi pensando nisso que nasceu a nossa empresa: para oferecer soluções simples, seguras e acessíveis em momentos que exigem apoio financeiro. <br />
              Especializada em empréstimo consignado, nossa missão é facilitar o acesso ao crédito com responsabilidade, transparência e taxas justas. Acreditamos que cada cliente merece ser atendido com respeito, clareza e atenção às suas reais necessidades. <br />
              Mais do que oferecer crédito, queremos construir confiança. Trabalhamos diariamente para garantir um atendimento humanizado, ágil e sem burocracia desnecessária, ajudando aposentados, pensionistas e servidores a realizarem seus planos com tranquilidade. <br />
              Aqui, cada história importa — e temos orgulho de fazer parte de tantas conquistas.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              Hoje, com mais de <strong className="text-brand">4 mil clientes</strong> e mais de{" "}
              <strong className="text-brand">R$ 300 milhões</strong> em crédito liberado, seguimos com
              a mesma missão: oferecer o consignado mais simples, justo e humano do Brasil.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand">O que nos move</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {valores.map((v) => (
              <div
                key={v.title}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-soft transition-smooth"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-green/15 flex items-center justify-center mb-5">
                  <v.icon className="text-brand" size={22} />
                </div>
                <h3 className="font-bold text-xl text-brand mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
            Quer fazer parte da nossa história?
          </h2>
          <Link to="/contato">
            <Button variant="cta" size="xl">
              Falar com a Kredity
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
