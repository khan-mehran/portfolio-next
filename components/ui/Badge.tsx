import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export default function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "tag-badge",
        variant === "outline" && "bg-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
