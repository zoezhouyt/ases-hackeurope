const stages = [
  { label: "ASES HQ", sub: "Central operating layer" },
  { label: "Local Partner", sub: "Campus discovery node" },
  { label: "Campus Event", sub: "Activation moment" },
  { label: "Student Teams", sub: "Builders form & ideate" },
  { label: "HackEurope Application", sub: "Guided submission" },
  { label: "HackEurope Participation", sub: "Compete & connect" },
];

export default function PipelineFlow() {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex items-start gap-0 min-w-max mx-auto justify-center">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex items-center">
            <div className="flex flex-col items-center w-36">
              <div className="w-full rounded-xl bg-gray-900 text-white px-3 py-3 text-center">
                <p className="text-xs font-semibold leading-snug">{stage.label}</p>
              </div>
              <p className="mt-2 text-xs text-gray-400 text-center leading-snug px-1">
                {stage.sub}
              </p>
            </div>
            {i < stages.length - 1 && (
              <div className="flex items-center mb-6 mx-1">
                <div className="w-6 h-px bg-gray-300" />
                <svg className="w-3 h-3 text-gray-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
