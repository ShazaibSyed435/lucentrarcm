"use client";

import { BriefcaseBusiness } from "lucide-react";

export default function SectionHeading({
  badge,
  badgeIcon: BadgeIcon = BriefcaseBusiness,
  badgeColor = "#EA7F4A",
  badgeBg,
  badgeBorder,
  badgeClassName = "",
  heading,
  description,
  align = "left",
  layout = "stacked",
  headingClassName = "",
  descriptionClassName = "",
  containerClassName = "",
}) {
  const isSplit = layout === "split";

  return (
    <div
      className={`${
        isSplit
          ? "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
          : "flex flex-col"
      } ${containerClassName}`}
    >
      <div
        className={`w-full ${
          isSplit ? "lg:max-w-[700px]" : "max-w-[700px]"
        } ${align === "center" ? "mx-auto text-center" : ""}`}
      >
        {/* Badge */}
        {badge && (
          <div
            className={`mb-3 inline-flex items-center gap-2 ${
              badgeBg || badgeBorder ? "rounded-full px-4 py-2" : ""
            } ${badgeClassName}`}
            style={{
              color: badgeColor,
              backgroundColor: badgeBg,
              borderColor: badgeBorder,
              borderWidth: badgeBorder ? "1px" : undefined,
            }}
          >
            {BadgeIcon && <BadgeIcon className="h-[14px] w-[14px]" />}

            <span>{badge}</span>
          </div>
        )}

        {/* Heading */}
        {heading && (
          <h2
            className={`text-[26px] font-bold leading-[1.25] tracking-[-1px] text-[#171717] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px] ${headingClassName}`}
          >
            {heading}
          </h2>
        )}
      </div>

      {/* Description */}
      {description && (
        <p
          className={`w-full text-[14px] font-normal leading-[1.7] text-[#7a7a7a] md:text-[16px] ${
            isSplit ? "lg:max-w-[430px] lg:pb-1" : "mt-5 max-w-[700px]"
          } ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
