import type { TrackEvent } from "@/lib/tracker";

export const metadata = {
  title: "Analytics Dashboard",
  description: "View click analytics for your website.",
  robots: "noindex, nofollow",
};

async function getEvents(): Promise<TrackEvent[]> {
  try {
    // Server component — fetch from our own API
    const res = await fetch(
      `${process.env.APP_URL ?? "http://localhost:3000"}/api/track`,
      { cache: "no-store" },
    );
    const data = (await res.json()) as { events: TrackEvent[] };
    return data.events ?? [];
  } catch {
    return [];
  }
}

function summarise(events: TrackEvent[]) {
  const byType: Record<string, number> = {};
  const byPage: Record<string, number> = {};

  for (const e of events) {
    byType[e.type] = (byType[e.type] ?? 0) + 1;
    if (e.page) byPage[e.page] = (byPage[e.page] ?? 0) + 1;
  }

  return {
    byType: Object.entries(byType).sort((a, b) => b[1] - a[1]),
    byPage: Object.entries(byPage).sort((a, b) => b[1] - a[1]),
  };
}

const TYPE_EMOJI: Record<string, string> = {
  whatsapp_click: "💬",
  call_click: "📞",
};

export default async function AnalyticsDashboard() {
  const events = await getEvents();
  const { byType, byPage } = summarise(events);
  const recent = [...events].reverse().slice(0, 50);

  return (
    <main
      className="min-h-screen bg-gray-50 p-6 font-sans text-gray-800"
      dir="ltr"
    >
      <h1 className="mb-1 text-2xl font-bold">Click Analytics</h1>
      <p className="mb-8 text-sm text-gray-500">
        {events.length} total events recorded
      </p>

      {/* Summary cards */}
      <section className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {byType.map(([type, count]) => (
          <div
            key={type}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="text-2xl">{TYPE_EMOJI[type] ?? "📊"}</div>
            <div className="mt-1 text-3xl font-bold">{count}</div>
            <div className="mt-0.5 text-xs text-gray-500">
              {type.replace("_", " ")}
            </div>
          </div>
        ))}
      </section>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top pages */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Top Pages by Clicks
          </h2>
          {byPage.length === 0 && (
            <p className="text-sm text-gray-400">No data yet.</p>
          )}
          <ul className="space-y-2">
            {byPage.slice(0, 10).map(([page, count]) => (
              <li key={page} className="flex items-center justify-between">
                <span className="truncate text-sm font-mono text-gray-700">
                  {decodeURIComponent(page).replace(/^\//, "") || "(root)"}
                </span>
                <span className="ml-4 shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium">
                  {count}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Event type breakdown */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Event Type Breakdown
          </h2>
          {byType.length === 0 && (
            <p className="text-sm text-gray-400">No data yet.</p>
          )}
          <ul className="space-y-3">
            {byType.map(([type, count]) => {
              const pct = Math.round((count / events.length) * 100);
              return (
                <li key={type}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>
                      {TYPE_EMOJI[type] ?? "📊"} {type.replace("_", " ")}
                    </span>
                    <span className="font-medium">
                      {count} ({pct}%)
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Recent events log */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
          Recent Events (last 50)
        </h2>
        {recent.length === 0 && (
          <p className="text-sm text-gray-400">
            No events tracked yet. Click some buttons!
          </p>
        )}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-xs font-medium uppercase text-gray-400">
                <th className="pb-2 pr-4">Time</th>
                <th className="pb-2 pr-4">Type</th>
                <th className="pb-2 pr-4">Label</th>
                <th className="pb-2 pr-4">Page</th>
                <th className="pb-2">Destination</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((e, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50"
                >
                  <td className="py-2 pr-4 font-mono text-xs text-gray-400 whitespace-nowrap">
                    {e.timestamp
                      ? new Date(e.timestamp).toLocaleString("en-AE", {
                          timeZone: "Asia/Dubai",
                          dateStyle: "short",
                          timeStyle: "short",
                        })
                      : "—"}
                  </td>
                  <td className="py-2 pr-4 whitespace-nowrap">
                    {TYPE_EMOJI[e.type] ?? "📊"} {e.type}
                  </td>
                  <td className="py-2 pr-4 text-gray-600">{e.label ?? "—"}</td>
                  <td className="py-2 pr-4 font-mono text-xs text-gray-500">
                    {e.page ? decodeURIComponent(e.page) : "—"}
                  </td>
                  <td className="py-2 max-w-xs truncate font-mono text-xs text-gray-400">
                    {e.destination ? decodeURIComponent(e.destination) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
