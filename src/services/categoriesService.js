import axios from "axios";
import { BASE_BACKEND_URL } from "../shared/consts/envar";

function categoriesService() {
  function all() {
    return axios({
      method: "GET",
      baseURL: BASE_BACKEND_URL,
      url: "categories.php",
    });
  }

  function create(category) {
    return axios({
      method: "POST",
      baseURL: BASE_BACKEND_URL,
      url: "addCategoria.php",
      data: {
        category,
      },
    });
  }

  return {
    create,
    all,
  };
}

export { categoriesService };
