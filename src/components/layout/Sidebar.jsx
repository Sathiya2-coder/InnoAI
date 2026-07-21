import { NavLink } from "react-router-dom";
import {
  Home,
  MessageSquare,
  Folder,
  Lightbulb,
  FileText,
  BarChart2,
  Users,
  Settings,
  LogOut,
  Brain
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/dashboard", icon: Home, label: "Home" },
  { to: "/assistant", icon: MessageSquare, label: "AI Assistant" },
  { to: "/projects", icon: Folder, label: "My Projects" },
  { to: "/ideation", icon: Lightbulb, label: "Ideation Hub" },
  { to: "/resources", icon: FileText, label: "Resources" },
  { to: "/analytics", icon: BarChart2, label: "Analytics" },
  { to: "/team", icon: Users, label: "Team" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

function NavItem({ to, icon: Icon, label }) {
  return (
    <NavLink to={to} className="block w-full">
      {({ isActive }) => (
        <div
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl mx-4 transition-all duration-200",
            isActive
              ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/20"
              : "text-[#6b7280] hover:bg-gray-100/50 hover:text-[#111827]"
          )}
        >
          <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
          <span className="font-semibold text-sm">{label}</span>
        </div>
      )}
    </NavLink>
  );
}

export function Sidebar() {
  return (
    <aside className="w-[260px] h-screen fixed top-0 left-0 flex flex-col bg-[#fdfbf7] border-r border-black/5 z-50">
      <div className="flex items-center gap-2 px-8 pt-8 pb-6">
        <Brain className="text-[var(--accent)]" size={32} />
        <span className="text-2xl font-bold text-[#111827]">
          Inno <span className="text-[var(--accent)]">AI</span>
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 space-y-2">
        {NAV.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>

      <div className="p-4 pb-8">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-[#6b7280] hover:bg-gray-100/50 hover:text-[#111827] transition-all duration-200">
          <LogOut size={20} strokeWidth={2} />
          <span className="font-semibold text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
