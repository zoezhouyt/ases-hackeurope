import Link from "next/link";

type CTASectionProps = {
  title: string;
  description?: string;
  ctas: { label: string; href: string; primary?: boolean }[];
};

export default function CTASection({ title, description, ctas }: CTASectionProps) {
  return (
    <section className="bg-gray-950 rounded-3xl px-8 py-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-gray-400 max-w-xl mx-auto leading-relaxed">{description}</p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {ctas.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className={
              cta.primary
                ? "px-6 py-3 bg-white text-gray-900 text-sm font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                : "px-6 py-3 bg-gray-800 text-white text-sm font-medium rounded-xl border border-gray-700 hover:bg-gray-700 transition-colors"
            }
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
