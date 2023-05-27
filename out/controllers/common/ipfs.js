import { ipfs } from '../../app.js';

const postObject = async (request, reply) => {
    const data = request.body.data;
    const { cid } = await ipfs.add(JSON.stringify(data));
    reply.code(200).send(cid.toString());
};
const postJSON = async (request, reply) => {
    const data = request.body.data;
    const { cid } = await ipfs.add(data);
    reply.code(200).send(cid.toString());
};

export { postJSON, postObject };
