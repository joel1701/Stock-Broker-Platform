import React from "react";

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">

        <div className="col-lg-5">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>

          <p className="text-muted mb-4">
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>

        <div className="col-lg-1"></div>

        <div className="col-lg-6">
          <div className="row text-center">

            <div className="col border p-4">
              <h1 className="display-4">₹0</h1>
              <p className="text-muted mb-0">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            <div className="col border p-4">
              <h1 className="display-4">₹20</h1>
              <p className="text-muted mb-0">
                Intraday and F&amp;O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;