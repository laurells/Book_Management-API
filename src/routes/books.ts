import { createBook, getBookById, updateBook, deleteBook } from '../controllers/bookControllers';
import express from 'express';
const router = express.Router();

// POST /books - Create a new book
router.post('/books', createBook);

// GET /books/:id - Get a book by ID
router.get('/books/:id', getBookById);

// PUT /books/:id - Update a book by ID
router.put('/books/:id', updateBook);

// DELETE /books/:id - Delete a book by ID
router.delete('/books/:id', deleteBook);

export default router;