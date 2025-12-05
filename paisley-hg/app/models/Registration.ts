import { Schema, model, models, Document } from "mongoose";

export interface IRegistration extends Document {
  eventId: string;
  firstName: string;
  lastName: string;
  email: string;
  club?: string;
  createdAt?: Date;
}

const RegistrationSchema = new Schema<IRegistration>({
  eventId: { type: String, required: true },
  firstName: String,
  lastName: String,
  email: String,
  club: String
}, { timestamps: true });

export const Registration = models.Registration ?? model<IRegistration>("Registration", RegistrationSchema);
