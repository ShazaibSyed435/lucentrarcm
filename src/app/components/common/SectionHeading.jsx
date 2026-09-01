// import React from "react";
// import { Icon } from "@iconify/react";

// export default function SectionHeading({
//   badge,
//   title,
//   highlight,
//   description,
//   className = "",
// }) {
//   return (
//     <div
//       className={`mx-auto flex max-w-[760px] flex-col items-center text-center ${className}`}
//     >
//       {/* Badge */}
//       {badge && (
//         <div className="mb-3 inline-flex items-center gap-2">
// {
//   <Icon
//     icon="fa-solid:notes-medical"
//     className="h-[14px] w-[14px] text-[#EA7F4A]"
//   />
// }

//           <span className="text-[13px] font-bold uppercase tracking-[1px] text-[#EA7F4A]">
//             {badge}
//           </span>
//         </div>
//       )}

//       {/* Heading */}
//       <h2 className="text-[26px] font-semibold leading-[1.15] tracking-[-1px] text-[#102b2a] sm:text-[32px] md:text-[40px]">
//         {title}{" "}
//         {highlight && <span className="text-[#075f5b]">{highlight}</span>}
//       </h2>

//       {/* Description */}
//       {description && (
//         <p className="mt-4 max-w-[680px] text-[14px] leading-[1.8] text-[#7b8585] sm:text-[16px]">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

import React from "react";
import { Icon } from "@iconify/react";

export default function SectionHeading({
  // icon: Icon,
  badge,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) {
  const isLeft = align === "left";

  return (
    <div
      className={`flex flex-col ${
        isLeft
          ? "items-start text-left"
          : "mx-auto max-w-[760px] items-center text-center"
      } ${className}`}
    >
      {/* Badge */}
      {badge && (
        <div className="mb-3 inline-flex items-center gap-2">
          {
            <Icon
              icon="fa-solid:notes-medical"
              className="h-[14px] w-[14px] text-[#EA7F4A]"
            />
          }

          <span className="text-[13px] font-bold uppercase tracking-[1px] text-[#EA7F4A]">
            {badge}
          </span>
        </div>
      )}

      {/* Heading */}
      <h2 className="max-w-[700px] text-[26px] font-bold leading-[1.25] tracking-[-1px] text-[#171717] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px]">
        {title}{" "}
        {highlight && <span className="text-[#075f5b]">{highlight}</span>}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 max-w-[700px] text-[14px] font-normal leading-[1.7] text-[#7a7a7a] md:text-[16px]">
          {description}
        </p>
      )}
    </div>
  );
}
