import { useEffect, useState } from "react";
import { useQueryParam } from "../../shared/hooks/useQueryParam";
import { newsService } from "../../services/newsService";
import FilteredNews from "../../components/filteredNews";
import BackHome from '../../components/backHome';
import NoResults from "../../components/noResults";

const SearchResults = () => {
  const [news, setNews] = useState([]);
  const title = useQueryParam("title");
  const getResults = async (title) => {
    const { data } = await newsService().search(title);
    setNews(data);
  };

  useEffect(() => {
    getResults(title);
  }, []);

  return (
    <div className="container mt-5 col-md-6">
      <BackHome/>
      { news.length > 0 ? <FilteredNews news={news} /> : <NoResults word={title}/>}
    </div>
  );
};

export default SearchResults;
