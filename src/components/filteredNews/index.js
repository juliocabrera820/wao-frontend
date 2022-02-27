import New from "../new";

const FilteredNews = ({ news }) => {
  return (
    <div className="container">
      {news.map(({ title, category, published, url, description }) => {
        return (
          <New
            title={title}
            category={category}
            published={published}
            url={url}
            description={description}
            key={title}
          />
        );
      })}
    </div>
  );
};

export default FilteredNews;
