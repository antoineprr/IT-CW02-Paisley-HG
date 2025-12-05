import { connectDB } from "../db";
import { Event } from "../models/Event";

export interface EventData {
  _id: string;
  name: string;
  category: string;
  date: string | null;
  location: string;
  description: string;
}

export async function loader(): Promise<EventData[]> {
  try {
    console.log("[loadEvents] Connecting to database...");
    await connectDB();
    console.log("[loadEvents] Database connected, querying events...");

    const events = await Event.find({}).exec();
    console.log(`[loadEvents] Loaded ${events.length} events`);

    return events.map((event: any) => {
      const obj = event.toObject({ getters: true, virtuals: true });

      return {
        _id: obj._id.toString(),
        name: obj.name,
        category: obj.category || "Uncategorized",
        date: obj.date ? new Date(obj.date).toISOString() : null,
        location: obj.location || "",
        description: obj.description || "",
      };
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[loadEvents] Error:", msg);
    throw new Error(`Failed to load events: ${msg}`);
  }
}
