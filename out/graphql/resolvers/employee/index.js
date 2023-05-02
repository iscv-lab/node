import { cv } from './cv.js';
import { skill } from './skill.js';
import { social } from './social.js';

const employee = {
    ...cv,
    ...skill,
    ...social,
};

export { employee };
