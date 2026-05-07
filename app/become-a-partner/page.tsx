import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import StepCard from "@/components/StepCard";

const whoShouldApply = [
  "Entrepreneurship societies",
  "AI and machine learning societies",
  "Coding and computer science societies",
  "VC and investment societies",
  "Hackathon societies",
  "University enterprise centres",
  "Student innovation organisations",
];

const whatToPrepare = [
  "Your society name, university, and country",
  "Your role in the society",
  "An estimate of your active membership size",
  "A brief description of events you have run before",
  "Whether your society can reach technical students",
  "Your preferred event format from the playbook",
  "A proposed timeline for your first two events",
];

const applicationSteps = [
  {
    title: "Submit the local partner interest form",
    description:
      "Complete the Google Form with details about your society, university, and capacity to run events. The form takes approximately 10 minutes.",
    items: [],
  },
  {
    title: "ASES HQ reviews your society profile",
    description:
      "ASES HQ reviews your application within a few business days and assesses fit based on campus reach, event capacity, and alignment with programme goals.",
    items: [],
  },
  {
    title: "Intro call with ASES HQ",
    description:
      "A 30-minute call to discuss your society, proposed event timeline, and expectations on both sides. This is also your chance to ask questions.",
    items: [],
  },
  {
    title: "Choose your event format",
    description:
      "Together with ASES HQ, you confirm the event formats you will run, the timeline, and how you will collect data and submit reports.",
    items: [],
  },
  {
    title: "Receive your Local Partner SOP Pack",
    description:
      "ASES HQ shares all templates, slides, forms, and guidance materials. You are now ready to launch your first campus activation.",
    items: [],
  },
  {
    title: "Launch your first campus event",
    description:
      "Run your first ASES × HackEurope activation event and begin the campus-to-HackEurope pipeline at your university.",
    items: [],
  },
];

export default function BecomeAPartnerPage() {
  return (
    <>
      <Hero
        badge="Apply Now"
        title="Become an ASES × HackEurope Local Partner"
        subtitle="Bring the campus-to-HackEurope founder activation pipeline to your university. Low overhead. High impact."
        ctas={[
          {
            label: "Apply to Become a Partner",
            href: "https://forms.gle/example-local-partner-application",
            primary: true,
          },
        ]}
      />

      {/* Who should apply */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Who Should Apply"
                title="Is your organisation a good fit?"
                description="ASES × HackEurope local partners are student-led organisations with active campus presence and the ability to run structured events."
              />
              <ul className="mt-8 flex flex-col gap-3">
                {whoShouldApply.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeader
                eyebrow="What to Prepare"
                title="What you should have ready"
                description="Having these details ready before submitting the form will speed up the review process."
              />
              <ul className="mt-8 flex flex-col gap-3">
                {whatToPrepare.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Application Process"
            title="What happens after you apply"
          />
          <div className="mt-12">
            {applicationSteps.map((step, i) => (
              <StepCard
                key={i}
                number={i + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-100 rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            Important
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Becoming a local partner does not make your society an official HackEurope selection body. Local partners support student activation, team formation, and application guidance only. HackEurope selection decisions are made fully independently by HackEurope.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Ready to activate your campus?
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Submit the local partner interest form. ASES HQ will review your profile and respond within a few business days.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://forms.gle/example-local-partner-application"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-700 transition-colors shadow-sm text-sm"
            >
              Apply to Become a Local Partner
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            The form links to a Google Form. Replace the placeholder URL with your real form before launch.
          </p>
        </div>
      </section>
    </>
  );
}
