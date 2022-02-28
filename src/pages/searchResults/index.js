import { useEffect, useState } from "react";
import { useQueryParam } from "../../shared/hooks/useQueryParam";
import { newsService } from "../../services/newsService";
import FilteredNews from "../../components/filteredNews";
import { Icon } from "../../shared/styles";
import Arrow from "../../assets/back.png";
import { LINK } from "./styles";

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
      <div>
        <Icon src={Arrow} alt={Arrow} />
        <LINK.BackHome
          className="btn btn-success"
          buttonType="terciary"
          to="/home"
        >
          Back home
        </LINK.BackHome>
      </div>
      <FilteredNews news={news} />
    </div>
  );
};

export default SearchResults;
