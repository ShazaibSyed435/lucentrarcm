import {
  BriefcaseBusiness,
  CircleDollarSign,
  ChartNoAxesCombined,
  UserRoundCheck,
} from "lucide-react";
import Container from "./common/Container";

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
            <div className="mb-4 inline-flex items-center gap-2">
              <BriefcaseBusiness className="h-[13px] w-[13px] text-[#ff6845]" />

              <span className="text-[11px] font-semibold uppercase tracking-[1px] text-[#ff6845]">
                Powering Practice Growth
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[30px] font-semibold leading-[1.15] tracking-[-1px] text-[#102b2a] sm:text-[36px] md:text-[40px] lg:text-[42px] xl:text-[44px]">
              Experience <span className="text-[#075f5b]">Excellence</span>
              <br className="hidden sm:block" />
              with a Top-Ranked
              <br className="hidden sm:block" />
              Medical Billing Company
            </h2>
          </div>

          {/* Description */}
          <div className="w-full lg:max-w-[360px] lg:pb-1">
            <p className="text-[13px] leading-[1.8] text-[#7b8585] sm:text-[14px]">
              Your success is our priority — expert, transparent, and customized
              billing services that keep your practice running smoothly.
            </p>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-12 flex flex-wrap gap-5">
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
                  className={`relative flex h-full min-h-[330px] flex-col rounded-[15px] bg-white p-7 shadow-[0_8px_30px_rgba(7,95,91,0.06)] sm:p-8 overflow-hidden border border-transparent  hover:-translate-y-2 transition-transform ${
                    card.highlighted
                      ? " hover:border-[#ff6845]"
                      : "  hover:border-[#022524]"
                  }`}
                >
                  {/* Top Gradient Border */}
                  <div
                    className={`absolute left-0 top-0 h-[4px] w-full rounded-t-[15px] ${
                      card.highlighted
                        ? "bg-[#ff6845]"
                        : "bg-gradient-to-r from-[#075f5b] via-[#9b8065] to-[#ff6845]"
                    }`}
                  />

                  {/* Icon */}
                  <div
                    className={`flex h-[50px] w-[50px] items-center justify-center rounded-[11px] border ${
                      card.highlighted
                        ? "border-[#ffd1c5] bg-[#fff4f0] text-[#ff6845]"
                        : "border-[#c8dddd] bg-[#f0f6f5] text-[#075f5b]"
                    }`}
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-[17px] font-semibold leading-[1.3] text-[#172b2b] sm:text-[18px]">
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
                        className={`text-[42px] font-bold leading-none tracking-[-1px] ${
                          card.highlighted ? "text-[#ed7548]" : "text-[#075f5b]"
                        }`}
                      >
                        {card.value}
                      </p>

                      <p className="mt-2 text-[10px] text-[#a0b0b0] sm:text-[11px]">
                        {card.label}
                      </p>
                    </div>

                    {/* Bottom Right Icon */}
                    <div
                      className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full ${
                        card.highlighted
                          ? "bg-[#ed7548] text-white"
                          : "bg-[#075f5b] text-white"
                      }`}
                    >
                      <Icon className="h-[19px] w-[19px]" />
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
