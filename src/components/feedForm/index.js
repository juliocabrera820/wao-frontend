import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedSchema } from "../../schemas/feedSchema";
import { feedsContext } from "../../providers/feeds/feedsContext";
import { Button, FormField, Select } from "../../shared/styles";
import { categoriesService } from "../../services/categoriesService";

const FeedForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(feedSchema),
  });
  const [categories, setCategories] = useState([]);
  const { setCurrentFeed } = useContext(feedsContext);

  useEffect(() => {
    retrieveCategories();
  }, []);

  const retrieveCategories = async () => {
    const { data } = await categoriesService().all();
    setCategories(data);
  };

  const onSubmit = (data, e) => {
    addUrl(data);
    e.target.reset();
  };

  const addUrl = ({ url, name }) => {
    setCurrentFeed({ url, name });
  };

  return (
    <div className="mt-5">
      <h4>New feed</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <div className="col-md-10 py-2">
          <FormField
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
          <Select
            className="form-select text-white"
            name="name"
            ref={register}
          >
            {categories.map(({ name }) => {
              return (
                <option value={name} key={name}>
                  {name}
                </option>
              );
            })}
          </Select>
        </div>
        <Button buttonType="primary" className="btn btn-success mt-4">
          Add feed
        </Button>
      </form>
    </div>
  );
};

export default FeedForm;
