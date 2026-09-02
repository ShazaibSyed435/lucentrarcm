


import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { ChevronRight } from "lucide-react";
import Badge from "@components/common/Badge";

function ContactUsPageSection() {
  const features = [
    "End-to-end Revenue Cycle Management",
    "Credentialing & Payer Contracting",
    "Real-time Eligibility Verification",
  ];

  const stats = [
    {
      value: "97%",
      label: "Happy Clients",
    },
    {
      value: "4,500+",
      label: "Claims Processed",
    },
    {
      value: "25%",
      label: "Revenue Increase",
    },
  ];

  return (
    <section className="w-full ">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col overflow-hidden md:rounded-2xl md:h-[600px] md:flex-row lg:h-[680px] xl:h-[750px]  gap-8 py-16 sm:py-20 lg:py-24">
        {/* BOX 2 - IMAGE */}
        <div className="relative order-1 h-[280px] w-full shrink-0 overflow-hidden bg-[#d9f4f3] sm:h-[340px] md:order-2 md:h-full md:w-2/3 ">
         
        </div>

        {/* BOX 1 - CONTENT */}

        <div className="order-2 w-full bg-[linear-gradient(to_bottom_right,#012120,#02504D,#033E3C)] md:order-1 md:h-full md:w-1/3">
          <div className="relative h-full overflow-hidden text-white  ">
            {/* Background circles */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border-[60px] border-[#155f5b] opacity-60 sm:-right-32 sm:-top-32 sm:h-80 sm:w-80 md:h-80 md:w-80 lg:h-96 lg:w-96" />

            <div className="pointer-events-none absolute -bottom-32 -left-28 h-80 w-80 rounded-full border-[60px] border-[#155f5b] opacity-60 sm:-bottom-36 sm:-left-32 sm:h-96 sm:w-96 md:h-80 md:w-80 lg:h-96 lg:w-96" />

            {/* Content */}
            <div className="relative max-w-[640px] md:ml-auto z-10 flex h-full gap-4 lg:gap-5 xl:gap-6 justify-center flex-col px-6 py-10 md:px-8 md:py-8 lg:px-10 lg:py-12">
             

            

            

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsPageSection;
