import { connectDB } from "../db";
import { Event } from "../models/Event";
import { Registration } from "../models/Registration";

export interface RegisterEventData {
  _id: string;
  name: string;
}

export async function loader({ params }: { params: { id: string } }): Promise<RegisterEventData | null> {
  await connectDB();
  const event = await Event.findById(params.id).exec();
  if (!event) return null;

  return {
    _id: event._id.toString(),
    name: event.name,
  };
}

export async function action({ request, params }: { request: Request; params: { id: string } }) {
  try {
    await connectDB();
    const fd = await request.formData();
    const data = Object.fromEntries(fd);

    await Registration.create({
      eventId: params.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      club: data.club || "",
    });

    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
