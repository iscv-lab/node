import { ApolloServer } from '@apollo/server';
import { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import { readFileSync } from 'fs';
import { resolvers } from '../graphql/resolvers/index.js';

const apolloServer = async (app) => {
    const apollo = new ApolloServer({
        typeDefs: readFileSync('./schema/index.graphql', 'utf-8'),
        resolvers,
        formatError: (error) => {
            console.error(error); // Log the error to the console
            // Return the formatted error to the client
            return error;
        },
        introspection: process.env.NODE_ENV !== 'production',
        plugins: [
            fastifyApolloDrainPlugin(app),
            // ApolloServerPluginUsageReporting({
            //   generateClientInfo: ({ request }) => {
            //     const headers = request.http && request.http.headers;
            //     if (headers) {
            //       return {
            //         clientName: headers["apollographql-client-name"],
            //         clientVersion: headers["apollographql-client-version"],
            //       };
            //     } else {
            //       return {
            //         clientName: "Unknown Client",
            //         clientVersion: "Unversioned",
            //       };
            //     }
            //   },
            // }),
        ],
        // formatError: (formattedError, error) => {
        //   // Return a different error message
        //   if (
        //     formattedError.extensions!.code ===
        //     ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
        //   ) {
        //     return {
        //       ...formattedError,
        //       message:
        //         "Your query doesn't match the schema. Try double-checking it!",
        //     };
        //   }
        //   // Otherwise return the formatted error. This error can also
        //   // be manipulated in other ways, as long as it's returned.
        //   return formattedError;
        // },
    });
    console.log('connect to apollo');
    return apollo;
};

export { apolloServer };
