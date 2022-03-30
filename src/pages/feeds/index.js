import { useEffect, useState } from "react";
import { feedsService } from "../../services/feedsService";
import BackHome from "../../components/backHome";
import { FeedLink } from "./styles";

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    retrieveAllFeeds();
  }, []);

  const retrieveAllFeeds = async () => {
    const { data } = await feedsService().all();
    setFeeds(data);
  };

  return (
    <div className="container col-md-8 mt-5">
      <BackHome />
      <div className="mt-5">
        {feeds.map(({ url, id }) => (
          <FeedLink.Page
            className="btn btn-success position-relative text-white"
            buttonType="primary"
            to={`feeds/${id}`}
          >
            {url}
          </FeedLink.Page>
        ))}
      </div>
    </div>
  );
};

export default Feeds;
