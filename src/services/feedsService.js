import axios from 'axios';
import { BASE_BACKEND_URL } from '../shared/consts/envar';

function feedsService() {
  function create(feeds) {
    return axios({
      method: 'POST',
      baseURL: BASE_BACKEND_URL,
      url: 'feeds',
      data: {
        feeds
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
      url: 'feeds/refresh'
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