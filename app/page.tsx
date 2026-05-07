import Hero from "@/components/Hero";
import PipelineFlow from "@/components/PipelineFlow";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const hqProvides = [
  "Local Partner SOP and event playbook",
  "Event agenda templates and workshop slides",
  "Marketing copy and promotional materials",
  "Registration and reporting form templates",
  "HackEurope application guidance and clinic resources",
  "Central coordination and partner check-ins",
  "Google Forms / Sheets tracking infrastructure",
  "Social media recognition and partner features",
];

const partnersProvide = [
  "Campus presence and student network access",
  "Local event hosting (minimum 2 per cycle)",
  "Student outreach through local channels",
  "Post-event data collection and reporting",
  "HackEurope application support sessions",
  "Team formation facilitation",
];

export default function HomePage() {
  return (
    <>
      <Hero
        badge="ASES × HackEurope — Version 1"
        title="Campus-to-HackEurope Founder Pipeline"
        subtitle="ASES × HackEurope helps university societies across Europe discover, nurture, and activate early student builders through lightweight founder events, build nights, and application clinics."
        ctas={[
          { label: "Become a Local Partner", href: "/become-a-partner", primary: true },
          { label: "View Event Playbook", href: "/event-playbook" },
          { label: "See Operating Model", href: "/how-it-works" },
        ]}
      />

      {/* Pipeline Visual */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="The Pipeline"
            title="From ASES HQ to HackEurope"
            description="A structured six-stage pathway that turns campus presence into HackEurope applications."
            centered
          />
          <div className="mt-10">
            <PipelineFlow />
          </div>
        </div>
      </section>

      {/* What HQ and Partners provide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="ASES HQ"
                title="What the central layer provides"
                description="ASES HQ acts as the operating core of the programme, equipping local partners with everything they need to run credible, effective campus activations."
              />
              <ul className="mt-8 flex flex-col gap-3">
                {hqProvides.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                eyebrow="Local Partners"
                title="What campus nodes provide"
                description="Local university partners bring the on-the-ground presence and student trust that ASES HQ cannot replicate at scale from the centre."
              />
              <ul className="mt-8 flex flex-col gap-3">
                {partnersProvide.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Not an accelerator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
            Why this works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Low commitment for students.
            <br />
            <span className="text-gray-400">High signal for the ecosystem.</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Students do not need to drop out, relocate, or commit full-time. They can explore entrepreneurship through local university events and the HackEurope application pathway — on their own schedule.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Not an accelerator",
                body: "We do not ask students to quit school, move to a hub, or commit equity. This is a founder discovery pathway, not a venture programme.",
              },
              {
                title: "Not a bootcamp",
                body: "Events are lightweight activations — 90-minute discovery nights and build sessions — designed to fit around academic schedules.",
              },
              {
                title: "Not a guarantee",
                body: "We provide application support and programme guidance. HackEurope selection remains fully independent of ASES and local partners.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-gray-900 rounded-2xl p-6">
                <h3 className="font-semibold text-white text-sm mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Explore the programme"
            title="Everything local partners need"
            description="From event formats to reporting templates, the full partner toolkit is available on this site."
            centered
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "How It Works", desc: "The five-step programme explained.", href: "/how-it-works" },
              { title: "For Local Partners", desc: "Responsibilities, tiers, and what you receive.", href: "/partners" },
              { title: "Event Playbook", desc: "Seven event formats, agendas, and outputs.", href: "/event-playbook" },
              { title: "HackEurope Pathway", desc: "How campus events connect to HackEurope.", href: "/hackeurope-pathway" },
              { title: "Operations", desc: "How ASES HQ monitors progress in Version 1.", href: "/operations" },
              { title: "Resources", desc: "Templates, forms, SOPs, and guides.", href: "/resources" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-gray-200 transition-all"
              >
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-gray-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs text-gray-400 group-hover:text-gray-700 transition-colors">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Ready to activate your campus?"
            description="Apply to become an ASES × HackEurope local partner and bring the founder activation pipeline to your university."
            ctas={[
              { label: "Apply to Become a Partner", href: "/become-a-partner", primary: true },
              { label: "Read the Playbook", href: "/event-playbook" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
