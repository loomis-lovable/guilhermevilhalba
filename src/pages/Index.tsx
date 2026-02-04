import { HeroSection } from "@/components/HeroSection";
import { LinksSection } from "@/components/LinksSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Container centralizado e otimizado para mobile */}
      <div className="mx-auto max-w-md">
        <HeroSection />
        <LinksSection />
        <Footer />
      </div>
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Index;
