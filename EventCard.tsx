import { EventFormat, EventDifficulty } from "@/lib/types";

const difficultyColors: Record<EventDifficulty, string> = {
  Easy: "bg-green-50 text-green-700 border-green-100",
  Medium: "bg-amber-50 text-amber-700 border-amber-100",
  High: "bg-red-50 text-red-700 border-red-100",
};

export default function EventCard({ event }: { event: EventFormat }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-gray-900 text-lg leading-snug">
          {event.title}
        </h3>
        <span
          className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyColors[event.difficulty]}`}
        >
          {event.difficulty}
        </span>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed">{event.purpose}</p>

      <div className="flex flex-wrap gap-3 text-xs">
        <span className="flex items-center gap-1.5 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full border border-gray-100">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {event.length}
        </span>
        {event.bestTiming && (
          <span className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full border border-blue-100">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {event.bestTiming}
          </span>
        )}
      </div>

      {event.agenda && event.agenda.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Agenda
          </p>
          <ul className="flex flex-col gap-1.5">
            {event.agenda.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Required Outputs
        </p>
        <ul className="flex flex-col gap-1.5">
          {event.requiredOutputs.map((output, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {output}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
