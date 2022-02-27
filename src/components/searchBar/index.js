import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchSchema } from "../../schemas/searchSchema";
import { newsService } from "../../services/newsService";
import { Field } from "./styles";
import { Button } from "../../shared/styles";

const SearchBar = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(searchSchema),
  });

  const onSubmit = (data, e) => {
    searchNew(data.title);
    e.target.reset();
  };

  const searchNew = async (title) => {
    const { data: result } = await newsService().search(title);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-between">
      <div className="col-md-10">
        <Field
          type="text"
          placeholder="Search news"
          ref={register}
          name="title"
          className={`form-control ${errors.title ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">
          <p>{errors.title && errors.title.message}</p>
        </div>
      </div>
      <Button buttonType="primary" className="btn btn-success">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
