import New from "../new";
import Default from '../../assets/thumbnail.png';

const FilteredNews = ({ news }) => {
  return (
    <div className="mt-5">
      {news.map(({ title, category, published, url, description, image=Default }) => {
        return (
          <New
            title={title}
            category={category}
            published={published}
            url={url}
            description={description}
            key={title}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default FilteredNews;
