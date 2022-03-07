import { useContext } from "react";
import { feedsService } from "../../services/feedsService";
import { feedsContext } from "../../providers/feeds/feedsContext";
import { Button } from "../../shared/styles";

const CurrentFeeds = () => {
  const { currentFeeds, clearCurrentFeeds } = useContext(feedsContext);

  const sendFeeds = async () => {
    await feedsService().create(currentFeeds);
    clearCurrentFeeds();
  };

  return (
    <>
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
    </>
  );
};

export default CurrentFeeds;
