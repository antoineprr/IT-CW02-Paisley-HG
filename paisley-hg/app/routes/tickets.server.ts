import { connectDB } from "../db";
import { Ticket } from "../models/Ticket";
import { v4 as uuidv4 } from "uuid";

export async function action({ request }) {
  await connectDB();
  const fd = await request.formData();
  const data = Object.fromEntries(fd);

  const code = uuidv4().slice(0, 8).toUpperCase();

  await Ticket.create({
    purchaserName: data.name,
    email: data.email,
    type: data.type,
    quantity: Number(data.quantity || 1),
    code,
  });

  return { ok: true, code };
}
