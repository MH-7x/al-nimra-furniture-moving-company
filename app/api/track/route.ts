import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import type { TrackEvent } from "@/lib/tracker";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const EVENTS_KEY = "click_events";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as TrackEvent;

    if (!body?.type) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const event: TrackEvent = {
      type: body.type,
      label: body.label ?? undefined,
      destination: body.destination ?? undefined,
      page: body.page ?? undefined,
      timestamp: new Date().toISOString(),
    };

    await redis.rpush(EVENTS_KEY, JSON.stringify(event));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}

export async function GET() {
  try {
    const raw = await redis.lrange<string>(EVENTS_KEY, 0, -1);

    const events: TrackEvent[] = raw.map((item) => {
      if (typeof item === "string") {
        try {
          return JSON.parse(item) as TrackEvent;
        } catch {
          return item as unknown as TrackEvent;
        }
      }
      return item as unknown as TrackEvent;
    });

    return NextResponse.json({ events });
  } catch {
    return NextResponse.json({ events: [] });
  }
}
