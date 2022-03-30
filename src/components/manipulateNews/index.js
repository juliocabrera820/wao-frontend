import { useState, useEffect } from "react";
import FilteredNews from "../filteredNews";
import { FilterNews, UpdateButton } from "./styles";
import { Icon, LINK } from "../../shared/styles";
import { Fields } from "../../shared/consts/fields";
import { feedsService } from "../../services/feedsService";
import { newsService } from "../../services/newsService";
import Update from "../../assets/update.png";
import notification from "../notification";

const ManipulateNews = () => {
  const [news, setNews] = useState([]);
  const [feedsCounter, setFeedsCounter] = useState(0);

  useEffect(() => {
    sortNews("published");
    feedsNumber();
  }, []);

  const handleOption = (e) => sortNews(e.target.value);

  const feedsNumber = async () => {
    const { data } = await feedsService().all();
    setFeedsCounter(data.length);
  };

  const sortNews = async (field) => {
    const { data } = await newsService().all(field);
    setNews(data);
  };

  const updateFeeds = async () => {
    await feedsService().updateAll();
    try {
      const { data } = await newsService().all();
      notification("Feeds were successfully updated", "success", 1);
      setNews(data);
    } catch (error) {
      notification("There was an error", "error", 2);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <FilterNews className="form-select text-white" onChange={handleOption}>
          {Fields.map(({ option, field }) => {
            return (
              <option value={field} key={field}>
                {option}
              </option>
            );
          })}
        </FilterNews>
        <LINK.Page
          className="btn btn-success position-relative text-white"
          buttonType="primary"
          to="/addFeeds"
        >
          Add feeds
        </LINK.Page>
        <LINK.Page
          className="btn btn-success position-relative"
          buttonType="tertiary"
          to="/feeds"
        >
          <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger">
            {feedsCounter}
          </span>
          Feeds
        </LINK.Page>
        <div>
          <Icon src={Update} alt={Update} />
          <UpdateButton
            buttonType="tertiary"
            className="btn btn-success"
            onClick={updateFeeds}
          >
            Update
          </UpdateButton>
        </div>
      </div>
      <FilteredNews news={news} />
    </>
  );
};

export default ManipulateNews;
