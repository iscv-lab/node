import { ipfs } from '../../app.js';

const postImage = async (request, reply) => {
    const image = request.form?.image;
    if (!image) {
        reply.code(400).send("required image");
        return;
    }
    const { cid } = await ipfs.add(image);
    reply.code(200).send(cid.toString());
};

export { postImage };
