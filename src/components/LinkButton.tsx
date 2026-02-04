import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  title: string;
  description: string;
  href: string;
  variant?: "primary" | "neutral";
  delay?: number;
  icon?: LucideIcon;
  customIcon?: string;
}

export function LinkButton({ 
  title, 
  description, 
  href, 
  variant = "primary", 
  delay = 0,
  icon: Icon,
  customIcon
}: LinkButtonProps) {
  const isPrimary = variant === "primary";
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex w-full flex-col gap-2 rounded-xl p-5 transition-all duration-300",
        "border border-border/50 backdrop-blur-sm",
        "hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]",
        "opacity-0 animate-fade-in",
        isPrimary 
          ? "bg-gradient-card hover:border-primary/50 hover:shadow-button" 
          : "bg-card hover:border-foreground/30 hover:shadow-card"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div 
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          isPrimary 
            ? "bg-primary/5" 
            : "bg-foreground/5"
        )} 
      />
      
      <div className="relative flex items-center gap-3">
        {/* Icon */}
        {(customIcon || Icon) && (
          <div className={cn(
            "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
            isPrimary ? "bg-primary/20" : "bg-foreground/10"
          )}>
            {customIcon ? (
              <img src={customIcon} alt="" className="w-6 h-6 object-contain" />
            ) : Icon ? (
              <Icon className={cn(
                "w-5 h-5",
                isPrimary ? "text-primary" : "text-foreground"
              )} />
            ) : null}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {title}
            </h3>
            <ArrowRight 
              className={cn(
                "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0",
                isPrimary ? "text-primary" : "text-foreground"
              )} 
            />
          </div>
        </div>
      </div>
      
      <p className="relative text-sm text-muted-foreground leading-relaxed pl-0">
        {description}
      </p>
      
      {/* Accent line */}
      <div 
        className={cn(
          "absolute bottom-0 left-5 right-5 h-0.5 rounded-full transition-all duration-300",
          "opacity-0 group-hover:opacity-100",
          isPrimary ? "bg-gradient-primary" : "bg-foreground/50"
        )} 
      />
    </a>
  );
}
