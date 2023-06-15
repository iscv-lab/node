import { FastifyInstance } from 'fastify';
import { reciveAudio, reciveStarted, reciveVideo } from '~controllers/python/bigfive';

export default async (server: FastifyInstance) => {
  server.get(
    '/started',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            session_id: { type: 'string' },
          },
          required: ['session_id'],
        },
      },
    },
    reciveStarted,
  );
  server.get(
    '/video',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            session_id: { type: 'string' },
          },
          required: ['session_id'],
        },
      },
    },
    reciveVideo,
  );
  server.get(
    '/audio',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            session_id: { type: 'string' },
          },
          required: ['session_id'],
        },
      },
    },
    reciveAudio,
  );
};
