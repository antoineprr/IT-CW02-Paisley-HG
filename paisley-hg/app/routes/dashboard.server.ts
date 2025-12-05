import { connectDB } from "../db";
import { Registration } from "../models/Registration";
import { Event } from "../models/Event";

export interface RegistrationData {
  _id: string;
  eventId: string;
  eventName: string;
  firstName: string;
  lastName: string;
  email: string;
  club: string;
}

export async function loader(): Promise<RegistrationData[]> {
  await connectDB();
  const regs = await Registration.find({}).exec();
  
  const events = await Event.find({}).exec();
  const eventMap = new Map(events.map(e => [e._id.toString(), e.name]));

  return regs.map((r: any) => ({
    _id: r._id.toString(),
    eventId: r.eventId,
    eventName: eventMap.get(r.eventId) || "Unknown Event",
    firstName: r.firstName,
    lastName: r.lastName,
    email: r.email,
    club: r.club || "",
  }));
}
