import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("text-2xl font-bold tracking-tight text-foreground", className)}>
      SYNC<span className="text-primary">TECH</span>
    </div>
  );
}
