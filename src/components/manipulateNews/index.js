import { useState, useEffect } from "react";
import FilteredNews from "../filteredNews";
import { FilterNews, UpdateButton } from "./styles";
import { Fields } from "../../shared/consts/fields";
import { feedsService } from "../../services/feedsService";
import { newsService } from "../../services/newsService";

const ManipulateNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    sortNews("published");
  }, []);

  const handleOption = (e) => sortNews(e.target.value);

  const sortNews = async (field) => {
    const { data } = await newsService().all(field);
    setNews(data);
  };

  const updateFeeds = async () => {
    await feedsService().updateAll();
    const { data } = await newsService().all();
    setNews(data);
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
        <UpdateButton
          buttonType="terciary"
          className="btn btn-success"
          onClick={updateFeeds}
        >
          Update
        </UpdateButton>
      </div>
      <FilteredNews news={news} />
    </>
  );
};

export default ManipulateNews;
