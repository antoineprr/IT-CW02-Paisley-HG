import { connectDB } from "../db";
import { Event } from "../models/Event";

export interface EventDetailData {
  _id: string;
  name: string;
  category: string;
  date: string | null;
  location: string;
  description: string;
}

export async function loader({ params }: { params: { id: string } }): Promise<EventDetailData | null> {
  try {
    console.log(`[loadEvent:${params.id}] Connecting DB...`);
    await connectDB();

    const event = await Event.findById(params.id).exec();
    if (!event) return null;

    const obj = event.toObject({ getters: true, virtuals: true });

    return {
      _id: obj._id.toString(),
      name: obj.name,
      category: obj.category || "",
      date: obj.date ? new Date(obj.date).toISOString() : null,
      location: obj.location || "",
      description: obj.description || "",
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[loadEvent:${params.id}] Error:`, msg);
    throw new Error(`Failed to load event: ${msg}`);
  }
}
