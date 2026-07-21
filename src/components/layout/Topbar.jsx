import { Search, Bell } from "lucide-react";


export function Topbar() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="relative w-full max-w-md">
        <input 
          type="text" 
          placeholder="Search anything..." 
          className="w-full h-11 pl-5 pr-12 rounded-full border border-black/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <Search size={18} />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-500 hover:text-gray-700">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-white">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-sm font-bold text-[#111827]">Pon Gopi</div>
            <div className="text-xs text-[#6b7280]">Student</div>
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
            <svg className="h-8 w-8 text-gray-400 mt-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
