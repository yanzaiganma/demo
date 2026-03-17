import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function TaskConfig() {
  const [activeTab, setActiveTab] = useState<'active' | 'recharge'>('active');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<any>(null);

  const openModal = (task?: any) => {
    setEditingTask(task || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const mockTasks = [
    { id: 't_001', name: '每日首次签到', type: '登录', params: '-', reward: '春叶 x 10', refresh: '每日刷新', link: '-', status: true },
    { id: 't_002', name: '送出任意礼物', type: '送礼', params: '任意', reward: '春叶 x 20', refresh: '每日刷新', link: 'app://gift', status: true },
    { id: 't_003', name: '房间停留15分钟', type: '停留房间', params: '15分钟', reward: '春叶 x 15', refresh: '每日刷新', link: 'app://room_list', status: true },
    { id: 't_004', name: '关注3名新主播', type: '关注', params: '3人', reward: '春叶 x 50', refresh: '一次性', link: 'app://recommend', status: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">任务与材料配置</h1>
        <p className="text-sm text-slate-500 mt-1">配置“春叶”和“甘露”的产出途径和条件。</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('active')}
              className={cn(
                "w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",
                activeTab === 'active'
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              )}
            >
              活跃任务配置 (产出春叶)
            </button>
            <button
              onClick={() => setActiveTab('recharge')}
              className={cn(
                "w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",
                activeTab === 'recharge'
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              )}
            >
              充值返利配置 (产出甘露)
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'active' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-base font-semibold text-slate-800">任务列表</h2>
                <button onClick={() => openModal()} className="flex items-center px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
                  <Plus className="w-4 h-4 mr-1" /> 新增任务
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600">
                  <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-y border-slate-200">
                    <tr>
                      <th className="px-4 py-3 font-medium">任务ID/名称</th>
                      <th className="px-4 py-3 font-medium">触发器</th>
                      <th className="px-4 py-3 font-medium">条件参数</th>
                      <th className="px-4 py-3 font-medium">奖励配置</th>
                      <th className="px-4 py-3 font-medium">刷新机制</th>
                      <th className="px-4 py-3 font-medium">前端跳转</th>
                      <th className="px-4 py-3 font-medium">状态</th>
                      <th className="px-4 py-3 font-medium text-right">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTasks.map((task, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="px-4 py-3">
                          <div className="font-medium text-slate-900">{task.name}</div>
                          <div className="text-xs text-slate-400">{task.id}</div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">{task.type}</span>
                        </td>
                        <td className="px-4 py-3">{task.params}</td>
                        <td className="px-4 py-3 text-emerald-600 font-medium">{task.reward}</td>
                        <td className="px-4 py-3">{task.refresh}</td>
                        <td className="px-4 py-3 text-xs text-slate-400 truncate max-w-[100px]">{task.link}</td>
                        <td className="px-4 py-3">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked={task.status} />
                            <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                          </label>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button onClick={() => openModal(task)} className="text-blue-600 hover:text-blue-800 p-1"><Edit2 className="w-4 h-4" /></button>
                          <button className="text-red-600 hover:text-red-800 p-1 ml-1"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'recharge' && (
            <div className="max-w-xl space-y-6">
              <div className="bg-blue-50 border border-blue-100 text-blue-800 text-sm p-4 rounded-lg">
                统计周期：仅限活动时间内的充值。活动结束后充值不再返还甘露。
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">兑换比例设置</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">每充值</span>
                    <input type="number" defaultValue="100" className="w-24 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-center" />
                    <span className="text-sm text-slate-600">元人民币</span>
                  </div>
                  <span className="text-slate-400">=</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">发放</span>
                    <input type="number" defaultValue="1" className="w-24 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-center" />
                    <span className="text-sm text-slate-600">个甘露</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">保存返利配置</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800">{editingTask ? '编辑任务' : '新增任务'}</h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">任务名称</label>
                <input type="text" defaultValue={editingTask?.name} className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">触发器</label>
                <select defaultValue={editingTask?.type} className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>登录</option>
                  <option>送礼</option>
                  <option>发动态</option>
                  <option>关注</option>
                  <option>停留房间</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">条件参数</label>
                <input type="text" defaultValue={editingTask?.params} className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">奖励配置</label>
                <input type="text" defaultValue={editingTask?.reward} className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">跳转链接</label>
                <input type="text" defaultValue={editingTask?.link} className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 flex justify-end gap-3 bg-slate-50">
              <button onClick={closeModal} className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50">取消</button>
              <button onClick={closeModal} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">保存</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
