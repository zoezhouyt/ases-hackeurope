import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import StepCard from "@/components/StepCard";
import CTASection from "@/components/CTASection";

const journey = [
  {
    title: "Attend a local ASES × HackEurope event",
    description:
      "Students discover HackEurope through a local campus event — a Founder Discovery Night, Build Night, or Problem Discovery Sprint organised by their university society.",
    items: [
      "No prior startup experience required",
      "All degrees and disciplines welcome",
      "Technical and non-technical students both valued",
    ],
  },
  {
    title: "Join team matching",
    description:
      "At a Team Formation Night or through the interest form, students find teammates with complementary skills and shared interests.",
    items: [
      "Solo founders and partial teams both welcome",
      "Match by skill: technical, product, design, business",
      "Teams of 2–4 typically work best",
    ],
  },
  {
    title: "Build or refine a project idea",
    description:
      "Through Build Nights and Problem Discovery Sprints, students sharpen their ideas and produce a concrete prototype or project concept before applying.",
    items: [
      "Focus on a specific user problem",
      "Validate with peers at local events",
      "No finished product required to apply",
    ],
  },
  {
    title: "Attend a HackEurope Application Clinic",
    description:
      "Local partners run a structured application clinic — typically 1–2 weeks before the HackEurope deadline — where students complete and submit their applications with peer and facilitator feedback.",
    items: [
      "Learn what HackEurope is looking for",
      "Get feedback on your background and project framing",
      "Complete the application in a structured session",
      "Submit before the official HackEurope deadline",
    ],
  },
  {
    title: "Submit a HackEurope application",
    description:
      "Students submit their HackEurope application independently. Local partners track application status and follow up with students who expressed interest but have not yet submitted.",
    items: [
      "Submission is done directly through HackEurope's platform",
      "Local partners provide guidance, not submission on their behalf",
      "ASES HQ tracks interest-to-submission conversion rates",
    ],
  },
  {
    title: "Compete at HackEurope if selected",
    description:
      "HackEurope selects participants independently. Students who are selected represent their university and local partner community at the event.",
    items: [
      "Selection is solely at HackEurope's discretion",
      "Local partners do not influence selection decisions",
      "ASES × HackEurope provides application support, not acceptance",
    ],
  },
  {
    title: "Stay connected with the ASES local network",
    description:
      "After HackEurope, students attend a Post-HackEurope Reunion and remain connected to their local ASES partner community for future programmes and opportunities.",
    items: [
      "Share your HackEurope experience with future cohorts",
      "Mentor the next wave of student builders",
      "Stay informed about future ASES programmes",
    ],
  },
];

export default function HackEuropePathwayPage() {
  return (
    <>
      <Hero
        badge="Student Builder Pathway"
        title="From Campus Event to HackEurope"
        subtitle="How local ASES × HackEurope events connect student builders to the HackEurope application — step by step."
      />

      {/* Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {journey.map((step, i) => (
            <StepCard
              key={i}
              number={i + 1}
              title={step.title}
              description={step.description}
              items={step.items}
            />
          ))}
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Low commitment for students.<br />
            <span className="text-gray-400">High signal for the ecosystem.</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Students explore entrepreneurship through local university events at their own pace. No full-time commitment. No relocation. No equity required.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: "2–4 events", label: "Per partner cycle" },
              { stat: "1–2 weeks", label: "Before deadline for clinic" },
              { stat: "72 hours", label: "Report submission window" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-900 rounded-2xl p-6">
                <p className="text-2xl font-bold text-white">{item.stat}</p>
                <p className="text-sm text-gray-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-100 rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            Important Disclaimer
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Participation in ASES × HackEurope local events does not guarantee acceptance into HackEurope. Local partners provide application support, team formation, and programme guidance, but HackEurope selection decisions remain fully independent. ASES × HackEurope does not provide investment, visas, employment, or guaranteed access to any external programme.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Common Questions"
            title="What students ask"
          />
          <div className="mt-10 flex flex-col gap-4">
            {[
              {
                q: "Do I need a startup idea to attend?",
                a: "No. The Founder Discovery Night and Problem Discovery Sprint are specifically designed for students who are curious but do not yet have a concrete idea.",
              },
              {
                q: "Do I need a team to apply to HackEurope?",
                a: "Individual applications may vary by cycle. ASES × HackEurope runs Team Formation Nights specifically to help solo builders find teammates before applying.",
              },
              {
                q: "Will attending events guarantee my acceptance?",
                a: "No. ASES × HackEurope provides application support and programme guidance. HackEurope selection is made fully independently. Attending events and the application clinic increases your preparedness, not your guaranteed outcome.",
              },
              {
                q: "What if I miss the Application Clinic?",
                a: "Contact your local partner directly. They can share the application guidance materials. However, the clinic is the most effective preparation opportunity and attending is strongly recommended.",
              },
              {
                q: "Do I need to be studying a technical degree?",
                a: "No. HackEurope looks for diverse teams. ASES × HackEurope events welcome students from all backgrounds: technical, product, design, and business.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <p className="font-semibold text-gray-900 text-sm mb-2">{item.q}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Is your university part of the network?"
            description="Check if your university already has a local ASES × HackEurope partner, or ask your society to apply."
            ctas={[
              { label: "View Partner Resources", href: "/resources", primary: true },
              { label: "See How It Works", href: "/how-it-works" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
