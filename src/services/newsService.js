import axios from 'axios';
import { BASE_BACKEND_URL } from '../shared/consts/envar';

function newsService() {
  function all(field='') {
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: `news?sort=${field}`
    });
  }

  function getOne(id) {
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: `news/${id}`
    });
  }

  function search(title='') {
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: `news/search?title=${title}`
    });
  }

  return {
    all,
    getOne,
    search
  };
}

export { newsService };