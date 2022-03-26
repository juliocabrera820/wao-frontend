import { useEffect, useState } from "react";
import { useQueryParam } from "../../shared/hooks/useQueryParam";
import { newsService } from "../../services/newsService";
import FilteredNews from "../../components/filteredNews";
import BackHome from '../../components/backHome';

const SearchResults = () => {
  const [news, setNews] = useState([]);
  const title = useQueryParam("title");
  const getResults = async (title) => {
    const { data } = await newsService().search(title);
    setNews(data.items);
  };

  useEffect(() => {
    getResults(title);
  }, []);

  return (
    <div className="container mt-5 col-md-6">
      <BackHome/>
      <FilteredNews news={news} />
    </div>
  );
};

export default SearchResults;
