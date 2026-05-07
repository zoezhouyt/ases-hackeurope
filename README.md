# ASES × HackEurope — Local Partner Activation System

A polished public-facing partnership website for the ASES × HackEurope programme. Built to explain the campus-to-HackEurope founder activation pipeline to local university partners, HackEurope, and ecosystem stakeholders.

## What this is

ASES HQ acts as the central operating layer. Local university partners act as campus discovery nodes. HackEurope is the flagship competition destination.

The pipeline:
```
ASES HQ → Local Partner → Campus Event → Student Teams → HackEurope Application → HackEurope Participation
```

Strategic positioning: **Low commitment for students. High signal for the ecosystem.**

## Running locally

```bash
cd ases-hackeurope
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel will auto-detect Next.js and deploy with zero configuration.
4. Set any environment variables if needed (none required for Version 1).

Alternatively, using the Vercel CLI:
```bash
npm install -g vercel
vercel --prod
```

## What is included in Version 1

- **Public partnership website** — 8 pages explaining the programme to local university partners
- **Event playbook** — 7 event formats with agendas, difficulty levels, and required outputs
- **Local partner responsibilities** — Full list of requirements and three-tier partner recognition system
- **HackEurope pathway** — Step-by-step student journey from campus event to HackEurope application
- **Operations page** — Explains how ASES HQ monitors progress using Google Forms and Sheets
- **Resource library** — Cards for all templates, SOPs, guides, forms, and tracking sheets (with placeholder links)
- **Become a Partner page** — Application process and CTA linking to placeholder Google Form

## What is NOT included in Version 1

- No backend or database
- No user login or authentication
- No custom dashboard
- No founder scoring or VC scouting metrics
- No visa-related features
- No guaranteed HackEurope acceptance claims

## File structure

```
app/
  page.tsx                    Home — pipeline overview
  how-it-works/page.tsx       Five-step programme walkthrough
  partners/page.tsx           Partner responsibilities, toolkit, and tiers
  event-playbook/page.tsx     Seven event formats with full specs
  hackeurope-pathway/page.tsx Student journey from campus to HackEurope
  operations/page.tsx         Internal tools and tracking infrastructure
  resources/page.tsx          Resource library with placeholder links
  become-a-partner/page.tsx   Application process and CTA

components/
  Navbar.tsx                  Sticky top navigation
  Footer.tsx                  Site-wide footer with disclaimer
  Hero.tsx                    Page hero with badge, title, subtitle, CTAs
  SectionHeader.tsx           Eyebrow + title + description block
  PipelineFlow.tsx            Visual six-stage pipeline
  EventCard.tsx               Event format card with agenda and outputs
  PartnerTierCard.tsx         Bronze / Silver / Gold tier card
  ResourceCard.tsx            Resource card with type label and open button
  StepCard.tsx                Numbered step with connector line
  OperationsToolCard.tsx      Form/Sheet tool specification card
  CTASection.tsx              Dark call-to-action section

data/
  events.ts                   Seven event format definitions
  partnerTiers.ts             Three partner tier definitions
  resources.ts                Resource library entries
  operationsTools.ts          Internal tracking tool definitions

lib/
  types.ts                    Shared TypeScript types
```

## What to improve next

**Immediate (before launch):**
- Replace all `href: "#"` placeholder links with real Google Drive / Google Forms URLs
- Replace `https://forms.gle/example-local-partner-application` with the real partner application form
- Add real partner logos or university names to a `Partners` showcase section
- Add Open Graph metadata and favicon

**Version 2:**
- Replace Google Sheets with Airtable or Supabase integration
- Build a real-time HQ dashboard with conversion funnel analytics
- Add partner login portal for self-service event reporting
- Automate post-event report reminders by email
- Add downloadable PDFs and slide decks to the resource library
- Add a partner map showing active universities across Europe
