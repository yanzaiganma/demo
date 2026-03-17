import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { BasicSettings } from './components/BasicSettings';
import { TaskConfig } from './components/TaskConfig';
import { SpringShopConfig } from './components/SpringShopConfig';
import { KiteFlyingConfig } from './components/KiteFlyingConfig';
import { LeaderboardConfig } from './components/LeaderboardConfig';
import { DataDashboard } from './components/DataDashboard';

export type ActiveTab = 'basic' | 'tasks' | 'spring_shop' | 'kite_flying' | 'leaderboard' | 'dashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('basic');

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'basic' && <BasicSettings />}
          {activeTab === 'tasks' && <TaskConfig />}
          {activeTab === 'spring_shop' && <SpringShopConfig />}
          {activeTab === 'kite_flying' && <KiteFlyingConfig />}
          {activeTab === 'leaderboard' && <LeaderboardConfig />}
          {activeTab === 'dashboard' && <DataDashboard />}
        </div>
      </main>
    </div>
  );
}
