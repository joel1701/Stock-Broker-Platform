import React from 'react'

function LeftImage({imgURL, pdtname, pdtdesc, tryDemo, learnMore, googleplay, appstore}) {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-4 p-5">
            <img src={imgURL} />
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-5 mt-5">
            <h1>{pdtname}</h1>
            <p>{pdtdesc}</p>
            <div>
                <a href={tryDemo}>Try Demo</a>
                <a href={learnMore} style={{marginLeft: '50px'}}>Learn More</a>
            </div>
            <div className="mt-3">
                <a href={googleplay}><img src="media/googlePlayBadge.svg" /></a>
                <a href={appstore} style={{marginLeft: '50px'}}><img src="media/appstoreBadge.svg" /></a>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default LeftImage
