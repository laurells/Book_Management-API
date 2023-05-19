import mongoose, { Schema } from 'mongoose';

// Define the interface for the Book document
interface IBook {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;
  isbn: string;
}

// Define the schema for the Book document
const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  genre: { type: String, required: true },
  isbn: { type: String, required: true }
});

// Create the Book model
const Book = mongoose.model<IBook>('Book', bookSchema);

export { IBook, Book };