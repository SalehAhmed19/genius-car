import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:4000/service`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please add a service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          className="mb-2"
          {...register("name", { required: true })}
        />
        <input
          placeholder="Description"
          className="mb-2"
          {...register("description", { required: true })}
        />
        <input
          placeholder="Price"
          className="mb-2"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          placeholder="PhotoURL"
          className="mb-2"
          type="text"
          {...register("img", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
