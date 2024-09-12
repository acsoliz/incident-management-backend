import {body} from 'express-validator'

export const createValidations = [
    body('title')
    .notEmpty()
    .isString()
    .withMessage('title is required and must be a string.'),
    ,
    body('priority')
    .notEmpty()
    .isString()
    .withMessage('Priority is required and must be a string.'),
]