import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import OperationsToolCard from "@/components/OperationsToolCard";
import CTASection from "@/components/CTASection";
import { operationsTools } from "@/data/operationsTools";

const partnerStatuses = [
  "Targeted",
  "Contacted",
  "Replied",
  "Call Scheduled",
  "Onboarded",
  "Event Planned",
  "Event Completed",
  "Report Submitted",
  "Dormant",
];

export default function OperationsPage() {
  return (
    <>
      <Hero
        badge="Internal Operations"
        title="ASES HQ Operating System"
        subtitle="Version 1 uses Google Forms and Google Sheets for all partner tracking and event monitoring. No custom dashboard is required until the process is validated at scale."
      />

      {/* Why Forms/Sheets first */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                eyebrow="Version 1 Approach"
                title="Why Google Forms and Sheets first"
                description="A deliberate choice to launch fast, validate the process, and avoid unnecessary infrastructure complexity before the model is proven."
              />
              <div className="mt-8 flex flex-col gap-4">
                {[
                  {
                    title: "Faster to launch",
                    body: "No backend development required. Forms can be deployed in hours and shared with local partners immediately after onboarding.",
                  },
                  {
                    title: "Easier for local partners",
                    body: "Google Forms and Sheets require no new accounts or training. Local partners already know how to use them.",
                  },
                  {
                    title: "Flexible during the pilot",
                    body: "Tracking fields and formulas can be adjusted between cycles without code deployments. The process can evolve as we learn.",
                  },
                  {
                    title: "Avoids premature complexity",
                    body: "A custom dashboard before we understand the data model would likely need to be rebuilt. Forms/Sheets validate what matters first.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <svg className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Reporting Cadence"
                title="When data flows"
              />
              <div className="mt-8 flex flex-col gap-3">
                {[
                  { timing: "Within 72 hours", action: "Local partners submit post-event report after each event." },
                  { timing: "Weekly", action: "ASES HQ reviews partner progress across all active events." },
                  { timing: "Biweekly", action: "ASES HQ sends reminders and check-ins to active local partners." },
                  { timing: "End of cycle", action: "ASES HQ prepares a pilot report summarising activation results." },
                ].map((item) => (
                  <div key={item.timing} className="flex items-start gap-4 border-b border-gray-100 pb-3 last:border-0">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-28 shrink-0 mt-0.5">
                      {item.timing}
                    </span>
                    <p className="text-sm text-gray-600">{item.action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <SectionHeader
                  eyebrow="Partner Pipeline"
                  title="Partner status flow"
                />
                <div className="mt-5 flex flex-wrap gap-2">
                  {partnerStatuses.map((status, i) => (
                    <div key={status} className="flex items-center gap-1.5">
                      <span className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                        {status}
                      </span>
                      {i < partnerStatuses.length - 1 && (
                        <svg className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Internal Tools"
            title="Version 1 tracking infrastructure"
            description="Seven tools covering partner pipeline management, event tracking, student interest capture, and programme-wide conversion analytics."
            centered
          />
          <div className="mt-12 flex flex-col gap-6">
            {operationsTools.map((tool) => (
              <OperationsToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Future dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Version 2 Roadmap"
            title="Future dashboard"
            description="Once partner volume and data requirements are validated, ASES HQ can replace Google Sheets with a custom web dashboard connected to Supabase or Airtable."
          />
          <div className="mt-8 flex flex-col gap-3">
            {[
              "Replace partner application form with a custom web form",
              "Connect Airtable or Supabase as the partner and event database",
              "Build a real-time HQ dashboard with conversion funnel view",
              "Automate post-event report reminders by email",
              "Add partner login portal for self-service reporting",
              "Generate automated pilot reports at end of each activation cycle",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-xs font-semibold text-gray-300 w-5 shrink-0 mt-0.5">V2</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Partner with ASES HQ"
            description="Become a local partner and receive access to all tracking templates, forms, and operational resources."
            ctas={[
              { label: "Become a Local Partner", href: "/become-a-partner", primary: true },
              { label: "View Resources", href: "/resources" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
