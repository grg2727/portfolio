import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  className?: string;
  featured?: boolean;
}

export function ProjectCard({ title, description, slug, className, featured }: ProjectCardProps) {
  return (
    <Link
      to={`/work/${slug}`}
      className={cn(
        "group block card-project",
        featured && "md:p-10",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <h3 className={cn(
          "font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors",
          featured ? "text-xl md:text-2xl" : "text-lg md:text-xl"
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-muted-foreground leading-relaxed flex-1",
          featured ? "text-base md:text-lg" : "text-sm md:text-base"
        )}>
          {description}
        </p>
        <div className="flex items-center gap-2 mt-4 text-sm font-medium text-primary">
          <span>Read case study</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
