import { connectDB } from "../db";
import { Result } from "../models/Result";
import { Event } from "../models/Event";
import mongoose from "mongoose";

export interface ResultsData {
  _id: string;
  eventId: string;
  eventName: string;
  year: number;
  rankings: { place: number; name: string; score?: string; distance?: string }[];
}

export async function loader(): Promise<ResultsData[]> {
  await connectDB();
  
  try {
    // Use aggregation to join Results with Events to get event names
    const resultsWithEvents = await Result.aggregate([
      {
        $lookup: {
          from: 'events',
          localField: 'eventId',
          foreignField: '_id',
          as: 'event'
        }
      },
      {
        $unwind: {
          path: '$event',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $project: {
          _id: 1,
          eventId: 1,
          year: 1,
          rankings: 1,
          eventName: { $ifNull: ['$event.name', 'Unknown Event'] }
        }
      }
    ]);

    return resultsWithEvents.map((r: any) => ({
      _id: r._id.toString(),
      eventId: r.eventId.toString(),
      eventName: r.eventName,
      year: r.year,
      rankings: r.rankings || [],
    }));
  } catch (error) {
    console.error('Error loading results:', error);
    return [];
  }
}