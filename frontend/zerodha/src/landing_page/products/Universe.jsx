// import React from 'react'

// function Universe() {
//   return (
//     <div className="container mt-5">
//       <div className="row text-center">

//         <h1>The Zerodha Universe</h1>
//         <p>Extend your trading and investment experience even further with our platforms</p>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/smallcaseLogo.png"/>
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/smallcaseLogo.png"/>
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/smallcaseLogo.png"/>
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div> 

//         <div className="col-4 p-3 mt-5">
//           <img src="media/smallcaseLogo.png"/>
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/smallcaseLogo.png"/>
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/smallcaseLogo.png"/>
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div> 

//       </div>
//     </div>
//   )
// }

// export default Universe


import React from 'react'

const logoBoxStyle = {
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const logoImgStyle = {
  maxHeight: '100%',
  maxWidth: '100%',
  objectFit: 'contain',
}

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our platforms</p>

        <div className="col-4 p-3 mt-5">
          <div style={logoBoxStyle}>
            <img src="media/smallcaseLogo.png" alt="smallcase" style={logoImgStyle} />
          </div>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <div style={logoBoxStyle}>
            <img src="media/zerodhaFundhouse.png" alt="Zerodha Fund House" style={logoImgStyle} />
          </div>
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <div style={logoBoxStyle}>
            <img src="media/sensibullLogo.svg" alt="Sensibull" style={logoImgStyle} />
          </div>
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies,
            analyze positions, and examine data points like open
            interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <div style={logoBoxStyle}>
            <img src="media/dittoLogo.png" alt="Ditto" style={logoImgStyle} />
          </div>
          <p className="text-small text-muted">
            Personalized advice on life and health insurance.
            No spam and no mis-selling.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <div style={logoBoxStyle}>
            <img src="media/streakLogo.png" alt="Streak" style={logoImgStyle} />
          </div>
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create
            and backtest strategies without coding.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <div style={logoBoxStyle}>
            <img src="media/goldenpiLogo.png" alt="Goldenpi" style={logoImgStyle} />
          </div>
          <p className="text-small text-muted">
            Investment research platform that offers detailed
            insights on stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button className="p-3 btn btn-primary mt-3 fs-5" style= {{width: "20%", margin: "0 auto"}}>Signup Now</button>
      </div>
    </div>
  )
}

export default Universe