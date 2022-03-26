import axios from 'axios';
import { BASE_BACKEND_URL } from '../shared/consts/envar';

function newsService() {
  function all(field='') {
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: `indexsort.php/?sort=${field}`
    });
  }

  function getOne(id) {
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: `index.php/?id=${id}`
    });
  }

  function search(title='') {
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: `indextitulo.php/?title=${title}`
    });
  }

  return {
    all,
    getOne,
    search
  };
}

export { newsService };