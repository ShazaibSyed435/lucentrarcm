import React from "react";

export default function ServiceCard({
  number,
  icon: Icon,
  title,
  description,
}) {
  return (
    <div
      className="group relative flex min-h-[255px] flex-col overflow-hidden rounded-[14px] border border-[#dfe8e7] bg-white p-6 shadow-[0_8px_24px_rgba(0,60,55,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#005350] hover:shadow-[0_12px_30px_rgba(0,60,55,0.09)] sm:min-h-[260px] md:p-7 lg:min-h-[256px]"
    >
      {/* Top Border */}
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#006b63] via-[#00877d] to-[#ff6845]" />

      {/* Icon + Number */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[10px] border border-[#d1e0df] bg-[#f0f6f5] transition-all duration-300 group-hover:border-[#9fc4c0] group-hover:bg-[#e5f1ef]">
          <Icon
            className="h-[32px] w-[32px] text-[#066963]"
            strokeWidth={1.8}
          />
        </div>

        <span className="text-[36px] font-bold leading-none tracking-[-1px] text-[#edf2f1]">
          {number}
        </span>
      </div>

      {/* Orange Line */}
      <div className="mb-2 h-[2px] w-[24px] bg-[#ff6845]" />

      {/* Content */}
      <div>
        <h3 className="text-4 font-bold leading-[1.35] text-[#172625] sm:text-[18px]">
          {title}
        </h3>

        <p className="mt-1.5 text-[13px] font-normal leading-[1.7] text-[#7a7f7f] sm:text-[14px]">
          {description}
        </p>
      </div>

      {/* Learn More */}
      <div className="mt-auto pt-4">
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-full bg-[#05645f] px-[20px] py-[8.3px] text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#044f4b]"
        >
          Learn More <span className="text-[12px]">→</span>
        </button>
      </div>
    </div>
  );
}