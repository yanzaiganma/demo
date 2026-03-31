import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function SpringShopConfig() {
  const [activeTab, setActiveTab] = useState<'leaf' | 'dew'>('leaf');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prizeCategory, setPrizeCategory] = useState('礼物');
  const [editingPrize, setEditingPrize] = useState<any>(null);
  const [deletingPrize, setDeletingPrize] = useState<any>(null);

  const mockPrizes = [
    { id: 'p_001', type: '装扮', name: '春日花车', duration: '7天', getQty: 1, poolQty: 100, prob: '1.5%' },
    { id: 'p_002', type: '道具', name: '改名卡', duration: '永久', getQty: 1, poolQty: 500, prob: '5.0%' },
    { id: 'p_003', type: '礼物', name: '一朵小花', duration: '永久', getQty: 5, poolQty: 10000, prob: '93.5%' },
  ];

  const openEditModal = (prize?: any) => {
    setEditingPrize(prize || null);
    if (prize) setPrizeCategory(prize.type);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
    setEditingPrize(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">春日小铺配置 <span className="text-sm font-normal text-emerald-600 bg-emerald-50 px-2 py-1 rounded ml-2">应用数量奖池</span></h1>
        <p className="text-sm text-slate-500 mt-2">配置春叶奖池和甘露奖池的奖品内容。</p>
        <p className="text-xs text-amber-600 mt-1 bg-amber-50 inline-block px-2 py-1 rounded border border-amber-100">注：因采用数量奖池逻辑，此处不再配置概率，系统根据配置数量自动推导剩余概率。</p>
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
            <button onClick={() => openEditModal()} className="flex items-center px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
              <Plus className="w-4 h-4 mr-1" /> 添加奖品
            </button>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-sm text-left text-slate-600">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 font-medium">分类</th>
                  <th className="px-4 py-3 font-medium">奖品id</th>
                  <th className="px-4 py-3 font-medium">获得时长</th>
                  <th className="px-4 py-3 font-medium">获得数量</th>
                  <th className="px-4 py-3 font-medium">奖池数量</th>
                  <th className="px-4 py-3 font-medium">系统推导概率</th>
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
                      <div className="font-medium text-slate-900">{prize.id}</div>
                      <div className="text-xs text-slate-400">{prize.name}</div>
                    </td>
                    <td className="px-4 py-3">{prize.duration}</td>
                    <td className="px-4 py-3 font-medium text-slate-700">x{prize.getQty}</td>
                    <td className="px-4 py-3 font-medium text-slate-700">{prize.poolQty}</td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{prize.prob}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button onClick={() => openEditModal(prize)} className="text-blue-600 hover:text-blue-800 p-1"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => setDeletingPrize(prize)} className="text-red-600 hover:text-red-800 p-1 ml-1"><Trash2 className="w-4 h-4" /></button>
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
              <h3 className="text-lg font-semibold text-slate-800">{editingPrize ? '编辑奖品' : '添加奖品'}</h3>
              <button onClick={closeEditModal} className="text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
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
                <input type="text" defaultValue={editingPrize?.id} placeholder="输入奖品ID" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              
              {prizeCategory === '道具' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">自定义道具名称</label>
                  <input type="text" defaultValue={editingPrize?.name} placeholder="输入道具名称" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              )}

              {(prizeCategory === '道具' || prizeCategory === '礼物') && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">获得数量</label>
                  <input type="number" defaultValue={editingPrize?.getQty || 1} className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              )}

              {(prizeCategory === '道具' || prizeCategory === '装扮') && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">获得时长 (天)</label>
                  <input type="number" defaultValue={editingPrize?.duration?.replace('天', '')} placeholder="填0或空为永久" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">奖池数量</label>
                <input type="number" defaultValue={editingPrize?.poolQty} placeholder="输入该奖品在奖池中的总数量" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 flex justify-end gap-3 bg-slate-50">
              <button onClick={closeEditModal} className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50">取消</button>
              <button onClick={closeEditModal} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">保存</button>
            </div>
          </div>
        </div>
      )}

      {deletingPrize && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">确认删除</h3>
            <p className="text-sm text-slate-600 mb-6">确定要删除‘{deletingPrize.name}’吗？</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeletingPrize(null)} className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50">取消</button>
              <button onClick={() => setDeletingPrize(null)} className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700">确定</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
