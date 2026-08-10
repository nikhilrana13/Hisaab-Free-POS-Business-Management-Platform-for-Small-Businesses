import { formatIndianNumber } from '@/utils/Helpers';
import React from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from "recharts";




const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-lg">
                <p className="mb-1 text-xs font-medium text-[#64748B]">
                    {label}
                </p>

                <p className="text-sm font-bold text-[#0F172A]">
                    ₹{formatIndianNumber(payload[0].value)}
                </p>
            </div>
        );
    }
    return null;
};

const RevenueOverviewChart = ({ monthlyRevenue }) => {
    return (
        <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-xl sm:p-6">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-base font-semibold text-[#191C1E] sm:text-lg">
                        Revenue Overview
                    </h2>

                    <p className="text-xs text-[#64748B] sm:text-sm">
                        Your monthly sales performance
                    </p>
                </div>
            </div>

            {/* Chart */}
            <div className="h-[240px] w-full sm:h-[300px] md:h-[340px]">
                {!monthlyRevenue || monthlyRevenue.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center text-sm text-[#94A3B8]">
                        <p>No revenue data available</p>

                        <span className="mt-1 text-xs text-[#CBD5E1]">
                            Data will appear once sales start
                        </span>
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={monthlyRevenue}
                            margin={{
                                top: 10,
                                right: 10,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient
                                    id="revenueGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#2563EB"
                                        stopOpacity={0.3}
                                    />

                                    <stop
                                        offset="95%"
                                        stopColor="#2563EB"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>

                            <CartesianGrid
                                strokeDasharray="4 4"
                                vertical={false}
                                stroke="#F1F5F9"
                            />

                            <XAxis
                                dataKey="month"
                                tick={{
                                    fontSize: 11,
                                    fill: "#64748B",
                                }}
                                axisLine={false}
                                tickLine={false}
                            />

                            <YAxis
                                tickFormatter={(value) =>
                                    value >= 1000
                                        ? `₹${(value / 1000).toFixed(0)}k`
                                        : `₹${value}`
                                }
                                tick={{
                                    fontSize: 11,
                                    fill: "#64748B",
                                }}
                                axisLine={false}
                                tickLine={false}
                                width={45}
                            />

                            <Tooltip content={<CustomTooltip />} />

                            <Area
                                type="monotone"
                                dataKey="sales"
                                stroke="#2563EB"
                                strokeWidth={3}
                                fill="url(#revenueGradient)"
                                fillOpacity={1}
                                activeDot={{
                                    r: 6,
                                    fill: "#2563EB",
                                }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
}

export default RevenueOverviewChart;
