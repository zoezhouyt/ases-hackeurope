export type EventDifficulty = "Easy" | "Medium" | "High";

export type EventFormat = {
  id: string;
  title: string;
  purpose: string;
  length: string;
  difficulty: EventDifficulty;
  bestTiming?: string;
  agenda?: string[];
  requiredOutputs: string[];
};

export type PartnerTier = {
  name: "Bronze Partner" | "Silver Partner" | "Gold Partner";
  requirements: string[];
  benefits: string[];
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  type: "SOP" | "Template" | "Form" | "Sheet" | "Slides" | "Guide";
  href: string;
};

export type OperationsTool = {
  id: string;
  title: string;
  purpose: string;
  fields?: string[];
  tracks?: string[];
};
