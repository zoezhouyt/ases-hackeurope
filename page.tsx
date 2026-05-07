import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ResourceCard from "@/components/ResourceCard";
import CTASection from "@/components/CTASection";
import { resources } from "@/data/resources";
import { Resource } from "@/lib/types";

const typeOrder: Resource["type"][] = ["SOP", "Guide", "Template", "Slides", "Form", "Sheet"];

const grouped = typeOrder.reduce<Record<string, typeof resources>>((acc, type) => {
  const matching = resources.filter((r) => r.type === type);
  if (matching.length > 0) acc[type] = matching;
  return acc;
}, {});

const typeLabels: Record<Resource["type"], string> = {
  SOP: "Standard Operating Procedures",
  Guide: "Guides",
  Template: "Templates",
  Slides: "Presentation Slides",
  Form: "Forms",
  Sheet: "Tracking Sheets",
};

export default function ResourcesPage() {
  return (
    <>
      <Hero
        badge="Partner Resources"
        title="Resource Library"
        subtitle="All templates, guides, forms, and tracking sheets available to ASES × HackEurope local partners. Resources marked 'Coming Soon' will be linked once the programme launches."
      />

      {/* Summary */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {Object.entries(grouped).map(([type, items]) => (
              <div key={type} className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 text-sm shadow-sm">
                <span className="font-medium text-gray-700">{typeLabels[type as Resource["type"]]}</span>
                <span className="text-xs text-gray-400">({items.length})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource groups */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {Object.entries(grouped).map(([type, items]) => (
            <div key={type}>
              <SectionHeader
                eyebrow={type}
                title={typeLabels[type as Resource["type"]]}
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notice */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
            Version 1 Note
          </p>
          <p className="text-sm text-blue-800 leading-relaxed">
            Resources currently show as "Coming Soon" will be replaced with real Google Drive links, Google Form URLs, and downloadable files once the programme officially launches. Local partners will receive direct access to all resources after completing onboarding.
          </p>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Want access to the full resource pack?"
            description="Become an ASES × HackEurope local partner to receive all templates, forms, slides, and guidance directly from ASES HQ."
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
