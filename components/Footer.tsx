import Link from "next/link";

const footerLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/partners", label: "For Partners" },
  { href: "/event-playbook", label: "Event Playbook" },
  { href: "/hackeurope-pathway", label: "HackEurope Pathway" },
  { href: "/operations", label: "Operations" },
  { href: "/resources", label: "Resources" },
  { href: "/become-a-partner", label: "Become a Partner" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white text-gray-900 text-xs font-bold">
                AH
              </span>
              <span className="font-semibold text-white text-sm">
                ASES × HackEurope
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              A campus-to-HackEurope founder activation pipeline for European student builders.
            </p>
            <p className="mt-4 text-xs text-gray-600 italic">
              Low commitment for students. High signal for the ecosystem.
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Programme</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Important Notice</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Participation in ASES × HackEurope local events does not guarantee acceptance into HackEurope. Local partners provide application support, team formation, and programme guidance only. HackEurope selection decisions remain fully independent.
            </p>
            <p className="mt-3 text-xs text-gray-600 leading-relaxed">
              ASES × HackEurope is not an accelerator. We do not provide investment, visas, or employment guarantees.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} ASES × HackEurope. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Version 1 — Local Partner Activation
          </p>
        </div>
      </div>
    </footer>
  );
}
