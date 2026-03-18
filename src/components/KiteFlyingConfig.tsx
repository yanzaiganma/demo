import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, Info } from 'lucide-react';
import { cn } from '../lib/utils';

export function KiteFlyingConfig() {
  const [activeTab, setActiveTab] = useState<'goldfish' | 'koi'>('goldfish');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockPrizes = [
    { id: 'g_001', poolName: '默认概率池', name: '春日风筝', qty: 1, prob: '10.0%', broadcast: true },
    { id: 'g_002', poolName: '默认概率池', name: '一朵小花', qty: 10, prob: '90.0%', broadcast: false },
    { id: 'g_003', poolName: '出水池', name: '一朵小花', qty: 5, prob: '100.0%', broadcast: false },
    { id: 'g_001', poolName: '回血池', name: '春日风筝', qty: 2, prob: '50.0%', broadcast: true },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">筝筝日上配置</h1>
        <p className="text-sm text-slate-500 mt-1">配置金鱼风筝和锦鲤风筝奖池的礼物内容及概率策略（仅限礼物）。</p>
      </div>

      {/* 抽奖逻辑与奖池策略说明 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2 flex items-center">
            <Info className="w-4 h-4 mr-1.5" />
            放风筝（抽奖）逻辑
          </h3>
          <ul className="text-sm text-blue-800 space-y-1.5 list-disc list-inside">
            <li><span className="font-medium">金鱼风筝：</span>单次消耗 1卷线轴（折合50钻石/5元），产出1个奖品。</li>
            <li><span className="font-medium">锦鲤风筝：</span>单次消耗 2卷线轴（折合100钻石/10元），产出1个奖品。</li>
          </ul>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-purple-900 mb-2 flex items-center">
            <Info className="w-4 h-4 mr-1.5" />
            奖池动态切换策略 (RTP)
          </h3>
          <ul className="text-sm text-purple-800 space-y-1.5 list-disc list-inside">
            <li>用户默认进入 <span className="font-medium">默认概率池 (98%)</span>。</li>
            <li>当用户当前投产比 <span className="font-medium">&gt; 100</span> 时，切换至 <span className="font-medium">出水池 (95%)</span>。</li>
            <li>当用户当前投产比 <span className="font-medium">&lt; 95</span> 时，切换至 <span className="font-medium">回血池 (103%)</span>。</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('goldfish')}
              className={cn(
                "w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",
                activeTab === 'goldfish'
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              )}
            >
              金鱼风筝配置
            </button>
            <button
              onClick={() => setActiveTab('koi')}
              className={cn(
                "w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",
                activeTab === 'koi'
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              )}
            >
              锦鲤风筝配置
            </button>
          </nav>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-800">
              {activeTab === 'goldfish' ? '金鱼风筝' : '锦鲤风筝'} 礼物列表
            </h2>
            <button onClick={() => setIsModalOpen(true)} className="flex items-center px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
              <Plus className="w-4 h-4 mr-1" /> 添加礼物
            </button>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-sm text-left text-slate-600">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 font-medium">奖池名称</th>
                  <th className="px-4 py-3 font-medium">礼物ID</th>
                  <th className="px-4 py-3 font-medium">礼物名称</th>
                  <th className="px-4 py-3 font-medium">数量</th>
                  <th className="px-4 py-3 font-medium">实际概率</th>
                  <th className="px-4 py-3 font-medium">跑马灯</th>
                  <th className="px-4 py-3 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody>
                {mockPrizes.map((prize, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50">
                    <td className="px-4 py-3">
                      <span className={cn(
                        "px-2 py-1 rounded text-xs font-medium",
                        prize.poolName === '默认概率池' ? "bg-slate-100 text-slate-700" :
                        prize.poolName === '出水池' ? "bg-red-50 text-red-700" :
                        "bg-green-50 text-green-700"
                      )}>
                        {prize.poolName}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500 font-mono">{prize.id}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">{prize.name}</td>
                    <td className="px-4 py-3 font-medium text-slate-700">x{prize.qty}</td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{prize.prob}</span>
                    </td>
                    <td className="px-4 py-3">
                      {prize.broadcast ? (
                        <span className="text-emerald-600 text-xs font-medium">开启</span>
                      ) : (
                        <span className="text-slate-400 text-xs">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-blue-600 hover:text-blue-800 p-1"><Edit2 className="w-4 h-4" /></button>
                      <button className="text-red-600 hover:text-red-800 p-1 ml-1"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800">添加礼物</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">奖池选择</label>
                <select className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>默认概率池 (98%)</option>
                  <option>出水池 (95%)</option>
                  <option>回血池 (103%)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">礼物ID</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="输入礼物ID" className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <button className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200">检索</button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">礼物名称 (自动带出)</label>
                <input type="text" placeholder="自动带出礼物名称" disabled className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-500 cursor-not-allowed" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">单次产出数量</label>
                  <input type="number" defaultValue="1" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">实际概率 (%)</label>
                  <input type="number" step="0.01" placeholder="例如: 10.0" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 cursor-pointer mt-2">
                  <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
                  <span className="text-sm font-medium text-slate-700">触发全服跑马灯广播</span>
                </label>
                <p className="text-xs text-slate-500 ml-6 mt-1">勾选后，抽中该礼物时将在全服顶部展示横幅广播。</p>
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 flex justify-end gap-3 bg-slate-50">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50">取消</button>
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">保存</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
