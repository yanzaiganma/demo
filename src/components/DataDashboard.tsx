import React, { useState } from 'react';
import { Users, DollarSign, Package, TrendingUp, Search, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export function DataDashboard() {
  const [activeTab, setActiveTab] = useState<'core' | 'details' | 'cs'>('core');

  const funnelData = [
    { name: '每日首次签到', value: 45000, rate: '100%' },
    { name: '房间停留15分钟', value: 32000, rate: '71%' },
    { name: '送出任意礼物', value: 18000, rate: '40%' },
    { name: '关注3名新主播', value: 5000, rate: '11%' },
  ];

  const trendData = [
    { name: '4/02', revenue: 4000, uv: 2400 },
    { name: '4/03', revenue: 3000, uv: 1398 },
    { name: '4/04', revenue: 2000, uv: 9800 },
    { name: '4/05', revenue: 2780, uv: 3908 },
    { name: '4/06', revenue: 1890, uv: 4800 },
    { name: '4/07', revenue: 2390, uv: 3800 },
    { name: '4/08', revenue: 3490, uv: 4300 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">春日活动数据大屏</h1>
          <p className="text-sm text-slate-500 mt-1">实时监控活动数据，排查异常与客诉。</p>
        </div>
        <div className="text-sm text-slate-500 flex items-center">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          数据更新于: 刚刚 (实时)
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-200">
          <nav className="flex -mb-px">
            {[
              { id: 'core', label: '核心大盘数据' },
              { id: 'details', label: '模块细分数据' },
              { id: 'cs', label: '异常拦截与客诉查询' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "px-6 py-4 text-center border-b-2 font-medium text-sm transition-colors",
                  activeTab === tab.id
                    ? "border-emerald-500 text-emerald-600"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                )}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'core' && (
            <div className="space-y-6">
              {/* 核心指标卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <div className="flex items-center text-slate-500 mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">活动参与人数 (UV)</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">124,592</div>
                  <div className="text-xs text-emerald-600 mt-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" /> +12.5% 较昨日
                  </div>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <div className="flex items-center text-slate-500 mb-2">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">活动总流水 (钻石)</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">8,459,200</div>
                  <div className="text-xs text-emerald-600 mt-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" /> +5.2% 较昨日
                  </div>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <div className="flex items-center text-slate-500 mb-2">
                    <Package className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">线轴消耗 vs 购买</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">45W / 52W</div>
                  <div className="text-xs text-slate-500 mt-1">
                    消耗率: <span className="text-slate-700 font-medium">86.5%</span>
                  </div>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <div className="flex items-center text-slate-500 mb-2">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">甘露核销率</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">72.4%</div>
                  <div className="text-xs text-slate-500 mt-1">
                    获甘露用户: <span className="text-slate-700 font-medium">12,405</span> 人
                  </div>
                </div>
              </div>

              {/* 趋势图表 */}
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-slate-800 mb-4">活动流水与参与人数趋势</h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                      <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                      <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                      <RechartsTooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                      <Line yAxisId="left" type="monotone" dataKey="revenue" name="流水" stroke="#10b981" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                      <Line yAxisId="right" type="monotone" dataKey="uv" name="UV" stroke="#3b82f6" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 任务漏斗 */}
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-slate-800 mb-4">春叶任务完成漏斗</h3>
                  <div className="space-y-4">
                    {funnelData.map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-700 font-medium">{item.name}</span>
                          <span className="text-slate-500">{item.value.toLocaleString()} 人 ({item.rate})</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5">
                          <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: item.rate }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 text-amber-800 text-xs rounded-lg flex items-start">
                    <AlertCircle className="w-4 h-4 mr-2 shrink-0" />
                    <p>洞察：“关注3名新主播”任务完成率仅11%，建议降低难度或增加奖励权重。</p>
                  </div>
                </div>

                {/* 抽奖产出监控 */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col">
                  <h3 className="text-sm font-semibold text-slate-800 mb-4">高价值物品产出监控 (防刷)</h3>
                  <div className="flex-1 overflow-y-auto pr-2">
                    <div className="space-y-3">
                      {[
                        { time: '10:42:15', uid: '8849201', item: '春日花车(座驾)', pool: '锦鲤池' },
                        { time: '10:35:22', uid: '1029384', item: '绝版靓号 6688', pool: '锦鲤池' },
                        { time: '10:12:05', uid: '9928371', item: '春日花车(座驾)', pool: '金鱼池' },
                        { time: '09:58:44', uid: '8849201', item: '10000钻石红包', pool: '锦鲤池' },
                        { time: '09:45:10', uid: '3349120', item: '春日花车(座驾)', pool: '锦鲤池' },
                      ].map((log, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                          <div>
                            <div className="text-sm font-medium text-slate-800">{log.item}</div>
                            <div className="text-xs text-slate-500 mt-0.5">UID: <span className="font-mono">{log.uid}</span> · {log.pool}</div>
                          </div>
                          <div className="text-xs text-slate-400 font-mono">{log.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cs' && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-base font-semibold text-slate-800 mb-4">用户活动明细查询</h3>
                <div className="flex gap-3 max-w-2xl">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="输入用户UID查询..." 
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
                    查询
                  </button>
                </div>
              </div>

              {/* 模拟查询结果 */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex gap-4 text-sm">
                  <button className="font-medium text-emerald-600 border-b-2 border-emerald-600 pb-1">材料获取流水</button>
                  <button className="font-medium text-slate-500 hover:text-slate-700 pb-1">抽奖记录</button>
                  <button className="font-medium text-slate-500 hover:text-slate-700 pb-1">送礼与积分明细</button>
                </div>
                <div className="p-0">
                  <table className="w-full text-sm text-left text-slate-600">
                    <thead className="text-xs text-slate-700 uppercase bg-white border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-3 font-medium">时间</th>
                        <th className="px-6 py-3 font-medium">变更类型</th>
                        <th className="px-6 py-3 font-medium">材料名称</th>
                        <th className="px-6 py-3 font-medium">变更数量</th>
                        <th className="px-6 py-3 font-medium">当前余量</th>
                        <th className="px-6 py-3 font-medium">来源/去向</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="px-6 py-3 font-mono text-xs">2026-04-03 14:22:10</td>
                        <td className="px-6 py-3"><span className="text-red-500 font-medium">消耗</span></td>
                        <td className="px-6 py-3">线轴</td>
                        <td className="px-6 py-3 font-mono text-red-500">-10</td>
                        <td className="px-6 py-3 font-mono">45</td>
                        <td className="px-6 py-3 text-slate-500">锦鲤池十连抽</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="px-6 py-3 font-mono text-xs">2026-04-03 14:20:05</td>
                        <td className="px-6 py-3"><span className="text-emerald-600 font-medium">获取</span></td>
                        <td className="px-6 py-3">甘露</td>
                        <td className="px-6 py-3 font-mono text-emerald-600">+5</td>
                        <td className="px-6 py-3 font-mono">12</td>
                        <td className="px-6 py-3 text-slate-500">充值返利 (订单号: R1029...)</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="px-6 py-3 font-mono text-xs">2026-04-03 10:05:00</td>
                        <td className="px-6 py-3"><span className="text-emerald-600 font-medium">获取</span></td>
                        <td className="px-6 py-3">春叶</td>
                        <td className="px-6 py-3 font-mono text-emerald-600">+10</td>
                        <td className="px-6 py-3 font-mono">150</td>
                        <td className="px-6 py-3 text-slate-500">完成任务：每日首次签到</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
