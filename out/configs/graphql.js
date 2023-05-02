import { ApolloServer } from '@apollo/server';
import { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import { resolvers } from '../graphql/resolvers/index.js';
import { typeDefs } from '../graphql/schema/index.js';

const apolloServer = async (app) => {
    const apollo = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [fastifyApolloDrainPlugin(app)],
    });
    console.log("connect to apollo");
    return apollo;
};

export { apolloServer };
