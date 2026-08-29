import React from "react";

function SectionHeading({ badge, title, description, className = "" }) {
  return (
    <div className={`relative z-10 ${className}`}>
      {/* Badge */}
      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#ff7845] px-4 py-2 text-xs font-medium text-[#ff7845] sm:mb-7 sm:px-5 sm:text-sm">
        <span>▣</span>
        <span>{badge}</span>
      </div>

      {/* Heading */}
      <h1 className="max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-4xl lg:text-[48px] xl:text-[56px]">
        {title}
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-sm leading-6 text-[#b4d0cf] sm:mt-7 sm:text-base sm:leading-7 lg:text-lg">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
