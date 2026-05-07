import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import PartnerTierCard from "@/components/PartnerTierCard";
import CTASection from "@/components/CTASection";
import { partnerTiers } from "@/data/partnerTiers";

const responsibilities = [
  "Appoint one main contact person for ASES HQ communications.",
  "Attend onboarding session with ASES HQ before launching events.",
  "Host at least two activation events per programme cycle.",
  "Run at least one HackEurope application-focused event (e.g. application clinic).",
  "Use ASES-approved registration and reporting templates for all events.",
  "Promote events through local student channels and society networks.",
  "Collect attendance data and HackEurope interest through approved forms.",
  "Submit a post-event report within 72 hours of each event.",
  "Follow approved ASES × HackEurope branding and messaging guidelines.",
  "Avoid promising guaranteed HackEurope acceptance, funding, visas, investment, or employment.",
  "Participate in ASES HQ check-ins when requested.",
  "Support post-event follow-up with interested students.",
];

const hqProvides = [
  { title: "Official Partner Status", desc: "Recognition as an ASES × HackEurope local partner." },
  { title: "Local Partner SOP", desc: "Complete standard operating procedure guide." },
  { title: "Event Playbook", desc: "Seven event formats with agendas and facilitation notes." },
  { title: "Workshop Slides", desc: "Ready-to-use presentation decks for each event format." },
  { title: "Marketing Templates", desc: "Pre-approved copy for social media, email, and promotion." },
  { title: "Application Clinic Guide", desc: "Facilitation guide for running HackEurope application sessions." },
  { title: "Tracking Templates", desc: "Google Forms and Google Sheets templates for event reporting." },
  { title: "Central Support", desc: "Access to ASES HQ team for guidance and troubleshooting." },
  { title: "Social Media Recognition", desc: "Featured posts and mentions from ASES HQ channels." },
  { title: "Future Opportunities", desc: "Priority access to future ASES programmes and collaborations." },
];

export default function PartnersPage() {
  return (
    <>
      <Hero
        badge="Local Partners"
        title="Become an ASES × HackEurope Local Partner"
        subtitle="Local partners are university-based societies or organisations that help activate student builders on campus. You bring the campus presence. We bring the operating system."
        ctas={[
          { label: "Apply to Become a Partner", href: "/become-a-partner", primary: true },
          { label: "View Event Playbook", href: "/event-playbook" },
        ]}
      />

      {/* What partners do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Partner Responsibilities"
                title="What each local partner is required to do"
                description="All local partners commit to a lightweight but structured set of responsibilities to ensure consistent programme quality across the network."
              />
              <ol className="mt-8 flex flex-col gap-3">
                {responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <SectionHeader
                eyebrow="What You Receive"
                title="The full ASES partner toolkit"
                description="ASES HQ provides everything a local partner needs to run credible, well-structured founder activations on campus."
              />
              <div className="mt-8 grid grid-cols-1 gap-3">
                {hqProvides.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <svg className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Partner Tiers"
            title="Bronze, Silver, and Gold"
            description="Partners are recognised at different tiers based on their event output, student reach, and application conversion. All tiers receive official partner status."
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTiers.map((tier) => (
              <PartnerTierCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-100 rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">Important</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Becoming a local partner does not make your society an official HackEurope selection body. Local partners support student activation, team formation, and application guidance only. HackEurope selection decisions are made fully independently by HackEurope.
          </p>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Activate your campus"
            description="Apply to become an official ASES × HackEurope local partner and start running founder activation events at your university."
            ctas={[
              { label: "Apply Now", href: "/become-a-partner", primary: true },
              { label: "See Resources", href: "/resources" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
