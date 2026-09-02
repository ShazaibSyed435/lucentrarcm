import React from "react";
import { Check } from "lucide-react";

export default function PricingCard({
  title,
  description,
  features = [],
  price,
  popular = false,
  buttonText = "Get Started",
}) {
  return (
    <div
      className={`group relative flex  flex-col overflow-hidden rounded-[20px] border bg-white p-6 shadow-[0_8px_24px_rgba(0,60,55,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,60,55,0.09)] md:p-7 ${
        popular
          ? "border-[#ff6845] shadow-[0_8px_30px_rgba(255,104,69,0.08)]"
          : "border-[#dfe8e7]"
      }`}
    >
      {/* Top Border */}
      <div
        className={`absolute left-0 right-0 top-0 h-[4px] 
        ${
          popular
            ? "bg-gradient-to-r  from-[#ff6845] via-[#00877d] to-[#006b63]"
            : "bg-gradient-to-r from-[#006b63] via-[#00877d] to-[#ff6845]"
        }
       `}
      />

      {/* Popular Badge */}
      {popular && (
        <div className="absolute right-5 top-5  md:top-2 lg:top-5 rounded-full bg-[#f47b4a] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-white">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div>
        <h3 className="text-[20px] md:text-[22px] font-bold leading-[1.3] text-[#172625]">
          {title}
        </h3>

        {/* Orange Line */}
        <div className="mb-3 mt-4 h-[2px] w-[34px] bg-[#ff6845]" />

        <p className="max-w-[470px] text-[13px] md:text-[14px] font-normal leading-[1.9] text-[#7a7f7f]">
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="mt-6">
        <h4 className="mb-5 text-[14px] font-bold text-[#172625]">
          What's included
        </h4>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-[13px] md:text-[14px] leading-[1.8] text-[#7a7f7f]"
            >
              <span className="mt-[5px] flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#05645f]">
                <Check
                  className="h-[14px] w-[14px] text-white"
                  strokeWidth={3}
                />
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom */}
      <div className="mt-auto">
        {/* Divider */}
        <div className="mb-6 mt-6 h-px w-full bg-[#dfe8e7]" />

        {/* Price */}
        <div className="mb-5 flex items-baseline gap-2">
          <span
            className={`text-[36px] md:text-[40px] font-bold leading-none tracking-[-1.5px] ${
              popular ? "text-[#f47b4a]" : "text-[#05645f]"
            } `}
          >
            {price}
          </span>

          <span className="text-[16px] font-normal text-[#7a7f7f]">
            / monthly
          </span>
        </div>

        {/* Button */}
        <button
          type="button"
          className={`flex h-[40px] w-full items-center justify-center rounded-full text-[13px] font-bold text-white transition-all duration-300 ${
            popular
              ? "bg-[#f47b4a] hover:bg-[#e96e3f]"
              : "bg-[#05645f] hover:bg-[#044f4b]"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
