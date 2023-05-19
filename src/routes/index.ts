import express, { Router } from 'express';
import booksRoutes from './books';
// import bookGeneratorRoutes from './book-generator';

const router: Router = express.Router();
// Use the './contact-generator' module to handle requests to the '/contact-generator' endpoint
// router.use('/book-generator', bookGeneratorRoutes);

// Export the router object to be used by other modules
export default router;