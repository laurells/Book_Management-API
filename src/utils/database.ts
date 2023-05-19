import { MongoClient, MongoClientOptions } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoOptions: MongoClientOptions = {};

const url = process.env.MONGODB_URL || '';
let _db;

const connectDB = async () => {
  try {
    const client = await MongoClient.connect(url, mongoOptions);
    console.log('Connected to MongoDB');
    _db = client.db();
    return _db;
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
};

export default connectDB;
