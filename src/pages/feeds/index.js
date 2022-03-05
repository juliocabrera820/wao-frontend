import { useContext } from "react";
import { feedsService } from "../../services/feedsService";
import BackHome from "../../components/backHome";
import { Button } from "../../shared/styles";
import { feedsContext } from "../../providers/feeds/feedsContext";
import FeedForm from "../../components/feedForm";
import CategoryForm from '../../components/categoryForm';

const Feeds = () => {
  const { currentFeeds } = useContext(feedsContext);

  const sendFeeds = async () => {
    const { data } = await feedsService().create(currentFeeds);
    console.log(data);
  };

  return (
    <div className="container col-md-9 mt-5">
      <div className="row">
        <div className="col-8">
          <BackHome />
          <FeedForm />
          <CategoryForm/>
        </div>
        <div className="col-4 d-flex justify-content-between">
          <div>
            <h4>Current feeds</h4>
            <ul className="mt-5">
              {currentFeeds?.map(({ url }) => (
                <div>
                  <li>{url}</li>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <Button
              buttonType="secondary"
              className="btn btn-success"
              onClick={sendFeeds}
            >
              Send feeds
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
