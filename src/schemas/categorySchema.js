import * as yup from 'yup';

export const categorySchema = yup.object().shape({
  name: yup.string().trim().required('name is a required field'),
});