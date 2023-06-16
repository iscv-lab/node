import { cv } from './cv.js';
import { skill } from './skill.js';
import { social } from './social.js';
import { bigfive } from './bigfive.js';

const employee = {
    ...cv,
    ...skill,
    ...social,
    ...bigfive,
};

export { employee };
