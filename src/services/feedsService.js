import axios from 'axios';
import { BASE_BACKEND_URL } from '../shared/consts/envar';

function feedsService() {
  function create(urls, category) {
    return axios({
      method: 'POST',
      baseURL: BASE_BACKEND_URL,
      url: 'feeds',
      data: {
        urls,
        category
      },
    });
  }
  
  function all() {
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: 'feeds'
    });
  }

  function updateAll(){
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: 'refresh'
    });
  }

  function news(id){
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: `feeds/${id}/news`
    });
  }

  return {
    create,
    all,
    updateAll,
    news
  };
}

export { feedsService };