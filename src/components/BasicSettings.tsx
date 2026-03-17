import React from 'react';

export function BasicSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">活动基础配置</h1>
        <p className="text-sm text-slate-500 mt-1">管理“春日踏青”活动的生命周期与基础信息。</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 space-y-8">
          {/* 基础信息 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <span className="w-1 h-4 bg-emerald-500 rounded-full mr-2"></span>
              基础信息设置
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">活动ID (系统生成)</label>
                <input type="text" disabled value="event_spring_2026" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 text-sm cursor-not-allowed" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">活动名称</label>
                <input type="text" defaultValue="春日踏青" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">开始时间</label>
                <input type="datetime-local" defaultValue="2026-04-02T12:00" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">结束时间</label>
                <input type="datetime-local" defaultValue="2026-04-08T23:59" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">榜单展示延长期 (天)</label>
                <input type="number" defaultValue="3" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                <p className="text-xs text-slate-500 mt-1">活动结束后保留展示的天数，期间不可打榜、抽奖。</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">活动状态</label>
                <select className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>未开始</option>
                  <option>进行中</option>
                  <option>已结束</option>
                  <option className="text-red-600 font-medium">强制下线 (紧急避险)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">白名单测试 (UID)</label>
                <textarea rows={2} placeholder="输入测试用户UID，逗号分隔。开启后仅白名单可见。" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"></textarea>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 前端资源 */}
          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <span className="w-1 h-4 bg-emerald-500 rounded-full mr-2"></span>
              前端资源配置
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">主视觉 Banner 图 URL</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="https://..." className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">预览</button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">活动规则文本</label>
                <div className="border border-slate-300 rounded-lg overflow-hidden">
                  <div className="bg-slate-50 border-b border-slate-300 px-3 py-2 flex gap-2">
                    <button className="p-1 hover:bg-slate-200 rounded text-slate-600 font-bold">B</button>
                    <button className="p-1 hover:bg-slate-200 rounded text-slate-600 italic">I</button>
                    <button className="p-1 hover:bg-slate-200 rounded text-slate-600 underline">U</button>
                  </div>
                  <textarea rows={6} defaultValue="1. 活动期间，完成每日任务可获得春叶...\n2. 充值可获得甘露..." className="w-full px-3 py-2 bg-white text-sm focus:outline-none"></textarea>
                </div>
              </div>
            </div>
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
