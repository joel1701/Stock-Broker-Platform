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

          <a href="#" style={linkStyle}>Online Account Opening</a>
          <a href="#" style={linkStyle}>Offline Account Opening</a>
          <a href="#" style={linkStyle}>
            Company, Partnership and HUF Account Opening
          </a>
          <a href="#" style={linkStyle}>NRI Account Opening</a>
          <a href="#" style={linkStyle}>Charges at Zerodha</a>
          <a href="#" style={linkStyle}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>
          <a href="#" style={linkStyle}>Getting Started</a>
        </div>

        <div className="col-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-user me-2"></i>
            Your Zerodha Account
          </h4>

          <a href="#" style={linkStyle}>Login Credentials</a>
          <a href="#" style={linkStyle}>
            Account Modification and Segment Addition
          </a>
          <a href="#" style={linkStyle}>DP ID and bank details</a>
          <a href="#" style={linkStyle}>Your Profile</a>
          <a href="#" style={linkStyle}>
            Transfer and conversion of shares
          </a>
        </div>

        <div className="col-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-bar-chart me-2"></i>
            Kite
          </h4>

          <a href="#" style={linkStyle}>
            Margin/leverage, Product and Order types
          </a>
          <a href="#" style={linkStyle}>Kite Web and Mobile</a>
          <a href="#" style={linkStyle}>Trading FAQs</a>
          <a href="#" style={linkStyle}>Corporate Actions</a>
          <a href="#" style={linkStyle}>Sentinel</a>
          <a href="#" style={linkStyle}>Kite API</a>
          <a href="#" style={linkStyle}>Pi and other platform</a>
          <a href="#" style={linkStyle}>Stockreports+</a>
          <a href="#" style={linkStyle}>GTT</a>
        </div>

      </div>

      {/* ROW 2 */}
      <div className="row mt-5">

        <div className="col-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-credit-card me-2"></i>
            Funds
          </h4>

          <a href="#" style={linkStyle}>Adding Funds</a>
          <a href="#" style={linkStyle}>Fund Withdrawal</a>
          <a href="#" style={linkStyle}>eMandates</a>
          <a href="#" style={linkStyle}>Adding Bank Accounts</a>
        </div>

        <div className="col-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-pie-chart me-2"></i>
            Console
          </h4>

          <a href="#" style={linkStyle}>Reports</a>
          <a href="#" style={linkStyle}>Ledger</a>
          <a href="#" style={linkStyle}>Portfolio</a>
          <a href="#" style={linkStyle}>60 Day Challenge</a>
          <a href="#" style={linkStyle}>IPO</a>
          <a href="#" style={linkStyle}>Referral Program</a>
        </div>

        <div className="col-md-4">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-circle me-2"></i>
            Coin
          </h4>

          <a href="#" style={linkStyle}>Understanding Mutual Funds</a>
          <a href="#" style={linkStyle}>About Coin</a>
          <a href="#" style={linkStyle}>
            Buying and Selling through Coin
          </a>
          <a href="#" style={linkStyle}>Starting an SIP</a>
          <a href="#" style={linkStyle}>Managing your Portfolio</a>
          <a href="#" style={linkStyle}>Coin App</a>
          <a href="#" style={linkStyle}>Moving to Coin</a>
          <a href="#" style={linkStyle}>Government Securities</a>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;