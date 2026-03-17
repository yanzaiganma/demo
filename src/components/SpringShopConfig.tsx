import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function SpringShopConfig() {
  const [activeTab, setActiveTab] = useState<'leaf' | 'dew'>('leaf');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prizeCategory, setPrizeCategory] = useState('礼物');

  const mockPrizes = [
    { id: 'p_001', type: '装扮', name: '春日花车', duration: '7天', qty: 1, prob: '1.5%' },
    { id: 'p_002', type: '道具', name: '改名卡', duration: '永久', qty: 1, prob: '5.0%' },
    { id: 'p_003', type: '礼物', name: '一朵小花', duration: '永久', qty: 5, prob: '93.5%' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">春日小铺配置</h1>
        <p className="text-sm text-slate-500 mt-1">配置春叶奖池和甘露奖池的奖品内容。</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('leaf')}
              className={cn(
                "w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",
                activeTab === 'leaf'
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              )}
            >
              春叶奖池配置
            </button>
            <button
              onClick={() => setActiveTab('dew')}
              className={cn(
                "w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",
                activeTab === 'dew'
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              )}
            >
              甘露奖池配置
            </button>
          </nav>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-800">奖品列表</h2>
            <button onClick={() => setIsModalOpen(true)} className="flex items-center px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
              <Plus className="w-4 h-4 mr-1" /> 添加奖品
            </button>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-sm text-left text-slate-600">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 font-medium">分类</th>
                  <th className="px-4 py-3 font-medium">奖品ID/名称</th>
                  <th className="px-4 py-3 font-medium">时长</th>
                  <th className="px-4 py-3 font-medium">数量</th>
                  <th className="px-4 py-3 font-medium">实际概率</th>
                  <th className="px-4 py-3 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody>
                {mockPrizes.map((prize, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50">
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">{prize.type}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-slate-900">{prize.name}</div>
                      <div className="text-xs text-slate-400">{prize.id}</div>
                    </td>
                    <td className="px-4 py-3">{prize.duration}</td>
                    <td className="px-4 py-3 font-medium text-slate-700">x{prize.qty}</td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{prize.prob}</span>
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
              <h3 className="text-lg font-semibold text-slate-800">添加奖品</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">分类</label>
                <select 
                  value={prizeCategory} 
                  onChange={(e) => setPrizeCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option>装扮</option>
                  <option>礼物</option>
                  <option>道具</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">奖品ID</label>
                <input type="text" placeholder="输入奖品ID" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              
              {prizeCategory === '道具' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">自定义道具名称</label>
                  <input type="text" placeholder="输入道具名称" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              )}

              {(prizeCategory === '道具' || prizeCategory === '礼物') && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">数量</label>
                  <input type="number" defaultValue="1" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              )}

              {(prizeCategory === '道具' || prizeCategory === '装扮') && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">时长 (天)</label>
                    <input type="number" placeholder="填0或空为永久" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">实际概率 (%)</label>
                    <input type="number" step="0.01" placeholder="例如: 1.5" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                </>
              )}
              
              {prizeCategory === '礼物' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">实际概率 (%)</label>
                  <input type="number" step="0.01" placeholder="例如: 90.0" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              )}
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
