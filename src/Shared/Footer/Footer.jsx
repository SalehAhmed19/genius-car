import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p className="text-center">
        <small>All right reserved {year}</small>
      </p>
    </footer>
  );
};

export default Footer;
