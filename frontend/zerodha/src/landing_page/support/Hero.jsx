import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="supportHero">
      <div className="container">

        {/* TOP ROW */}
        <div id="supportWrapper">
          <h4>Support Portal</h4>
          <Link to="/" className="supportLink">
            Track Tickets
          </Link>
        </div>

        {/* MAIN CONTENT */}
        <div className="row supportContent">

          {/* LEFT SIDE */}
          <div className="col-md-6">
            <h1>
              Search for an answer or browse help topics
              <br />
              to create a ticket
            </h1>

            <input
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
            />

            <div className="quickLinks">
              <Link to="/">Track account opening</Link>
              <Link to="/">Track segment activation</Link>
              <Link to="/">Intraday margins</Link>
              <Link to="/">Kite user manual</Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 featured">
            <h2>Featured</h2>

            <ol>
              <li>
                <Link to="/">
                  Current Takeovers and Delisting - September 2026
                </Link>
              </li>

              <li>
                <Link to="/">
                  Latest Intraday leverages - MIS & CO
                </Link>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;