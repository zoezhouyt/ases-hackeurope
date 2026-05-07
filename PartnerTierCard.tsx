import { PartnerTier } from "@/lib/types";

const tierStyles: Record<PartnerTier["name"], { badge: string; border: string; icon: string }> = {
  "Bronze Partner": {
    badge: "bg-orange-50 text-orange-700 border-orange-100",
    border: "border-orange-100",
    icon: "🥉",
  },
  "Silver Partner": {
    badge: "bg-gray-100 text-gray-700 border-gray-200",
    border: "border-gray-200",
    icon: "🥈",
  },
  "Gold Partner": {
    badge: "bg-yellow-50 text-yellow-700 border-yellow-100",
    border: "border-yellow-100",
    icon: "🥇",
  },
};

export default function PartnerTierCard({ tier }: { tier: PartnerTier }) {
  const style = tierStyles[tier.name];

  return (
    <div className={`bg-white border ${style.border} rounded-2xl p-6 shadow-sm flex flex-col gap-5`}>
      <div className="flex items-center gap-3">
        <span className="text-2xl">{style.icon}</span>
        <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${style.badge}`}>
          {tier.name}
        </span>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Requirements
        </p>
        <ul className="flex flex-col gap-2">
          {tier.requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Benefits
        </p>
        <ul className="flex flex-col gap-2">
          {tier.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
