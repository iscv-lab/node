import { readFileSync } from 'fs';
import { BigFiveTemplate } from '../../models/employee/BigFiveTemplate.js';

const crawlBigFiveTemplate = async (request, reply) => {
    const init = JSON.parse(readFileSync('./json/big_five.json', 'utf8'));
    const pipeline = init.map(async (template, index) => {
        const newTemplate = new BigFiveTemplate({
            bigFiveId: index + 1,
            type: template.Type,
            startScore: template.StartScore,
            endScore: template.EndScore,
            comment: template.Comment,
        });
        return await newTemplate.save();
    });
    const result = await Promise.all(pipeline);
    await reply.code(201).send(result);
};

export { crawlBigFiveTemplate };
