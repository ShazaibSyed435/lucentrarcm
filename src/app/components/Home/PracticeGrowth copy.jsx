import {
  BriefcaseBusiness,
  CircleDollarSign,
  ChartNoAxesCombined,
  UserRoundCheck,
} from "lucide-react";
import Container from "../common/Container";

export default function PracticeGrowth() {
  const cards = [
    {
      icon: CircleDollarSign,
      title: "Enhanced Revenue Recovery",
      description:
        "Unlock more revenue with accurate billing, timely submissions, and proactive follow-ups on every claim.",
      value: "120+",
      label: "Healthcare Partners Supported",
      highlighted: false,
    },
    {
      icon: ChartNoAxesCombined,
      title: "Higher Claim Approval Rates",
      description:
        "Our clean-claim process reduces denials and accelerates reimbursements across all major payers.",
      value: "4,500+",
      label: "Claims Successfully Processed",
      highlighted: true,
    },
    {
      icon: UserRoundCheck,
      title: "Faster Credentialing & Contracting",
      description:
        "Simplify provider enrollment and expedite payer contracts — get in-network without delays.",
      value: "75+",
      label: "Credentialing Projects Completed",
      highlighted: false,
    },
  ];

  return (
    <section className="w-full bg-[#f2f8f7] py-16 sm:py-20 lg:py-24">
      <Container className="px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Heading */}
          <div className="w-full lg:max-w-[650px]">
            {/* Badge */}
            <div className="mb-3 inline-flex items-center gap-2">
              <BriefcaseBusiness className="h-[13px] w-[13px]  text-[#EA7F4A]" />

              <span className="text-[13px] font-bold uppercase tracking-[1px] text-[#EA7F4A]">
                Powering Practice Growth
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[26px] font-bold leading-[1.25] mxa-w-[580px] tracking-[-1px] text-black sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[44px]">
              Experience <span className="text-[#075f5b]">Excellence </span>
              <br className="hidden md:block" /> with a Top-Ranked{" "}
              <br className="hidden md:block" />
              Medical Billing Company
            </h2>
          </div>

          {/* Description */}
          <div className="w-full lg:max-w-[360px] lg:pb-1">
            <p className="text-[14px] leading-[1.8] text-[#7b8585] sm:text-[16px]">
              Your success is our priority — expert, transparent, and customized
              billing services that keep your practice running smoothly.
            </p>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-12 md:mt-14 flex flex-wrap gap-5">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`w-full md:w-[calc(50%-10px)] lg:flex-1 ${
                  card.highlighted ? "order-first md:order-none" : ""
                }`}
              >
                <div
                  className={`relative flex h-full min-h-[330px] flex-col rounded-[15px] bg-white p-6 shadow-[0_8px_30px_rgba(7,95,91,0.06)] sm:p-8 overflow-hidden border border-transparent  hover:-translate-y-2 transition-transform ${
                    card.highlighted
                      ? " hover:border-[#EA7F4A]"
                      : "  hover:border-[#022524]"
                  }`}
                >
                  {/* Top Gradient Border */}
                  <div
                    className={`absolute left-0 top-0 h-[4px] w-full rounded-t-[15px] ${
                      card.highlighted
                        ? "bg-[#EA7F4A]"
                        : "bg-gradient-to-r from-[#075f5b] via-[#9b8065] to-[#EA7F4A]"
                    }`}
                  />

                  {/* Icon */}
                  <div
                    className={`flex h-[50px] w-[50px] items-center justify-center rounded-[11px] border ${
                      card.highlighted
                        ? "border-[#ffd1c5] bg-[#fff4f0] text-[#EA7F4A]"
                        : "border-[#c8dddd] bg-[#f0f6f5] text-[#075f5b]"
                    }`}
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-[17px] font-bold leading-[1.3] text-[#172b2b] sm:text-[19px]">
                    {card.title}
                  </h3>

                  {/* Divider */}
                  <div className="my-4 h-px w-full bg-[#e6eceb]" />

                  {/* Description */}
                  <p className="max-w-[400px] text-[13px] leading-[1.7] text-[#7b8585] sm:text-[14px]">
                    {card.description}
                  </p>

                  {/* Bottom Stats */}
                  <div className="mt-auto flex items-end justify-between pt-8">
                    <div>
                      <p
                        className={`text-[44px] md:text-[54px] font-bold leading-none tracking-[-1px] ${
                          card.highlighted ? "text-[#ed7548]" : "text-[#075f5b]"
                        }`}
                      >
                        {card.value}
                      </p>

                      <p className="mt-2 text-[12px] text-[#a0b0b0] ">
                        {card.label}
                      </p>
                    </div>

                    {/* Bottom Right Icon */}
                    <div
                      className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full ${
                        card.highlighted
                          ? "bg-[#ed7548] text-white"
                          : "bg-[#075f5b] text-white"
                      }`}
                    >
                      <Icon className="h-[22px] w-[22px]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
