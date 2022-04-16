import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="mt-3 container">
      <h1 className="service-title text-primary">
        Our Services {services.length}
      </h1>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
