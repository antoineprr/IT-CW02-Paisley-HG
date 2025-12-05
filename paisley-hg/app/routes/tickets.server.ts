import { connectDB } from "../db";
import { Ticket } from "../models/Ticket";
import { randomUUID } from "crypto";

export async function action({ request }: { request: Request }) {
  await connectDB();
  const fd = await request.formData();
  const data = Object.fromEntries(fd);

  const code = randomUUID().slice(0, 8).toUpperCase();

  await Ticket.create({
    purchaserName: data.name,
    email: data.email,
    type: data.type,
    quantity: Number(data.quantity || 1),
    code,
  });

  return { ok: true, code };
}
