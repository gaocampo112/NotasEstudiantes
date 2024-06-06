import * as yup from 'yup';

export const schemaLogin = yup.object({
    id: yup.string().required(),
    password: yup.string().required()
});