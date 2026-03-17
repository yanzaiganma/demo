import React from 'react';
import { Settings, CheckSquare, Store, Wind, Trophy, BarChart3, Flower2 } from 'lucide-react';
import { ActiveTab } from '../App';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'basic', label: '基础设置', icon: <Settings className="w-5 h-5" /> },
    { id: 'tasks', label: '任务配置', icon: <CheckSquare className="w-5 h-5" /> },
    { id: 'spring_shop', label: '春日小铺配置', icon: <Store className="w-5 h-5" /> },
    { id: 'kite_flying', label: '筝筝日上配置', icon: <Wind className="w-5 h-5" /> },
    { id: 'leaderboard', label: '榜单配置', icon: <Trophy className="w-5 h-5" /> },
    { id: 'dashboard', label: '数据看板', icon: <BarChart3 className="w-5 h-5" /> },
  ];

  return (
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-slate-200">
        <Flower2 className="w-6 h-6 text-emerald-500 mr-2" />
        <span className="font-semibold text-lg tracking-tight">春日踏青后台</span>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              activeTab === item.id
                ? "bg-emerald-50 text-emerald-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <span className={cn("mr-3", activeTab === item.id ? "text-emerald-500" : "text-slate-400")}>
              {item.icon}
            </span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
            OP
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-slate-700">运营人员</p>
            <p className="text-xs text-slate-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
