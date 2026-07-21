import { ArrowRight, MessageSquare, Lightbulb, Folder, FileText, Rocket } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import AnimatedBrain from "../components/AnimatedBrain";

const chartData = [
  { day: "Mon", usage: 35 },
  { day: "Tue", usage: 60 },
  { day: "Wed", usage: 85 },
  { day: "Thu", usage: 90 },
  { day: "Fri", usage: 50 },
  { day: "Sat", usage: 25 },
  { day: "Sun", usage: 65 },
];

const projects = [
  { id: 1, name: "Smart Waste Management System", time: "Updated 2 hours ago", status: "In Progress", color: "blue", icon: "♻️" },
  { id: 2, name: "AI Based Crop Recommendation", time: "Updated 1 day ago", status: "Completed", color: "green", icon: "🌱" },
  { id: 3, name: "Voice Assistant for Education", time: "Updated 3 days ago", status: "In Progress", color: "blue", icon: "🎤" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-6xl">
      {/* Hero Section */}
      <div className="bg-[#fcfaf6] rounded-[32px] p-10 flex items-center justify-between border border-black/5 relative overflow-hidden shadow-sm">
        <div className="max-w-xl relative z-10">
          <h2 className="text-2xl font-bold text-[#111827] mb-1">Welcome to</h2>
          <h1 className="text-6xl font-extrabold text-[#111827] mb-4">Inno <span className="text-[var(--accent)]">AI</span></h1>
          <h3 className="text-lg font-bold text-[#111827] mb-3">Your AI-Powered <span className="text-[var(--accent)]">Innovation</span> Partner</h3>
          <p className="text-[#6b7280] mb-8 leading-relaxed text-sm max-w-md">
            Discover ideas, build solutions, and bring your innovations to life with the power of AI.
          </p>
          <button className="bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-md shadow-[var(--accent)]/20">
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        {/* Animated Brain SVG */}
        <AnimatedBrain className="hidden lg:block relative z-10 w-[350px] h-[350px] opacity-80" />
        
        {/* Decorative background shape */}
        <div className="absolute right-[-10%] top-[-20%] w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl font-bold text-[#111827] mb-4">What would you like to do today?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: MessageSquare, title: "AI Assistant", desc: "Ask anything and get intelligent answers" },
            { icon: Lightbulb, title: "Ideation Hub", desc: "Generate and explore innovative ideas" },
            { icon: Folder, title: "My Projects", desc: "Manage and track your projects" },
            { icon: FileText, title: "Resources", desc: "Explore learning materials and tools" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-black/5 hover:shadow-md transition-shadow cursor-pointer group flex flex-col justify-between min-h-[140px]">
              <div>
                <item.icon className="text-[var(--accent)] mb-3" size={24} />
                <h4 className="font-bold text-[#111827] text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#6b7280] line-clamp-2">{item.desc}</p>
              </div>
              <div className="flex justify-end mt-2">
                <ArrowRight size={16} className="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Recent Projects */}
        <div className="lg:col-span-7 bg-white rounded-[24px] border border-black/5 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-[#111827]">Recent Projects</h3>
            <button className="text-sm font-semibold text-[var(--accent)] hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {projects.map((proj) => (
              <div key={proj.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center text-xl">
                    {proj.icon}
                  </div>
                  <div>
                    <div className="font-bold text-[#111827] text-sm">{proj.name}</div>
                    <div className="text-xs text-[#6b7280] mt-0.5">{proj.time}</div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${proj.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
                  {proj.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Usage Overview */}
        <div className="lg:col-span-5 bg-white rounded-[24px] border border-black/5 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-[#111827]">AI Usage Overview</h3>
            <select className="text-xs border-none bg-transparent text-[#6b7280] font-medium outline-none">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ color: 'var(--accent)', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="usage" stroke="var(--accent)" strokeWidth={3} fillOpacity={1} fill="url(#colorUsage)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[var(--accent)] rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between text-white shadow-lg shadow-[var(--accent)]/20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-full bg-white/10 skew-x-12 translate-x-10"></div>
        <div className="flex items-center gap-4 relative z-10 mb-4 sm:mb-0">
          <div className="bg-white/20 p-3 rounded-full">
            <Rocket size={24} />
          </div>
          <div>
            <h3 className="font-bold text-xl">Ready to Innovate?</h3>
            <p className="text-white/80 text-sm">Let Inno AI help you turn your ideas into reality.</p>
          </div>
        </div>
        <button className="bg-white text-[var(--accent)] hover:bg-gray-50 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors relative z-10 w-full sm:w-auto justify-center">
          Start Innovating <ArrowRight size={18} />
        </button>
      </div>

    </div>
  );
}
