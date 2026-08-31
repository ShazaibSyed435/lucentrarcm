import Container from "@components/common/Container";
import Image from "next/image";
import {
  BriefcaseBusiness,
  ShieldCheck,
  CircleCheck,
  ArrowRight,
} from "lucide-react";

function WhoWeAreSection() {
  const stats = [
    {
      value: "500+",
      label: "Providers Served",
    },
    {
      value: "98%",
      label: "Clean Claim Rate",
    },
    {
      value: "10+",
      label: "Years Experience",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Expert & Trusted Partners",
      description:
        "Deep industry knowledge with transparent, compliant billing practices to ensure your claims are handled accurately and promptly.",
    },
    {
      icon: CircleCheck,
      title: "Focused on Your Success",
      description:
        "Reduce denials, accelerate payments, and improve cash flow so you can concentrate on delivering quality patient care.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          {/* ================= LEFT SIDE ================= */}
          <div className="w-full lg:w-1/2">
            {/* Image Wrapper */}
            <div className="relative overflow-visible">
              <div className="relative aspect-[1.24/1] w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px]  lg:w-[90%] overflow-hidden rounded-[16px]">
                <Image
                  src="/banner.jpg"
                  alt="Medical professional with newborn patient"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute right-3 sm:right-[10px] lg:right-[-10px] top-3 sm:top-7 flex items-center gap-3 rounded-[16px] bg-white px-4 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.12)] ">
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#075f5b] to-[#ff6845]">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>

                <div>
                  <p className="text-[18px] font-bold leading-none text-[#171717]">
                    10+
                  </p>

                  <p className="mt-1 whitespace-nowrap text-[11px] leading-none text-[#777777]">
                    Years of Excellence
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 flex min-h-[92px] w-full items-center justify-around rounded-[14px] bg-[#063f3c] px-4 py-4 sm:px-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-w-0 flex-1 flex-col items-center text-center"
                  >
                    <p className="text-[28px] font-bold leading-none text-white sm:text-[30px]">
                      {stat.value}
                    </p>

                    <p className="mt-2 whitespace-nowrap text-[11px] leading-none text-white/60 sm:text-[12px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col">
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2">
                <BriefcaseBusiness className="h-[14px] w-[14px] text-[#ff6845]" />

                <span className="text-[12px] font-semibold uppercase tracking-[1px] text-[#ff6845]">
                  Who We Are
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[700px] text-[30px] font-semibold leading-[1.15] tracking-[-1px] text-[#171717] sm:text-[36px] md:text-[40px] lg:text-[42px] xl:text-[46px]">
                Your Trusted Partner in{" "}
                <span className="text-[#075f5b]">Medical Billing Success</span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-[700px] text-[14px] font-normal leading-[1.7] text-[#7a7a7a] sm:text-[15px] md:text-[16px]">
                We have empowered 500+ healthcare providers nationwide to
                optimize their revenue and streamline billing processes. At
                Lucentra RCM Solutions, our dedicated team of billing experts
                focuses on maximizing your practice&apos;s financial health
                while simplifying your administrative workload.
              </p>

              {/* Features */}
              <div className="mt-8 flex flex-col gap-4">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex gap-4 rounded-[14px] border border-[#d8e9e7] bg-[#f5fbfa] p-5 sm:p-6"
                    >
                      {/* Icon */}
                      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[10px] bg-[#075f5b]">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-[17px] font-semibold leading-[1.3] text-[#171717] sm:text-[18px]">
                          {feature.title}
                        </h3>

                        <p className="mt-2 text-[13px] leading-[1.7] text-[#777777] sm:text-[14px]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex h-[54px] items-center justify-center gap-2 rounded-full bg-[#075f5b] px-7 text-[14px] font-semibold text-white transition hover:bg-[#064d49]">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button className="inline-flex h-[54px] items-center justify-center gap-2 rounded-full bg-[#075f5b] px-7 text-[14px] font-semibold text-white transition hover:bg-[#064d49]">
                  Get In Touch
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhoWeAreSection;
