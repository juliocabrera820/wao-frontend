import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchSchema } from "../schemas/searchSchema";
import { newsService } from "../services/newsService";

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
    console.log(result);
  };

  return (
    <div className="row mb-3">
      <div className="col-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Search"
              ref={register}
              name="title"
              className={`form-control ${
                errors.title ? "is-invalid" : "is-valid"
              }`}
            />
            <div className="invalid-feedback">
              <p>{errors.title && errors.title.message}</p>
            </div>
            <button className="btn btn-success">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
