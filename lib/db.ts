import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL as string;

interface Cached {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

const globalWithMongoose = global as typeof global & {
  mongoose: Cached;
};

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { conn: null, promise: null };
}

const cached = globalWithMongoose.mongoose;

export const connectToDatabase = async (): Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL, {
      dbName: 'DudeproClerkAuth',
      bufferCommands: false,
      connectTimeoutMS: 30000,
    }).then((mongoose: any) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
