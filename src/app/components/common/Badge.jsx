import React from "react";
import { Icon } from "@iconify/react";

export default function Badge({
  children,

  // Default colors
  bgColor = "rgba(234, 127, 74, 0.15)",
  textColor = "#EA7F4A",
  borderColor = "#EA7F4A",

  // Border can be removed
  border = true,
  // Icon
  icon = "fa-solid:notes-medical",
  showIcon = true,
  className = "",
  isUppercase = false,
}) {
  return (
    <div
      className={`inline-flex w-fit items-center  gap-2 rounded-full px-4 py-2 text-[11px] font-medium sm:px-5 sm:text-sm md:text-[13px] ${className} ${isUppercase ? "uppercase" : ""}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: border ? `1px solid ${borderColor}` : "none",
      }}
    >
      {showIcon && (
        <span>
          <Icon icon={icon} />
        </span>
      )}

      <span className={isUppercase ? "uppercase font-bold" : ""}>
        {children}
      </span>
    </div>
  );
}
