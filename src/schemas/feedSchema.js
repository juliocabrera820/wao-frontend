import * as yup from 'yup';

export const feedSchema = yup.object().shape({
  url: yup.string().trim().required('url is a required field'),
  category: yup.string().trim().required('category is a required field')
});