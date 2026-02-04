import { LinkButton } from "./LinkButton";

const links = [
  {
    title: "Treinamento Comercial",
    description: "Treinamentos práticos para empresas que querem vender mais e melhor.",
    href: "#treinamento",
    variant: "primary" as const,
  },
  {
    title: "Loomis CRM",
    description: "Ferramenta integrada ao WhatsApp para organizar, acompanhar e escalar o processo comercial.",
    href: "#loomis",
    variant: "primary" as const,
  },
  {
    title: "Mentoria em Grupo",
    description: "Acompanhamento estratégico para empresários e líderes comerciais.",
    href: "#mentoria",
    variant: "primary" as const,
  },
  {
    title: "TASH&CO",
    description: "Agência & Produtora de conteúdo para potencializar a geração de novos clientes para a sua empresa.",
    href: "#tashco",
    variant: "neutral" as const,
  },
];

export function LinksSection() {
  return (
    <section className="flex flex-col gap-4 px-4 pb-8">
      {links.map((link, index) => (
        <LinkButton
          key={link.title}
          title={link.title}
          description={link.description}
          href={link.href}
          variant={link.variant}
          delay={500 + index * 100}
        />
      ))}
    </section>
  );
}
