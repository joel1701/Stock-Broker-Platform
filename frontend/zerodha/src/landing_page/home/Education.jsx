import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        <div className="col-lg-6">
          <img src="/media/education.svg" alt="Education" style={{ width: "70%" }} />
        </div>

        <div className="col-lg-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>

          <p className="text-muted mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            Varsity 
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>

          <p className="text-muted mt-5">
            Trading Q&amp;A, the most active trading and investment community in India for all
            your market related queries.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            Trading Q&amp;A
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;