import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FilteredNews from "../../components/filteredNews";
import { feedsService } from "../../services/feedsService";

const FeedNews = () => {
  const [news, setNews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    retrieveNews();
  }, []);

  const retrieveNews = async () => {
    const { data } = await feedsService().news(id);
    setNews(data);
  };

  return (
    <div className="container">
      {news.map(({ title, category, published, url, description }) => (
        <FilteredNews
          title={title}
          category={category}
          published={published}
          url={url}
          description={description}
        />
      ))}
    </div>
  );
};

export default FeedNews;
