import { ObjectId } from 'mongodb';
// import faker from 'faker';
import connectDB from '../utils/database';
import { Request, Response } from 'express';
import { Book } from '../models/book';

// Create a new book
export const createBook = (req: Request, res: Response): void => {
  // Extract book data from the request body
  const { title, author, publicationYear, genre, isbn } = req.body;

  // Create a new instance of the Book model
  const book = new Book({
    title,
    author,
    publicationYear,
    genre,
    isbn,
  });

  // Save the book to the database
  book.save()
    .then((savedBook) => {
      res.status(201).json(savedBook);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while creating the book' });
    });
};

// Get a book by ID
export const getBookById = (req: Request, res: Response): void => {
  const bookId = req.params.id;

  // Find the book by ID in the database
  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        res.status(404).json({ error: 'Book not found' });
      } else {
        res.status(200).json(book);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while retrieving the book' });
    });
};

// Update a book by ID
export const updateBook = (req: Request, res: Response): void => {
  const bookId = req.params.id;

  // Extract updated book data from the request body
  const { title, author, publicationYear, genre, isbn } = req.body;

  // Find the book by ID in the database and update its data
  Book.findByIdAndUpdate(bookId, { title, author, publicationYear, genre, isbn }, { new: true })
    .then((updatedBook) => {
      if (!updatedBook) {
        res.status(404).json({ error: 'Book not found' });
      } else {
        res.status(200).json(updatedBook);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while updating the book' });
    });
};

// Delete a book by ID
export const deleteBook = (req: Request, res: Response): void => {
  const bookId = req.params.id;

  // Find the book by ID in the database and delete it
  Book.findByIdAndDelete(bookId)
    .then((deletedBook) => {
      if (!deletedBook) {
        res.status(404).json({ error: 'Book not found' });
      } else {
        res.status(200).json({ message: 'Book deleted successfully' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while deleting the book' });
    });
};
  
  
  
  
  
  
  
// export const createRandomBook = async (req: Request, res: Response): Promise<IBook> => {
//   try {
//     // Generate random book data using faker library
//     const book: IBook = {
//       title: faker.random.words(3),
//       author: faker.name.findName(),
//       publicationYear: faker.random.number({ min: 1800, max: 2022 }),
//       genre: faker.random.arrayElement([
//         'Fiction',
//         'Non-Fiction',
//         'Science Fiction',
//         'Mystery',
//         'Fantasy',
//       ]),
//       isbn: faker.random.uuid(),
//       // Add more properties as needed
//     };

//     // Insert the generated book into the database
//     const db = await connectDB();
//     const response = await db.collection('books').insertOne(book);

//     if (response.acknowledged) {
//       // Book created successfully, send a response with the inserted document
//       return book;
//     } else {
//       // Error occurred while creating the book, send an error response
//       throw new Error(response?.result?.errmsg || 'Encountered an error while creating a book');
//     }
//   } catch (err) {
//     // Error occurred, throw the error
//     throw err;
//   }
// };

