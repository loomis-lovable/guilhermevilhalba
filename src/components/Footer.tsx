export function Footer() {
  return (
    <footer 
      className="flex flex-col items-center gap-2 py-8 px-4 text-center opacity-0 animate-fade-in"
      style={{ animationDelay: "900ms" }}
    >
      <p className="text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} · Todos os direitos reservados
      </p>
    </footer>
  );
}
