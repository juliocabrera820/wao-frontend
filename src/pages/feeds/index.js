import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedsService } from "../../services/feedsService";
import BackHome from "../../components/backHome";
import { feedSchema } from "../../schemas/feedSchema";
import { Button } from "../../shared/styles";
import { Field } from "./styles";

const Feeds = () => {
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

  const sendFeeds = async () => {
    const { data } = await feedsService().create(currentFeeds)
    console.log(data)
  };

  return (
    <div className="container col-md-9 mt-5">
      <div className="row">
        <div className="col-8">
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
                className={`form-control ${
                  errors.category ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                <p>{errors.category && errors.category.message}</p>
              </div>
            </div>
            <Button buttonType="primary" className="btn btn-success mt-4">
              Add feed
            </Button>
          </form>
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
