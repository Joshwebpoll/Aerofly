import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <div className="section-center error">
        <h1>404</h1>

        <NavLink to="/" className="btn">
          {" "}
          Back home
        </NavLink>
      </div>
    </section>
  );
};

export default Error;
