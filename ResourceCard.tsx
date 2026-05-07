"use client";

import { Resource } from "@/lib/types";

const typeColors: Record<Resource["type"], string> = {
  SOP: "bg-purple-50 text-purple-700 border-purple-100",
  Template: "bg-blue-50 text-blue-700 border-blue-100",
  Form: "bg-green-50 text-green-700 border-green-100",
  Sheet: "bg-teal-50 text-teal-700 border-teal-100",
  Slides: "bg-orange-50 text-orange-700 border-orange-100",
  Guide: "bg-rose-50 text-rose-700 border-rose-100",
};

export default function ResourceCard({ resource }: { resource: Resource }) {
  const isPlaceholder = resource.href === "#";

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug">{resource.title}</h3>
        <span
          className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border ${typeColors[resource.type]}`}
        >
          {resource.type}
        </span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">{resource.description}</p>
      <a
        href={resource.href}
        target={isPlaceholder ? undefined : "_blank"}
        rel={isPlaceholder ? undefined : "noopener noreferrer"}
        className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
          isPlaceholder
            ? "bg-gray-50 text-gray-400 border border-gray-100 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-700"
        }`}
        onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        {isPlaceholder ? "Coming Soon" : "Open Resource"}
      </a>
    </div>
  );
}
