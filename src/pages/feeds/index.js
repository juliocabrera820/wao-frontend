import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedsService } from "../../services/feedsService";
import BackHome from "../../components/backHome";
import { feedSchema } from "../../schemas/feedSchema";
import { Button } from "../../shared/styles";
import { Field } from "./styles";

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);
  const [currentFeeds, setCurrentFeeds] = useState([]);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(feedSchema),
  });

  const onSubmit = (data, e) => {
    addUrl(data);
    e.target.reset();
  };

  const addUrl = ({ url, category }) => {
    setCurrentFeeds([...currentFeeds, { url, category }]);
  };

  useEffect(() => {
    retrieveFeeds();
  }, []);

  const retrieveFeeds = async () => {
    const { data } = await feedsService().all();
    setFeeds(data);
  };

  return (
    <div className="container col-md-6 mt-5">
      <BackHome />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <div className="col-md-10 py-2">
          <Field
            type="text"
            placeholder="Type url"
            ref={register}
            name="url"
            className={`form-control ${errors.url ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            <p>{errors.url && errors.url.message}</p>
          </div>
        </div>
        <div className="col-md-10 py-2">
          <Field
            type="text"
            placeholder="Type category"
            ref={register}
            name="category"
            className={`form-control ${errors.category ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            <p>{errors.category && errors.category.message}</p>
          </div>
        </div>
        <Button buttonType="primary" className="btn btn-success">
          Add feed
        </Button>
      </form>
      <h3>Feeds saved</h3>
      <ul className="mt-5">
        {feeds?.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
      <h3>Current feeds</h3>
      <ul className="mt-5">
        {currentFeeds?.map(({ url, category }) => (
          <div>
            <li>{url}</li>
            <li>{category}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Feeds;
