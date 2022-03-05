import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedSchema } from "../../schemas/feedSchema";
import { feedsContext } from "../../providers/feeds/feedsContext";
import { Field } from "./styles";
import { Button } from "../../shared/styles";

const FeedForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(feedSchema),
  });
  const { setCurrentFeed } = useContext(feedsContext);

  const onSubmit = (data, e) => {
    addUrl(data);
    e.target.reset();
  };

  const addUrl = ({ url, category }) => {
    setCurrentFeed({ url, category });
  };
  return (
    <div className="mt-5">
      <h4>New feed</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
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
        <Button buttonType="primary" className="btn btn-success mt-4">
          Add feed
        </Button>
      </form>
    </div>
  );
};

export default FeedForm;
