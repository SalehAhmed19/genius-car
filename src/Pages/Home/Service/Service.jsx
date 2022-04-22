import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const navigate = useNavigate();
  const handleNavigateToDetail = (_id) => {
    navigate(`/service/${_id}`);
  };
  return (
    <div className="service">
      <img className="img" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => handleNavigateToDetail(_id)}
        className="btn btn-primary"
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
