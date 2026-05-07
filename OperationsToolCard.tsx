import { OperationsTool } from "@/lib/types";

export default function OperationsToolCard({ tool }: { tool: OperationsTool }) {
  const items = tool.fields || tool.tracks || [];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
          {tool.fields ? "Form" : "Sheet"}
        </p>
        <h3 className="font-semibold text-gray-900 text-lg">{tool.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{tool.purpose}</p>
      </div>
      {items.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            {tool.fields ? "Fields" : "Tracks"}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-200 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
