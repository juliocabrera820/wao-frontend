import { useEffect } from "react";
import SearchBar from "../components/searchBar";
import ManipulateNews from "../components/manipulateNews";
import { newsService } from "../services/newsService";

const Home = () => {
  useEffect(() => {
    retrieveNews();
  }, []);

  const retrieveNews = async () => {
    const { data } = await newsService().all();
    console.log(data);
  };

  return (
    <div>
      <SearchBar />
      <ManipulateNews />
    </div>
  );
};

export default Home;
