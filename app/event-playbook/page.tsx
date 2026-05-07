import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import CTASection from "@/components/CTASection";
import { events } from "@/data/events";

export default function EventPlaybookPage() {
  return (
    <>
      <Hero
        badge="Event Playbook"
        title="Campus Event Formats"
        subtitle="Seven tested event formats for local partners. Each comes with a defined purpose, agenda, and required outputs. This is an execution guide, not a marketing brochure."
      />

      {/* Summary table */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 pr-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Event</th>
                  <th className="pb-3 pr-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Length</th>
                  <th className="pb-3 pr-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Difficulty</th>
                  <th className="pb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Best Timing</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-6 font-medium text-gray-900">{event.title}</td>
                    <td className="py-3 pr-6 text-gray-500">{event.length}</td>
                    <td className="py-3 pr-6">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                          event.difficulty === "Easy"
                            ? "bg-green-50 text-green-700 border-green-100"
                            : event.difficulty === "Medium"
                            ? "bg-amber-50 text-amber-700 border-amber-100"
                            : "bg-red-50 text-red-700 border-red-100"
                        }`}
                      >
                        {event.difficulty}
                      </span>
                    </td>
                    <td className="py-3 text-gray-500">{event.bestTiming ?? "Flexible"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Event cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Event Formats"
            title="Full event specifications"
            description="Each event format is designed to fit a specific stage in the campus-to-HackEurope journey. Start with Easy formats and progress to higher-effort events as your partner network matures."
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Execution principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Execution Principles"
            title="What makes events work"
            centered
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Start with a Founder Discovery Night", body: "It is the lowest-effort, highest-reach format and creates the pipeline for all subsequent events." },
              { title: "Always collect the interest form", body: "Use the QR-linked HackEurope interest form at every event. This is how ASES HQ tracks conversions." },
              { title: "Submit reports within 72 hours", body: "Delays in reporting break the programme's tracking cadence. Designate someone responsible before the event." },
              { title: "Do not over-promise", body: "Never tell students they will be accepted to HackEurope. Offer application support and guidance only." },
              { title: "Build towards the Application Clinic", body: "Every earlier event should funnel students toward the Application Clinic. That is the primary conversion moment." },
              { title: "Use ASES templates exactly", body: "Approved templates ensure consistent data across the network and protect the brand. Do not create custom versions." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Ready to run your first event?"
            description="Download the full event playbook and SOP pack to get started as an ASES × HackEurope local partner."
            ctas={[
              { label: "Get the SOP Pack", href: "/resources", primary: true },
              { label: "Become a Partner", href: "/become-a-partner" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
