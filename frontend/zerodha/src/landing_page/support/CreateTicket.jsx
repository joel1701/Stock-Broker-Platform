import React from "react";

function CreateTicket() {
  const linkStyle = {
    textDecoration: "none",
    lineHeight: "2.3",
    display: "block",
  };

  return (
    <div className="container py-5">
      <h1 className="fs-4 mb-5">
        To create a ticket, select a relevant topic
      </h1>

      {/* ROW 1 */}
      <div className="row mb-5">

        <div className="col-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-plus-circle me-2"></i>
            Account Opening
          </h4>

          <a href="#" style={linkStyle}>Resident individual</a>
          <a href="#" style={linkStyle}>Minor</a>
          <a href="#" style={linkStyle}>Non Resident Indian (NRI)</a>
          <a href="#" style={linkStyle}>Company, Partnership, HUF and LLP</a>
          <a href="#" style={linkStyle}>Glossary</a>
        </div>

        <div className="col-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-user me-2"></i>
            Your Zerodha Account
          </h4>

          <a href="#" style={linkStyle}>Your profile</a>
          <a href="#" style={linkStyle}>Account modification</a>
          <a href="#" style={linkStyle}>
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <a href="#" style={linkStyle}>Nomination</a>
          <a href="#" style={linkStyle}>Transfer and conversion of securities</a>
        </div>

        <div className="col-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-bar-chart me-2"></i>
            Kite
          </h4>

          <a href="#" style={linkStyle}>IPO</a>
          <a href="#" style={linkStyle}>Trading FAQs</a>
          <a href="#" style={linkStyle}>Margin Trading Facility (MTF) and Margins</a>
          <a href="#" style={linkStyle}>Charts and orders</a>
          <a href="#" style={linkStyle}>Alerts and Nudges</a>
          <a href="#" style={linkStyle}>General</a>
        </div>

      </div>

      {/* ROW 2 */}
      <div className="row">

        <div className="col-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-plus-circle me-2"></i>
            Funds
          </h4>

          <a href="#" style={linkStyle}>Add money</a>
          <a href="#" style={linkStyle}>Withdraw money</a>
          <a href="#" style={linkStyle}>Add bank accounts</a>
          <a href="#" style={linkStyle}>eMandates</a>
        </div>

        <div className="col-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-plus-circle me-2"></i>
            Console
          </h4>

          <a href="#" style={linkStyle}>Portfolio</a>
          <a href="#" style={linkStyle}>Corporate actions</a>
          <a href="#" style={linkStyle}>Funds statement</a>
          <a href="#" style={linkStyle}>Reports</a>
          <a href="#" style={linkStyle}>Profile</a>
          <a href="#" style={linkStyle}>Segments</a>
        </div>

        <div className="col-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-plus-circle me-2"></i>
            Coin
          </h4>

          <a href="#" style={linkStyle}>Mutual funds</a>
          <a href="#" style={linkStyle}>National Pension Scheme (NPS)</a>
          <a href="#" style={linkStyle}>Fixed Deposit (FD)</a>
          <a href="#" style={linkStyle}>Features on Coin</a>
          <a href="#" style={linkStyle}>Payments and Orders</a>
          <a href="#" style={linkStyle}>General</a>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;