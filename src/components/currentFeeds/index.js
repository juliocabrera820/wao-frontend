import { useContext } from "react";
import { feedsService } from "../../services/feedsService";
import { feedsContext } from "../../providers/feeds/feedsContext";
import { Button } from "../../shared/styles";
import notification from "../notification";

const CurrentFeeds = () => {
  const { currentFeeds, clearCurrentFeeds } = useContext(feedsContext);

  const sendFeeds = async () => {
    if (currentFeeds.length > 0) {
      try {
        await feedsService().create(currentFeeds);
        clearCurrentFeeds();
        notification("Feeds was successfully created", "success", 1);
      } catch (error) {
        notification("There was an error", "error", 2);
      }
    }
    notification("Feeds have not been added", "error", 3);
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
