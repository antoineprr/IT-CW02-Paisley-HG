import { Schema, model, models, Document } from "mongoose";

export interface ITicket extends Document {
  purchaserName: string;
  email: string;
  type: string;
  quantity: number;
  code: string;
  createdAt?: Date;
}

const TicketSchema = new Schema<ITicket>({
  purchaserName: String,
  email: String,
  type: String,
  quantity: Number,
  code: String
}, { timestamps: true });

export const Ticket = models.Ticket ?? model<ITicket>("Ticket", TicketSchema);
