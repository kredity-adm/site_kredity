import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { supabaseConfig } from "@/lib/supabase";

function formatCPF(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3}\.)(\d{3})(\d)/, "$1$2.$3")
    .replace(/(\d{3}\.\d{3}\.)(\d{3})(\d)/, "$1$2-$3");
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\(\d{2}\))(\d{4})(\d)/, "$1 $2-$3");
  }
  return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\(\d{2}\))\s(\d{5})(\d)/, "$1 $2-$3");
}

function formatCurrency(value: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  const number = parseInt(digits, 10) / 100;
  return number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fale com a Kredity" },
      {
        name: "description",
        content:
          "Entre em contato com a Kredity. Atendimento humano, simulação gratuita e resposta rápida. WhatsApp, telefone e e-mail.",
      },
      { property: "og:title", content: "Contato — Fale com a Kredity" },
      {
        property: "og:description",
        content: "Atendimento humano e simulação gratuita do seu empréstimo consignado.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [submitting, setSubmitting] = useState(false);
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [valor, setValor] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const valorRaw = formData.get("valor") as string;
    const valorNumerico = valorRaw ? parseFloat(valorRaw.replace(/\D/g, "")) / 100 : null;

    const data = {
      nome: formData.get("nome"),
      cpf: formData.get("cpf"),
      email: formData.get("email"),
      telefone: formData.get("telefone"),
      valor_desejado: valorNumerico,
      mensagem: formData.get("mensagem") || null,
      meio_prospeccao: "Site Kredity",
      data_prospeccao: new Date().toISOString(),
      vendedor_id: "1efc3c65-556d-4f6d-977c-8aa7b192a285",
    };

    fetch(`${supabaseConfig.url}/rest/v1/prospeccao`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseConfig.anonKey,
        Authorization: `Bearer ${supabaseConfig.anonKey}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok)
          return res.text().then((text) => {
            console.error("Erro do Supabase:", text);
            throw new Error(text || "Erro ao salvar");
          });

        fetch(`${supabaseConfig.url}/functions/v1/send-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${supabaseConfig.anonKey}`,
          },
          body: JSON.stringify(data),
        }).catch(console.error);

        setSubmitting(false);
        toast.success("Recebemos seu contato!", {
          description: "Em breve um especialista entrará em contato com você.",
        });
        (e.target as HTMLFormElement).reset();
        setCpf("");
        setTelefone("");
        setValor("");
      })
      .catch((err) => {
        setSubmitting(false);
        console.error(err);
        toast.error(
          err.message || "Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.",
        );
      });
  }

  return (
    <>
      <Toaster />
      <section className="bg-gradient-soft py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-sm font-semibold text-accent-green uppercase tracking-wider mb-3">
            Fale com a gente
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-brand tracking-tight">
            Vamos conversar
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Preencha o formulário e um especialista entra em contato em poucos minutos. Simulação
            gratuita e sem compromisso.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-card rounded-3xl border border-border p-8 md:p-10 shadow-soft">
            <h2 className="text-2xl font-bold text-brand mb-6">Solicite sua simulação</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" name="nome" required className="mt-2" placeholder="Seu nome" />
                </div>
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    name="cpf"
                    required
                    className="mt-2"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(formatCPF(e.target.value))}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2"
                    placeholder="seuemail@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    required
                    className="mt-2"
                    placeholder="(11) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(formatPhone(e.target.value))}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="valor">Valor desejado</Label>
                <Input
                  id="valor"
                  name="valor"
                  className="mt-2"
                  placeholder="R$ 10.000,00"
                  value={valor}
                  onChange={(e) => setValor(formatCurrency(e.target.value))}
                />
              </div>
              <div>
                <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  className="mt-2 min-h-28"
                  placeholder="Conte um pouco sobre o que você precisa..."
                />
              </div>
              <Button
                type="submit"
                variant="cta"
                size="xl"
                className="w-full"
                disabled={submitting}
              >
                {submitting ? "Enviando..." : "Enviar e simular"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              value="(61) 98515-9641"
              hint="Resposta em minutos"
              highlight
            />
            <ContactCard
              icon={Phone}
              title="Telefone"
              value="(61) 98515-9641"
              hint="Seg a Sex, 9h às 17h"
            />
            <ContactCard
              icon={Mail}
              title="E-mail"
              value="atendimento@kredity.com.br"
              hint="Resposta em até 24h"
            />
            <ContactCard
              icon={MapPin}
              title="Endereço"
              value="Setor Comercial Sul, Edificio Planalto Sala 303"
              hint="Brasilia, DF"
            />
            <ContactCard
              icon={Clock}
              title="Atendimento"
              value="Seg a Sex, 9h às 17h"
              hint="Sáb 9h às 14h"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  hint,
  highlight,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  value: string;
  hint: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 border transition-smooth ${
        highlight
          ? "bg-gradient-brand text-white border-transparent shadow-soft"
          : "bg-card border-border hover:border-accent-green/40"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
            highlight ? "bg-white/20" : "bg-accent-green/15"
          }`}
        >
          <Icon size={20} className={highlight ? "text-white" : "text-brand"} />
        </div>
        <div className="min-w-0">
          <p
            className={`text-xs uppercase tracking-wider font-semibold ${highlight ? "text-white/70" : "text-muted-foreground"}`}
          >
            {title}
          </p>
          <p className={`font-bold mt-0.5 ${highlight ? "text-white" : "text-brand"}`}>{value}</p>
          <p className={`text-xs mt-0.5 ${highlight ? "text-white/70" : "text-muted-foreground"}`}>
            {hint}
          </p>
        </div>
      </div>
    </div>
  );
}
