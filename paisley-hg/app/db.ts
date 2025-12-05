import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// Function to properly encode MongoDB connection string
const encodeMongoDBPassword = (connectionString: string): string => {
  // Match MongoDB connection string pattern
  const match = connectionString.match(/^(mongodb(?:\+srv)?:\/\/[^:]+:)([^@]+)(@.+)$/);
  
  if (match) {
    const [, prefix, password, suffix] = match;
    // Encode the password part only
    const encodedPassword = encodeURIComponent(password);
    return `${prefix}${encodedPassword}${suffix}`;
  }
  
  return connectionString;
};

// eslint-disable-next-line no-undef
const rawConnectionString: string = process.env.DB_STRING ?? "no connection string";
const connectionString: string = encodeMongoDBPassword(rawConnectionString);

let isConnected = false;

export const connectDB = async (): Promise<void> => {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(connectionString, {
      autoIndex: true,
    });
    isConnected = true;
    console.log("Connected to MongoDB Database");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};

export const getConnection = (): typeof mongoose => mongoose;

export default connectDB;