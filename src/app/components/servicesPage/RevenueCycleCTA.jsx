import Container from "@components/common/Container";
import SectionHeading from "@components/common/SectionHeading";
import { ChevronRight } from "lucide-react";
export default function RevenueCycleCTA() {
  return (
    <footer className="relative w-full overflow-hidden  bg-[linear-gradient(to_bottom_right,#012120,#02504D,#033E3C)] text-white">
      {/* Decorative Circle - Top Right */}
      <div className="pointer-events-none absolute -right-[80px] -top-[120px] h-[310px] w-[310px] rounded-full border-[45px] border-[#397773]/25 sm:-right-[100px] sm:-top-[150px] sm:h-[390px] sm:w-[390px] md:-right-[120px] md:-top-[170px] md:h-[430px] md:w-[430px]" />

      {/* Decorative Circle - Bottom Left */}
      <div className="pointer-events-none absolute -bottom-[110px] -left-[80px] h-[270px] w-[270px] rounded-full border-[45px] border-[#397773]/25 sm:-bottom-[140px] sm:-left-[100px] sm:h-[350px] sm:w-[350px] md:-bottom-[160px] md:-left-[120px] md:h-[400px] md:w-[400px]" />

      <Container className="py-16 md:py-20 lg:py-28">
        <SectionHeading
          titleColor="text-white"
          descriptionColor="text-white/60"
          description="Let our billing experts audit your current process and show you exactly where revenue is being left on the table."
        >
          Ready to Optimize Your{" "}
          <span className="text-[#EA7F4A]"> Revenue Cycle?</span>
        </SectionHeading>

        <div className="flex flex-wrap gap-3 justify-center mt-6  ">
          <button className="flex h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[#EA7F4A] px-8 text-[14px] font-semibold whitespace-nowrap text-white transition hover:bg-[#f56d3a]">
            Schedule a Free Audit
          </button>

          <button className="h-12 shrink-0 rounded-full px-8 text-[14px] font-semibold whitespace-nowrap hover:text-[#075754] transition hover:bg-gray-100">
            Learn About Us
          </button>
        </div>
      </Container>
    </footer>
  );
}
