import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("w-10 h-10", className)}>
      <Image 
        src="/logo.png" 
        alt="SyncTech Logo"
        width={40}
        height={40}
      />
    </div>
  );
}
