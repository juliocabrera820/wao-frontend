import * as yup from 'yup';

export const searchSchema = yup.object().shape({
  title: yup.string().trim().required('title is a required field'),
});