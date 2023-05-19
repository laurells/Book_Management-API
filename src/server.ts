import express from 'express';
import connectDB from './utils/database';
import { setupSwagger } from './docs/swagger';
import { setupGraphQL } from './graphql/graphqlServer';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONs');
  next();
});

app.use('/', router);
// Connect to MongoDB
connectDB()
  .then((db) => {
    // Set up API routes
    // app.use('/books', booksController);

    // Set up Swagger documentation
    setupSwagger(app);

    // Set up GraphQL API
    setupGraphQL(app);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });