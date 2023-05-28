import { ApolloServer } from '@apollo/server';
import { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import { readFileSync } from 'fs';
import { resolvers } from '../graphql/resolvers/index.js';
import { ApolloServerErrorCode } from '@apollo/server/errors';

const apolloServer = async (app) => {
    const apollo = new ApolloServer({
        typeDefs: readFileSync("./schema/index.graphql", "utf-8"),
        resolvers,
        plugins: [fastifyApolloDrainPlugin(app)],
        formatError: (formattedError, error) => {
            // Return a different error message
            if (formattedError.extensions.code ===
                ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED) {
                return {
                    ...formattedError,
                    message: "Your query doesn't match the schema. Try double-checking it!",
                };
            }
            // Otherwise return the formatted error. This error can also
            // be manipulated in other ways, as long as it's returned.
            return formattedError;
        },
    });
    console.log("connect to apollo");
    return apollo;
};

export { apolloServer };
