import { IBook } from '../models/book';
import { Book } from '../models/book';
// import { createRandomBook } from '../controllers/bookControllers';
import { Request, Response } from 'express';

const resolvers = {
    Query: {
      books: async (): Promise<IBook[]> => {
        try {
          const books = await Book.find();
          return books;
        } catch (error) {
          console.error('Error retrieving books', error);
          throw error;
        }
      },
      book: async (_: any, { id }: { id: string }): Promise<IBook | null> => {
        try {
          const book = await Book.findById(id);
          return book;
        } catch (error) {
          console.error('Error retrieving book', error);
          throw error;
        }
      },
    },
    Mutation: {
      createBook: async (
        _: any,
        { title, author, publicationYear, genre, isbn }: IBook
      ): Promise<IBook> => {
        try {
          const book = new Book({ title, author, publicationYear, genre, isbn });
          const newBook = await book.save();
          return newBook;
        } catch (error) {
          console.error('Error creating book', error);
          throw error;
        }
      },
      updateBook: async (
        _: any,
        { id, title, author, publicationYear, genre, isbn }: { id: string; title: string; author: string; publicationYear: number; genre: string; isbn: string; }
      ): Promise<IBook | null> => {
        try {
          const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, author, publicationYear, genre, isbn },
            { new: true }
          );
          return updatedBook;
        } catch (error) {
          console.error('Error updating book', error);
          throw error;
        }
      }, 
      deleteBook: async (_: any, { id }: { id: string }): Promise<IBook | null> => {
        try {
          const deletedBook = await Book.findByIdAndDelete(id);
          return deletedBook;
        } catch (error) {
          console.error('Error deleting book', error);
          throw error;
        }
      },
    },
  };
  
  
  export default resolvers;

//   createRandomBook: async (
//     _: any,
//     __: any,
//     { req, res }: { req: Request; res: Response }
//   ): Promise<IBook> => {
//     try {
//       const book = await createRandomBook(req, res);
//       return book;
//     } catch (error) {
//       console.error('Error creating random book', error);
//       throw error;
//     }