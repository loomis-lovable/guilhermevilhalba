import { TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center px-4 pt-12 pb-8">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50" />
      
      {/* Icon badge */}
      <div className="relative mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary shadow-glow">
          <TrendingUp className="h-8 w-8 text-primary-foreground" />
        </div>
      </div>
      
      {/* Headline */}
      <h1 
        className="relative text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-4 opacity-0 animate-fade-in"
        style={{ animationDelay: "200ms" }}
      >
        Venda mais com processos comerciais{" "}
        <span className="text-gradient-primary">claros, previsíveis e escaláveis.</span>
      </h1>
      
      {/* Subheadline */}
      <p 
        className="relative text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed opacity-0 animate-fade-in"
        style={{ animationDelay: "300ms" }}
      >
        Treinamentos, mentoria e tecnologia para times comerciais de alta performance.
      </p>
      
      {/* Divider */}
      <div 
        className="mt-8 w-20 h-0.5 bg-gradient-primary rounded-full opacity-0 animate-fade-in"
        style={{ animationDelay: "400ms" }}
      />
    </section>
  );
}
