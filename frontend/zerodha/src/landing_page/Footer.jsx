import React from 'react'

function Footer() {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    }

    return ( 
        <footer style={{backgroundColor : "rgb(250, 250, 250)"}}>
        <div className="container border-top mt-5 text-muted" >
            <div className='row mt-5'>
                <div className="col">
                    <img src="/media/logo.svg" style={{width: "50%"}} alt="Zerodha logo" />
                    <p>
                        &copy; 2010-2026, Not Zerodha Broking Ltd. All rights reserved.
                    </p>
                </div>
                <div className="col" style={{textDecoration: "none"}}>
                    <p>Company</p>
                        <a href="" style={linkStyle}>About</a><br />
                        <a href="" style={linkStyle}>Products</a><br />
                        <a href="" style={linkStyle}>Pricing</a><br />
                        <a href="" style={linkStyle}>Referral programme</a><br />
                        <a href="" style={linkStyle}>Careers</a><br />
                        <a href="" style={linkStyle}>Zerodha.tech</a><br />
                        <a href="" style={linkStyle}>Press & media</a><br />
                        <a href="" style={linkStyle}>Zerodha cares(CSR)</a><br />
                </div>
                <div className="col">
                    <p>Support</p>
                        <a href="" style={linkStyle}>Contact</a><br />
                        <a href="" style={linkStyle}>Support portal</a><br />
                        <a href="" style={linkStyle}>Z-Connect blog</a><br />
                        <a href="" style={linkStyle}>List of charges</a><br />
                        <a href="" style={linkStyle}>Downloads and resources</a><br />
                </div>
                <div className="col">
                    <p>Account</p>
                        <a href="" style={linkStyle}>Open an account</a><br />
                        <a href="" style={linkStyle}>Fund transfer</a><br /> 
                        <a href="" style={linkStyle}>60 day challenge</a><br />
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize: "14px"}}>
           <p>
            Investments in securities markets are subject to market risks. Carefully read all related documents before investing. The information available on this website is intended solely for educational and informational purposes and should not be interpreted as financial, legal, or tax advice. Past performance is not necessarily indicative of future results. Investors should evaluate their financial objectives, risk tolerance, and investment horizon before making any investment decisions.
            </p>

            <p>
            Brokerage services are offered in accordance with applicable regulations. Clients are encouraged to verify the registration status of intermediaries before opening trading or demat accounts. Securities can be accepted as margin only through the approved pledge mechanism in the depository system. Trading in equities, derivatives, commodities, and currencies involves significant risk, and investors may incur substantial losses. Please ensure that you understand all applicable charges, product features, and associated risks before participating in the markets.
            </p>

            <p>
            © 2026 Your Brokerage Pvt. Ltd. All rights reserved. This website is a frontend demonstration created for educational purposes only and is not intended to provide brokerage or investment services. Any company names, trademarks, logos, or product references belong to their respective owners and are used only for identification where applicable. This project is not affiliated with, endorsed by, or sponsored by Zerodha or any other financial institution.
            </p> 
            </div>
        </div>
        </footer>
     );
}

export default Footer;