import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

// Load environment variables from .env file
dotenv.config();

const uri = process.env.MONGO_URI;

if (!uri) {
  console.error('MongoDB connection string is not defined in .env file');
  process.exit(1);
}

async function connectToMongoDB() {
  const client = new MongoClient(uri!);

  try {
    await client.connect();
    console.log('Connected to MongoDB successfully');
    // You can add your database operations here
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
  }
}

connectToMongoDB();