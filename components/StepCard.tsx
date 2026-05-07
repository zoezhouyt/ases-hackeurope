type StepCardProps = {
  number: number;
  title: string;
  description: string;
  items?: string[];
};

export default function StepCard({ number, title, description, items }: StepCardProps) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center shrink-0">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-bold text-sm">
          {number}
        </div>
        <div className="w-px flex-1 bg-gray-100 mt-3" />
      </div>
      <div className="pb-10 flex-1">
        <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">{description}</p>
        {items && items.length > 0 && (
          <ul className="flex flex-col gap-1.5">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
