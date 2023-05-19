import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './bookSchema';
import resolvers  from './bookResolvers';

const server = new ApolloServer({ typeDefs, resolvers });

export const setupGraphQL = async (app: any) => {
    await server.start();
    server.applyMiddleware({ app });
  };