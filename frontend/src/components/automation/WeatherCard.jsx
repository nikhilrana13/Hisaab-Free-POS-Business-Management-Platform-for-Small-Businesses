import React from "react";
import {Cloud,Droplets,MapPin,Umbrella,Wind,} from "lucide-react";

const WeatherCard = ({location = "Mohali",temperature = 31,condition = "Partly Cloudy",humidity = 68,windSpeed = 14,rainChance = 40,
}) => {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-[#dbe5f5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            {/* subtle background decoration */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#EEF2FF]" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-[#F8FAFC]" />

            <div className="relative p-5 sm:p-6">

                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
                            <MapPin size={14} className="text-[#2563eb]" />
                            {location}
                        </div>

                        <h3 className="mt-2 text-lg font-bold text-[#0f172a]">
                            Today's Weather
                        </h3>

                        <p className="mt-1 text-sm text-[#64748b]">
                            Current local conditions
                        </p>
                    </div>

                    {/* Weather icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2FF]">
                        <Cloud
                            size={30}
                            strokeWidth={1.8}
                            className="text-[#2563eb]"
                        />
                    </div>
                </div>

                {/* Main temperature */}
                <div className="mt-7 flex items-end gap-3">
                    <span className="text-5xl font-bold tracking-tight text-[#0f172a]">
                        {temperature}°
                    </span>

                    <div className="mb-1">
                        <p className="text-sm font-semibold text-[#334155]">
                            {condition}
                        </p>

                        <p className="text-xs text-[#94a3b8]">
                            Feels comfortable
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-[#eef2f7]" />

                {/* Metrics */}
                <div className="grid grid-cols-3 divide-x divide-[#eef2f7]">

                    {/* Humidity */}
                    <div className="px-3 first:pl-0">
                        <div className="flex items-center gap-1.5 text-[#94a3b8]">
                            <Droplets size={15} />
                            <span className="text-xs font-medium">
                                Humidity
                            </span>
                        </div>

                        <p className="mt-2 text-sm font-bold text-[#0f172a]">
                            {humidity}%
                        </p>
                    </div>

                    {/* Wind */}
                    <div className="px-3">
                        <div className="flex items-center gap-1.5 text-[#94a3b8]">
                            <Wind size={15} />
                            <span className="text-xs font-medium">
                                Wind
                            </span>
                        </div>

                        <p className="mt-2 text-sm font-bold text-[#0f172a]">
                            {windSpeed} km/h
                        </p>
                    </div>

                    {/* Rain */}
                    <div className="px-3 last:pr-0">
                        <div className="flex items-center gap-1.5 text-[#94a3b8]">
                            <Umbrella size={15} />
                            <span className="text-xs font-medium">
                                Rain
                            </span>
                        </div>

                        <p className="mt-2 text-sm font-bold text-[#0f172a]">
                            {rainChance}%
                        </p>
                    </div>
                </div>

                {/* FlowPilot badge */}
                <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#f8fafc] px-4 py-3">
                    <div>
                        <p className="text-xs font-semibold text-[#475569]">
                            Powered by automation
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#94a3b8]">
                            FlowPilot workflow
                        </p>
                    </div>

                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Live
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;