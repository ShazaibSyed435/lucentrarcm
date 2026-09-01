// import React from "react";
// import { Icon } from "@iconify/react";

// export default function SectionHeading({
//   badge,
//   title,
//   highlight,
//   description,
//   children,
//   align = "center",
//   className = "",
//   maxWidth = "max-w-[700px]",

//   titleColor = "text-[#171717]",
//   highlightColor = "text-[#075f5b]",
//   descriptionColor = "text-[#7a7a7a]",
//   badgeColor = "text-[#EA7F4A]",
// }) {
//   const isLeft = align === "left";

//   return (
//     <div
//       className={`flex flex-col ${
//         isLeft
//           ? "items-start text-left"
//           : "mx-auto max-w-[760px] items-center text-center"
//       } ${className}`}
//     >
//       {/* Badge */}
//       {badge && (
//         <div className="mb-3 inline-flex items-center gap-2">
//           <Icon
//             icon="fa-solid:notes-medical"
//             className={`h-[14px] w-[14px] ${badgeColor}`}
//           />

//           <span
//             className={`text-[13px] font-bold uppercase tracking-[1px] ${badgeColor}`}
//           >
//             {badge}
//           </span>
//         </div>
//       )}

//       {/* Heading */}
//       <h2
//         className={`${maxWidth} text-[26px] font-bold leading-[1.25] tracking-[-1px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px] ${titleColor}`}
//       >
//         {children ? (
//           children
//         ) : (
//           <>
//             {title}{" "}
//             {highlight && <span className={highlightColor}>{highlight}</span>}
//           </>
//         )}
//       </h2>

//       {/* Description */}
//       {description && (
//         <p
//           className={`mt-5 max-w-[700px] text-[14px] font-normal leading-[1.7] md:text-[16px] ${descriptionColor}`}
//         >
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// import React from "react";
// import { Icon } from "@iconify/react";

// export default function SectionHeading({
//   badge,
//   title,
//   highlight,
//   description,
//   children,
//   align = "center",
//   className = "",
//   maxWidth = "max-w-[700px]",
//   descriptionMaxWidth = "max-w-[700px]",
//   titleColor = "text-[#171717]",
//   highlightColor = "text-[#075f5b]",
//   descriptionColor = "text-[#7a7a7a]",
//   badgeColor = "text-[#EA7F4A]",
//   titleClassName = "",
// }) {
//   const isLeft = align === "left";

//   const headingContent = children ? (
//     children
//   ) : (
//     <>
//       {title}{" "}
//       {highlight && (
//         <span className={highlightColor}>{highlight}</span>
//       )}
//     </>
//   );

//   return (
//     <div
//       className={`flex flex-col ${
//         isLeft
//           ? "items-start text-left"
//           : "mx-auto max-w-[760px] items-center text-center"
//       } ${className}`}
//     >
//       {/* Badge */}
//       {badge && (
//         <div className="mb-3 inline-flex items-center gap-2">
//           <Icon
//             icon="fa-solid:notes-medical"
//             className={`h-[14px] w-[14px] ${badgeColor}`}
//           />

//           <span
//             className={`text-[13px] font-bold uppercase tracking-[1px] ${badgeColor}`}
//           >
//             {badge}
//           </span>
//         </div>
//       )}

//       {/* Heading */}
//       <h2
//         className={`${maxWidth} ${titleClassName} font-bold leading-[1.25] tracking-[-1px] ${titleColor}`}
//       >
//         {headingContent}
//       </h2>

//       {/* Description */}
//       {description && (
//         <p
//           className={`mt-5 ${descriptionMaxWidth} text-[14px] font-normal leading-[1.7] md:text-[16px] ${descriptionColor}`}
//         >
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

import React from "react";
import { Icon } from "@iconify/react";

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  children,
  align = "center",
  className = "",
  maxWidth = "max-w-[700px]",
  descriptionMaxWidth = "max-w-[700px]",
  titleColor = "text-[#171717]",
  highlightColor = "text-[#075f5b]",
  descriptionColor = "text-[#7a7a7a]",
  badgeColor = "text-[#EA7F4A]",
  titleClassName = " text-[26px] font-bold leading-[1.25]  sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px] ",
}) {
  const isLeft = align === "left";

  const headingContent = children ? (
    children
  ) : (
    <>
      {title} {highlight && <span className={highlightColor}>{highlight}</span>}
    </>
  );

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
          <Icon
            icon="fa-solid:notes-medical"
            className={`h-[14px] w-[14px] ${badgeColor}`}
          />

          <span
            className={`text-[13px] font-bold uppercase tracking-[1px] ${badgeColor}`}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Heading */}
      <h2
        className={`${maxWidth} ${titleClassName} font-bold leading-[1.25] tracking-[-1px] ${titleColor}`}
      >
        {headingContent}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-5 ${descriptionMaxWidth} text-[14px] font-normal leading-[1.7] md:text-[16px] ${descriptionColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
