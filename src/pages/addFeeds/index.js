import BackHome from "../../components/backHome";
import FeedForm from "../../components/feedForm";
import CategoryForm from "../../components/categoryForm";
import CurrentFeeds from "../../components/currentFeeds";

const AddFeeds = () => {
  return (
    <div className="container col-md-9 mt-5">
      <div className="row">
        <div className="col-8">
          <BackHome />
          <FeedForm />
          <CategoryForm />
        </div>
        <div className="col-4 d-flex justify-content-between">
          <CurrentFeeds />
        </div>
      </div>
    </div>
  );
};

export default AddFeeds;
