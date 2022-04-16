import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="card col-sm-12 col-md-6 col-lg-4">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div className="card-footer bg-white border-0">
        <button className="btn btn-primary">Go Somewhere</button>
      </div>
    </div>
  );
};

export default Expert;
