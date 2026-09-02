import React from "react";

export default function SpecialtyFlipCard({ icon: Icon, title, description }) {
  return (
    <div className="group h-[220px] w-full [perspective:1000px]">
      {/* Flip Container */}
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* ================= FRONT ================= */}
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[20px] border border-[#dfe8e7] bg-white  shadow-[0_8px_24px_rgba(0,60,55,0.04)] [backface-visibility:hidden]">
          {/* Top Border */}
          <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#006b63] via-[#00877d] to-[#ff6845]" />

          {/* Icon */}
          <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-[14px] border border-[#d1e0df] bg-[#f0f6f5]">
            <Icon
              className="h-[36px] w-[36px] text-[#066963]"
              strokeWidth={1.6}
            />
          </div>

          {/* Title */}
          <h3 className="text-center text-[16px] font-bold leading-[1.35] text-[#172625]">
            {title}
          </h3>
        </div>

        {/* ================= BACK ================= */}
        <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-[#02514E] to-[#012120] p-8 text-center shadow-[0_12px_30px_rgba(0,60,55,0.12)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* Description */}
          <p className="max-w-[360px] text-[16px] font-normal leading-[1.6] text-white/90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

// #02514E  #012120
