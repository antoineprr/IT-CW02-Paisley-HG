import mongoose, { Schema, model, Document } from "mongoose";
const { models } = mongoose;

export interface IEvent extends Document {
  name: string;
  category: string;
  date: string;
  location: string;
  description?: string;
}

const EventSchema = new Schema<IEvent>({
  name: { type: String, required: true },
  category: String,
  date: String,
  location: String,
  description: String
}, { timestamps: true });

export const Event = models.Event ?? model<IEvent>("Event", EventSchema);
