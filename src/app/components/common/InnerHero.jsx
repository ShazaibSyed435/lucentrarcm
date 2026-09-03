// import React from "react";
// import Container from "@components/common/Container";
// import Badge from "@components/common/Badge";
// import { Icon } from "@iconify/react";

// function InnerHero({
//   badge = "Lucentra RCM Solutions",
//   heading,
//   description,
//   bgImage,
//   stats = [],
//   isCard = false,
// }) {
//   const card = [
//     { icon: "solar:verified-check-bold", title: "HIPAA Compliant" },
//     { icon: "solar:clock-circle-bold", title: "Fast Turnaround" },
//     { icon: "solar:headphones-round-sound-bold", title: "Dedicated Support" },
//     { icon: "solar:medical-kit-bold", title: "30+ Medical Specialties" },
//   ];

//   return (
//     <section>
//       {/* Hero */}
//       <div
//         className="relative isolate h-[340px] overflow-hidden bg-cover bg-center bg-no-repeat md:h-[420px] lg:h-[500px]"
//         style={{ backgroundImage: `url('${bgImage}')` }}
//       >
//         {/* Background overlay */}
//         <div className="absolute inset-0 z-0 bg-[#003635]/80" />

//         {/* Background circles */}
//         <div className="pointer-events-none absolute -right-28 -top-28 z-10 h-72 w-72 rounded-full border-[60px] border-[#2c1509]/20 opacity-60 sm:-right-32 sm:-top-32 sm:h-80 sm:w-80 md:h-80 md:w-80 lg:h-96 lg:w-96" />

//         <div className="pointer-events-none absolute -bottom-32 -left-28 z-10 h-80 w-80 rounded-full border-[60px] border-[#2c1509]/20 opacity-60 sm:-bottom-36 sm:-left-32 sm:h-96 sm:w-96 md:h-80 md:w-80 lg:h-96 lg:w-96" />

//         {/* Content */}
//         <div className="relative z-20 flex h-full items-center justify-center">
//           <Container className="flex flex-col items-center justify-center gap-4 text-center">
//             {badge && <Badge>{badge}</Badge>}

//             <h1 className="text-[36px] font-bold leading-[1.25] tracking-[-1px] text-white sm:text-[30px] md:text-[58px] lg:text-[68px]">
//               {heading}
//             </h1>

//             {description && (
//               <p className="max-w-[520px] text-[14px] font-normal leading-[1.7] text-white/80 md:text-[17px]">
//                 {description}
//               </p>
//             )}

//             {isCard && card.length > 0 && (
//               <div className="flex flex-wrap justify-center gap-4">
//                 {card.map((stat, index) => (
//                   <div
//                     key={index}
//                     className=" text-[12px] flex flex-row items-center text-center border border-white/10 rounded-full bg-white/[0.06] px-4 py-2 gap-2"
//                   >
//                     <Icon
//                       icon={stat.icon}
//                       className=" text-[14px] font-bold text-[#EA7F4A] "
//                     />

//                     <span className="  text-white font-bold ">
//                       {stat.title}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </Container>
//         </div>
//       </div>

//       {/* Stats / Last Section */}
//       {stats.length > 0 && (
//         <div className="grid w-full grid-cols-2 gap-y-8 bg-[#025350] p-6 md:grid-cols-4 md:gap-y-0">
//           {stats.map((stat, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               <span className="text-2xl font-bold text-white md:text-3xl">
//                 {stat.value}
//               </span>

//               <span className="mt-1 text-sm text-white/70 md:text-base">
//                 {stat.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// export default InnerHero;

import React from "react";
import Container from "@components/common/Container";
import Badge from "@components/common/Badge";
import { Icon } from "@iconify/react";

function InnerHero({
  badge = "Lucentra RCM Solutions",
  heading,
  description,
  bgImage,
  stats = [],
  isCard = false,
  bottomContent = null,
}) {
  const card = [
    {
      icon: "solar:verified-check-bold",
      title: "HIPAA Compliant",
    },
    {
      icon: "solar:clock-circle-bold",
      title: "Fast Turnaround",
    },
    {
      icon: "solar:headphones-round-sound-bold",
      title: "Dedicated Support",
    },
    {
      icon: "solar:medical-kit-bold",
      title: "30+ Medical Specialties",
    },
  ];

  return (
    <section>
      {/* Hero */}
      <div
        className="relative isolate h-[340px] overflow-hidden bg-cover bg-center bg-no-repeat md:h-[420px] lg:h-[500px]"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 z-0 bg-[#003635]/80" />

        {/* Background circles */}
        <div className="pointer-events-none absolute -right-28 -top-28 z-10 h-72 w-72 rounded-full border-[60px] border-[#2c1509]/20 opacity-60 sm:-right-32 sm:-top-32 sm:h-80 sm:w-80 md:h-80 md:w-80 lg:h-96 lg:w-96" />

        <div className="pointer-events-none absolute -bottom-32 -left-28 z-10 h-80 w-80 rounded-full border-[60px] border-[#2c1509]/20 opacity-60 sm:-bottom-36 sm:-left-32 sm:h-96 sm:w-96 md:h-80 md:w-80 lg:h-96 lg:w-96" />

        {/* Content */}
        <div className="relative z-20 flex h-full items-center justify-center">
          <Container className="flex flex-col items-center justify-center gap-4 text-center">
            {badge && <Badge isUppercase={true}>{badge}</Badge>}

            <h1 className="text-[36px] font-bold leading-[1.25] tracking-[-1px] text-white sm:text-[30px] md:text-[58px] lg:text-[68px]">
              {heading}
            </h1>

            {description && (
              <p className="max-w-[520px] text-[14px] font-normal leading-[1.7] text-white/80 md:text-[17px]">
                {description}
              </p>
            )}

            {/* Hero Cards */}
            {isCard && card.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4">
                {card.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-center text-[12px]"
                  >
                    <Icon
                      icon={item.icon}
                      className="text-[14px] font-bold text-[#EA7F4A]"
                    />

                    <span className="font-bold text-white">{item.title}</span>
                  </div>
                ))}
              </div>
            )}
          </Container>
        </div>
      </div>

      {/* Bottom Content */}
      {bottomContent && (
        <div className="w-full bg-[#025350]">
          <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-10">
            {/* Left Content */}
            <div className="flex flex-col gap-2">
              {bottomContent.heading && (
                <h2 className="text-[20px] font-bold leading-[1.3] text-white md:text-[26px] lg:text-[30px]">
                  {bottomContent.heading}
                </h2>
              )}

              {bottomContent.description && (
                <p className="max-w-[700px] text-[13px] leading-[1.6] text-white/60 md:text-[15px]">
                  {bottomContent.description}
                </p>
              )}
            </div>

            {/* Right Content */}
           
            <div className="flex shrink-0 flex-col items-center  gap-4 md:flex-row md:items-center">
             

              {bottomContent.buttonText && (
                <button
                  type="button"
                  className="flex h-[48px] items-center justify-center rounded-full bg-white px-8 text-[14px] font-bold text-[#003635] transition hover:bg-white/90"
                >
                  {bottomContent.buttonText}
                </button>
              )}
            </div>
          </Container>
        </div>
      )}

      {/* Stats */}
      {!bottomContent && stats.length > 0 && (
        <div className="grid w-full grid-cols-2 gap-y-8 bg-[#025350] p-6 md:grid-cols-4 md:gap-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </span>

              <span className="mt-1 text-sm text-white/70 md:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default InnerHero;
