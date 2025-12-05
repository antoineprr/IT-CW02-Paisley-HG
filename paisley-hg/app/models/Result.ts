import { Schema, model, models, Document } from "mongoose";

interface Ranking {
  place: number;
  name: string;
  score?: string;
  distance?: string;
}

export interface IResult extends Document {
  eventId: string;
  year: number;
  rankings: Ranking[];
}

const RankingSchema = new Schema<Ranking>({
  place: Number,
  name: String,
  score: String,
  distance: String
}, { _id: false });

const ResultSchema = new Schema<IResult>({
  eventId: { type: String, required: true },
  year: Number,
  rankings: [RankingSchema]
}, { timestamps: true });

export const Result = models.Result ?? model<IResult>("Result", ResultSchema);
