import { GraduationCap, Users, Megaphone } from "lucide-react";
import { LinkButton } from "./LinkButton";
import loomisLogo from "@/assets/loomis-logo.png";

const links = [
  {
    title: "Treinamento Comercial",
    description: "Treinamentos práticos para empresas que querem vender mais e melhor.",
    href: "https://wa.me/+5519981391917?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20perfil%20do%20instagram%20e%20quero%20saber%20mais%20sobre%20o%20treinamento%20comercial.",
    variant: "primary" as const,
    icon: GraduationCap,
  },
  {
    title: "Loomis CRM",
    description: "Ferramenta integrada ao WhatsApp para organizar, acompanhar e escalar o processo comercial.",
    href: "https://wa.me/+5519981391917?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20perfil%20do%20instagram%20e%20quero%20saber%20mais%20sobre%20o%20CRM%20Loomis.",
    variant: "primary" as const,
    customIcon: loomisLogo,
  },
  {
    title: "Mentoria em Grupo",
    description: "Acompanhamento estratégico para empresários e líderes comerciais.",
    href: "https://wa.me/+5519981391917?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20perfil%20do%20instagram%20e%20quero%20saber%20mais%20sobre%20Mentoria%20em%20Grupo.",
    variant: "primary" as const,
    icon: Users,
  },
  {
    title: "TASH&CO",
    description: "Agência & Produtora de conteúdo para potencializar a geração de novos clientes para a sua empresa.",
    href: "https://wa.me/+5519981391917?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20perfil%20do%20instagram%20e%20quero%20saber%20mais%20sobre%20a%20TASH%26CO.",
    variant: "neutral" as const,
    icon: Megaphone,
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
          icon={link.icon}
          customIcon={link.customIcon}
          delay={500 + index * 100}
        />
      ))}
    </section>
  );
}
