import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div id="services">
      <div className="row">
        <div className="mt-5 container">
          <h1 className="service-title text-primary">
            Our Services {services.length}
          </h1>
          <div className="service-container">
            {services.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
