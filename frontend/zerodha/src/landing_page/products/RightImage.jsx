import React from "react";

function RightImage({ imgURL, pdtname, pdtdesc, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center p-5">

        <div className="col-md-6">
          <h1>{pdtname}</h1>
          <p>{pdtdesc}</p>
          <a href={learnMore}>Learn More</a>
        </div>

        <div className="col-md-6 text-end">
          <img src={imgURL} alt={pdtname} className="img-fluid" />
        </div>

      </div>
    </div>
  );
}

export default RightImage;