import { connectDB } from "../db";
import { Result } from "../models/Result";

export interface ResultsData {
  _id: string;
  eventId: string;
  year: number;
  rankings: { place: number; name: string; score?: string; distance?: string }[];
}

export async function loader(): Promise<ResultsData[]> {
  await connectDB();
  const results = await Result.find({}).exec();

  return results.map((r: any) => ({
    _id: r._id.toString(),
    eventId: r.eventId,
    year: r.year,
    rankings: r.rankings || [],
  }));
}
