import { PartnerTier } from "@/lib/types";

export const partnerTiers: PartnerTier[] = [
  {
    name: "Bronze Partner",
    requirements: [
      "Host 1 activation event",
      "Submit post-event report",
      "Promote HackEurope through local channels",
    ],
    benefits: [
      "Official partner certificate",
      "Social media mention from ASES HQ",
    ],
  },
  {
    name: "Silver Partner",
    requirements: [
      "Host 2 activation events",
      "Reach 50+ students across events",
      "Submit complete post-event reports",
      "Run at least one application support session",
    ],
    benefits: [
      "Official partner certificate",
      "Featured social post from ASES HQ",
      "Priority access to future ASES programmes",
      "Recommendation letter for society leadership",
    ],
  },
  {
    name: "Gold Partner",
    requirements: [
      "Host 3+ activation events",
      "Reach 100+ students across events",
      "Run a HackEurope application clinic",
      "Strong application conversion and consistent reporting",
    ],
    benefits: [
      "Top partner feature on ASES x HackEurope website",
      "Invitation to ASES Partner Summit",
      "Co-hosting opportunities with ASES HQ",
      "Priority recognition across ASES channels",
      "Leadership recommendation letters",
    ],
  },
];
