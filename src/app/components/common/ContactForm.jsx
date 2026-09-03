export default function ContactForm({ subText }) {
  return (
    <div className="w-full rounded-[16px] border border-[#e2e9e8] bg-white p-6 md:p-10 overflow-hidden">
      {/* Top border */}
      <div className="relative">
        <div className="absolute -left-7 -right-7 -top-8 h-[4px] bg-gradient-to-r from-[#075f5b] to-[#EA7F4A] sm:-left-9 sm:-right-9 sm:-top-10 lg:-left-10 lg:-right-10 lg:-top-10" />
      </div>

      {/* Form Heading */}
      <h3 className="text-[20px] font-bold tracking-[-0.4px] text-[#172b2b] sm:text-[24px]">
        Send Us a Message
      </h3>

      <p className="mt-1 text-[12px] text-[#888f8f] md:text-[14px]">
        {subText ? subText : "We'll get back to you within 24 hours."}
      </p>

      {/* Form */}
      <form className="mt-6 flex flex-col gap-3">
        {/* Name + Phone */}
        <div className="flex flex-row gap-3">
          <input
            type="text"
            placeholder="Full Name"
            className="h-[42px] w-full rounded-[9px] border border-[#dce4e5] bg-[#f5f7f8] px-4 text-[12px] font-semibold outline-none transition placeholder:text-[#747b80] focus:border-[#075f5b]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="h-[42px] w-full rounded-[9px] border border-[#dce4e5] bg-[#f5f7f8] px-4 text-[12px] font-semibold outline-none transition placeholder:text-[#747b80] focus:border-[#075f5b]"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="h-[42px] w-full rounded-[9px] border border-[#dce4e5] bg-[#f5f7f8] px-4 text-[12px] font-semibold outline-none transition placeholder:text-[#747b7f] focus:border-[#075f5b]"
        />

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          className="h-[42px] w-full rounded-[9px] border border-[#dce4e5] bg-[#f5f7f8] px-4 text-[12px] font-semibold outline-none transition placeholder:text-[#747b7f] focus:border-[#075f5b]"
        />

        {/* Message */}
        <textarea
          rows={5}
          placeholder="How can we help you?"
          className="w-full resize-none rounded-[9px] border border-[#dce4e5] bg-[#f5f7f8] px-4 py-3 text-[12px] font-semibold outline-none transition placeholder:text-[#747b7f] focus:border-[#075f5b]"
        />

        {/* Consent */}
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-[18px] w-[18px] shrink-0 accent-[#075f5b]"
          />

          <span className="text-[12px] font-semibold leading-[1.6] text-[#6f7478]">
            I agree to receive SMS messages from Lucentra RCM Solutions LLC
            regarding billing, credentialing, and related healthcare revenue
            cycle services.
          </span>
        </label>

        {/* Disclaimer */}
        <p className="text-[12px] leading-[1.7] text-[#858b8e]">
          By checking this box, you consent to receive SMS messages from
          Lucentra RCM Solutions LLC regarding billing, credentialing, and
          related services. Message and data rates may apply. Message frequency
          varies. Reply STOP to opt out or reply HELP for more information. View
          our{" "}
          <a href="#" className="font-medium text-[#075f5b] underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-[#075f5b] underline">
            Privacy Policy
          </a>{" "}
          for more information.
        </p>

        {/* Submit */}
        <button
          type="submit"
          className="mt-5 h-[48px] w-full rounded-[9px] bg-[#075f5b] text-[16px] font-semibold text-white transition hover:bg-[#064d49]"
        >
          Send Message →
        </button>
      </form>
    </div>
  );
}
