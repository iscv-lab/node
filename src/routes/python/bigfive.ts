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
            session_id: { type: 'number' },
          },
          required: ['session_id'],
        },
      },
    },
    reciveStarted,
  );
  server.post(
    '/video',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            session_id: { type: 'number' },
          },
          required: ['session_id'],
        },
      },
    },
    reciveVideo,
  );
  server.post(
    '/audio',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            session_id: { type: 'number' },
          },
          required: ['session_id'],
        },
      },
    },
    reciveAudio,
  );
};
