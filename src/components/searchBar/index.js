import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { searchSchema } from "../../schemas/searchSchema";
import { Field, Feeds } from "./styles";
import { Button, Icon, LINK } from "../../shared/styles";
import Search from "../../assets/search.png";
import Hero from "../../assets/hero.svg";

const SearchBar = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(searchSchema),
  });

  const onSubmit = ({ title }, e) => {
    navigate(`/search?title=${title}`);
  };

  return (
    <div>
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
      <div className="container d-flex justify-content-around align-items-center col-md-7">
        <img src={Hero} alt="hero" width="1200" height="500" />
        <Feeds.Page
          className="btn btn-success"
          buttonType="secondary"
          to="/feeds"
        >
          Go to featured feeds
        </Feeds.Page>
      </div>
    </div>
  );
};

export default SearchBar;
