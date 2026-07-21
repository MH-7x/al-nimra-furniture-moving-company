export type TrackEventType = "whatsapp_click" | "call_click";

export interface TrackEvent {
  type: TrackEventType;
  label?: string;
  destination?: string;
  page?: string;
  timestamp?: string;
}

export function track(event: TrackEvent): void {
  queueMicrotask(() => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      keepalive: true,
      body: JSON.stringify({
        ...event,
        page: typeof window !== "undefined" ? window.location.pathname : "",
      }),
    }).catch(() => {
      console.error("Failed to send tracking event", event);
    });
  });
}
