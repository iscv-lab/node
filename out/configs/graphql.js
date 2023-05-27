import { ApolloServer } from '@apollo/server';
import { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import { resolvers } from '../graphql/resolvers/index.js';
import { readFileSync } from 'fs';

const apolloServer = async (app) => {
    const apollo = new ApolloServer({
        typeDefs: readFileSync("./schema/index.graphql", "utf-8"),
        resolvers,
        plugins: [fastifyApolloDrainPlugin(app)],
    });
    console.log("connect to apollo");
    return apollo;
};

export { apolloServer };
