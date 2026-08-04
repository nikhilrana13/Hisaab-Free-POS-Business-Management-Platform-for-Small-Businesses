import { Icon } from 'lucide-react';
import React from 'react';

const StatsCard = ({stats}) => {
    const Icon = stats.icon
  return (
     <div
      className={`rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${stats.className}`}
    >
      <div className="mb-5 flex items-start justify-between">
        <p className="text-sm font-medium text-[#64748B]">
          {stats?.title}
        </p>

        <div
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: stats?.iconBg }}
        >
          <Icon
            size={20}
            style={{ color: stats?.iconColor }}
          />
        </div>
      </div>

      <h3 className="text-3xl font-bold tracking-tight text-[#0F172A]">
        {stats?.value}
      </h3>
    </div>
  );
}

export default StatsCard;
