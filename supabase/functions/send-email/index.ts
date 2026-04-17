Deno.serve(async (req) => {
  const { nome, cpf, email, telefone, valor_desejado, mensagem } = await req.json();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
    },
    body: JSON.stringify({
      from: "Kredity <onboarding@resend.dev>",
      to: ["atendimento@kredity.com.br"],
      subject: `Novo lead: ${nome}`,
      html: `
        <h2>Novo formulário de contato</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>CPF:</strong> ${cpf}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Valor desejado:</strong> R$ ${valor_desejado ? (valor_desejado / 100).toLocaleString("pt-BR") : "-"}</p>
        <p><strong>Mensagem:</strong> ${mensagem || "-"}</p>
      `,
    }),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
});
