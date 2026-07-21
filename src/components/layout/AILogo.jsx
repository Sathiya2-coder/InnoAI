import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const AILogo = ({ size = 24, className }) => {
  return (
    <div className={cn("text-[var(--accent)] flex items-center justify-center", className)}>
      <Brain size={size} strokeWidth={2.5} />
    </div>
  );
};

export default AILogo;
