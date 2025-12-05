import { connectDB } from "../db";
import { Registration } from "../models/Registration";

export interface RegistrationData {
  _id: string;
  eventId: string;
  firstName: string;
  lastName: string;
  email: string;
  club: string;
}

export async function loader(): Promise<RegistrationData[]> {
  await connectDB();
  const regs = await Registration.find({}).exec();

  return regs.map((r: any) => ({
    _id: r._id.toString(),
    eventId: r.eventId,
    firstName: r.firstName,
    lastName: r.lastName,
    email: r.email,
    club: r.club || "",
  }));
}
