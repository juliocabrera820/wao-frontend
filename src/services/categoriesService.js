import axios from 'axios';
import { BASE_BACKEND_URL } from '../shared/consts/envar';

function categoriesService() {
  function create(urls, category) {
    return axios({
      method: 'POST',
      baseURL: BASE_BACKEND_URL,
      url: 'categories',
      data: {
        urls,
        category
      },
    });
  }

  return {
    create
  };
}

export { categoriesService };