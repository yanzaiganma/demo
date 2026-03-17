import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export function LeaderboardConfig() {
  const mockRewards = [
    { rank: 'Top 1', reward: '春日花魁专属座驾(30天), 绝版靓号, 50000钻石' },
    { rank: 'Top 2 - 3', reward: '春日花魁专属座驾(15天), 20000钻石' },
    { rank: 'Top 4 - 5', reward: '春日花魁专属座驾(7天), 10000钻石' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">榜单与积分规则配置</h1>
        <p className="text-sm text-slate-500 mt-1">配置三大榜单（春日花魁、护花使者、春日名园）的积分规则与结算奖励。</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 space-y-8">
          {/* 榜单基础设置 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <span className="w-1 h-4 bg-emerald-500 rounded-full mr-2"></span>
              榜单基础设置
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">有效礼物指定 (专属礼物ID)</label>
                <textarea 
                  rows={2} 
                  defaultValue="gift_spring_01, gift_spring_02, gift_kite_gold" 
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="填入参与活动的“专属礼物ID”集合（逗号分隔）"
                ></textarea>
                <p className="text-xs text-slate-500 mt-1">只有送出指定的礼物才算积分。</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">积分换算比例</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="font-medium text-slate-800 mb-2 text-sm">主播榜（春意值）</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">10 钻石 =</span>
                      <input type="number" defaultValue="1" className="w-16 px-2 py-1 bg-white border border-slate-300 rounded text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                      <span className="text-sm text-slate-600">春意值</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="font-medium text-slate-800 mb-2 text-sm">用户榜（春光值）</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">1 钻石 =</span>
                      <input type="number" defaultValue="1" className="w-16 px-2 py-1 bg-white border border-slate-300 rounded text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                      <span className="text-sm text-slate-600">春光值</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="font-medium text-slate-800 mb-2 text-sm">公会榜（繁荣度）</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">1 钻石 =</span>
                      <input type="number" defaultValue="1" className="w-16 px-2 py-1 bg-white border border-slate-300 rounded text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                      <span className="text-sm text-slate-600">繁荣度</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">榜单公会归属逻辑 <span className="text-red-500">*</span></label>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="radio" name="guildLogic" className="mt-1 text-emerald-600 focus:ring-emerald-500" />
                    <div>
                      <div className="text-sm font-medium text-slate-800">选项A：按主播实时所在公会计算</div>
                      <div className="text-xs text-slate-500">如活动期间换公会，积分跟着走。</div>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="radio" name="guildLogic" defaultChecked className="mt-1 text-emerald-600 focus:ring-emerald-500" />
                    <div>
                      <div className="text-sm font-medium text-slate-800">选项B：按主播产出积分时所在公会计算</div>
                      <div className="text-xs text-emerald-600 font-medium">业内通用，换公会不影响老公会已获积分。建议默认配置此项。</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 榜单结算奖励配置 */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center">
                <span className="w-1 h-4 bg-emerald-500 rounded-full mr-2"></span>
                榜单结算奖励配置
              </h2>
              <div className="flex gap-2">
                <select className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>春日花魁榜</option>
                  <option>护花使者榜</option>
                  <option>春日名园榜</option>
                </select>
                <button className="flex items-center px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
                  <Plus className="w-4 h-4 mr-1" /> 添加名次区间
                </button>
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-sm text-left text-slate-600">
                <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-medium w-1/4">名次区间</th>
                    <th className="px-4 py-3 font-medium">奖励内容</th>
                    <th className="px-4 py-3 font-medium text-right">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {mockRewards.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-medium text-slate-900">{item.rank}</td>
                      <td className="px-4 py-3 text-emerald-700">{item.reward}</td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-blue-600 hover:text-blue-800 p-1"><Edit2 className="w-4 h-4" /></button>
                        <button className="text-red-600 hover:text-red-800 p-1 ml-1"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-2">注：活动结束后，系统根据名次自动发放或生成待发奖清单。绝版靓号等需客服人工介入的奖励，系统支持生成 Excel 清单。</p>
          </section>
        </div>
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end gap-3">
          <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">取消</button>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">保存配置</button>
        </div>
      </div>
    </div>
  );
}
