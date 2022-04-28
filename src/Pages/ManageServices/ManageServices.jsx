import React from "react";
import useService from "../../Hooks/useService";

const ManageServices = () => {
  const [services, setService] = useService();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:4000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setService(remaining);
        });
    }
  };
  return (
    <div>
      <h2>Manage Services</h2>
      {services.map((service) => (
        <div className="w-50 mx-auto text-center" key={service._id}>
          <h5>
            {service.name}{" "}
            <button
              onClick={() => {
                handleDelete(service._id);
              }}
              className="btn btn-danger"
            >
              X
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
