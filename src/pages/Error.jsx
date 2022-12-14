import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>oops! it's a dead end.</h1>
        <Link className="btn btn-primary" to="/">
          back home
        </Link>
      </div>
    </section>
  );
}

export default Error;
