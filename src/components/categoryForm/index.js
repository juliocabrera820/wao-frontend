import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "../../schemas/categorySchema";
import { Button, FormField } from "../../shared/styles";
import { categoriesService } from "../../services/categoriesService";
import notification from "../notification";

const FeedForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(categorySchema),
  });

  const onSubmit = (data, e) => {
    addCategory(data);
    console.log(data);
    e.target.reset();

  };

  const addCategory = async ({ name }) => {
    try {
      await categoriesService().create(name);
      notification("Category was successfully created", "success", 1);
    } catch (error) {
      notification("There was an error", "error", 2);
    }
  };

  return (
    <div className="mt-5">
      <h4>New category</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <div className="col-md-10 py-2">
          <FormField
            type="text"
            placeholder="Type name"
            ref={register}
            name="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            <p>{errors.name && errors.name.message}</p>
          </div>
        </div>
        <Button buttonType="primary" className="btn btn-success mt-4">
          Add category
        </Button>
      </form>
    </div>
  );
};

export default FeedForm;
