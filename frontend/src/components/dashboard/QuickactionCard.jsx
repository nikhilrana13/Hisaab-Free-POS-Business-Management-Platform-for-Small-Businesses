import Link from 'next/link';
import React from 'react';

const QuickactionCard = ({actions}) => {
    const primary = actions?.primary
    const Icon = actions?.icon
  return (
     <Link
      href={actions.href}
      className={`group flex h-32 flex-col items-center justify-center gap-3 rounded-2xl p-6 transition-all duration-300 active:scale-[0.98]
      ${
        primary
          ? "bg-[#2563EB] text-white shadow-lg hover:bg-[#1D4ED8]"
          : "border border-[#E5E7EB] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-md"
      }`}
    >
      <Icon
        size={34}
        className="transition-transform duration-300 group-hover:scale-110"
        style={!primary ? { color: actions.iconColor } : {}}
      />

      <span
        className={`text-sm font-semibold ${
          primary ? "text-white" : "text-[#0F172A]"
        }`}
      >
        {actions.title}
      </span>
    </Link>
  );
}

export default QuickactionCard;
