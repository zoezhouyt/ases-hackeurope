import Hero from "@/components/Hero";
import StepCard from "@/components/StepCard";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

const steps = [
  {
    title: "ASES HQ recruits local partners",
    description:
      "ASES HQ identifies and onboards university-based societies that have the campus presence and student trust to run effective founder activations.",
    items: [
      "Entrepreneurship societies",
      "AI and machine learning societies",
      "Coding and computer science societies",
      "Hackathon societies",
      "VC and investment societies",
      "University enterprise centres",
      "Student innovation organisations",
    ],
  },
  {
    title: "Local partners receive the SOP pack",
    description:
      "Once onboarded, each local partner receives a complete standard operating pack from ASES HQ. Everything they need to run campus events is provided upfront.",
    items: [
      "Event format guides and agenda templates",
      "Workshop slides and facilitation notes",
      "Marketing copy and promotional templates",
      "Student registration form template",
      "Post-event reporting form template",
      "HackEurope application guidance and clinic guide",
    ],
  },
  {
    title: "Local partners host campus events",
    description:
      "Local partners use ASES-approved formats to run a series of founder activation events on campus, designed to surface student builders and connect them to HackEurope.",
    items: [
      "Founder Discovery Night",
      "Problem Discovery Sprint",
      "Team Formation Night",
      "Build Night",
      "Mini-Hackathon",
      "HackEurope Application Clinic",
      "Post-HackEurope Reunion",
    ],
  },
  {
    title: "Students apply to HackEurope",
    description:
      "Through local events, students develop ideas, form teams, and receive structured application support. Local partners guide them through the full HackEurope application process.",
    items: [
      "Students learn what HackEurope is and what it looks for",
      "Teams form and refine their project ideas",
      "Students attend application clinics to complete submissions",
      "Local partners track interest and application status",
      "Interested students submit before the HackEurope deadline",
    ],
  },
  {
    title: "ASES HQ monitors progress",
    description:
      "ASES HQ uses Google Forms and Google Sheets to track partner activity, event outputs, and application conversion across the full network. No custom dashboard is required in Version 1.",
    items: [
      "Partners onboarded across Europe",
      "Events hosted per partner and per cycle",
      "Student attendance and HackEurope interest rates",
      "Applications started and submitted per event",
      "Partner tier performance and reporting quality",
      "Overall campus-to-HackEurope conversion rate",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        badge="Programme Structure"
        title="How It Works"
        subtitle="A five-step programme that activates student builders from campus discovery to HackEurope application — coordinated by ASES HQ across local university partners."
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
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

      {/* Programme summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Version 1 scope"
            title="What this version covers"
            description="Version 1 focuses on partner outreach, onboarding, campus event execution, and HackEurope application conversion. Internal tracking is handled through Google Forms and Sheets."
            centered
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Local network outreach", icon: "🌐" },
              { label: "Local partner onboarding", icon: "🤝" },
              { label: "Campus event execution", icon: "🎯" },
              { label: "HackEurope application conversion", icon: "🚀" },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center">
                <span className="text-2xl">{item.icon}</span>
                <p className="mt-3 text-sm font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Ready to join the programme?"
            description="Apply to become an ASES × HackEurope local partner at your university."
            ctas={[
              { label: "Become a Local Partner", href: "/become-a-partner", primary: true },
              { label: "View Event Playbook", href: "/event-playbook" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
