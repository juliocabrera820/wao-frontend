import axios from 'axios';
import { BASE_BACKEND_URL } from '../shared/consts/envar';

function feedsService() {
  function create(feeds) {
    return axios({
      method: 'POST',
      baseURL: BASE_BACKEND_URL,
      url: 'feeds.php',
      data: {
        feeds
      },
    });
  }
  
  function all() {
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: 'feeds.php'
    });
  }

  function updateAll(){
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: 'refresh.php'
    });
  }

  function news(id){
    return axios({
      method: 'GET',
      baseURL: BASE_BACKEND_URL,
      url: `newsfeed.php/?id=${id}`
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