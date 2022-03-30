import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { searchSchema } from "../../schemas/searchSchema";
import { Field } from "./styles";
import { Button, Icon } from "../../shared/styles";
import Search from "../../assets/search.png";

const SearchBar = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(searchSchema),
  });

  const onSubmit = ({ title }, e) => {
    navigate(`/search?title=${title}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="d-flex justify-content-between container col-md-9 mt-3"
    >
      <div className="col-md-10">
        <Icon src={Search} alt={Search} />
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
