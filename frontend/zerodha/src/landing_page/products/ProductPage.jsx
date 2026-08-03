import React from 'react'
import Hero from './Hero'
import LeftImage from './LeftImage'
import RightImage from './RightImage'
import Universe from './Universe'

function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftImage imgURL="media/kite.png" pdtname="Kite" pdtdesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your Android and iOS devices." 
      tryDemo="" learnMore="" 
      googleplay="" appstore="" />

      <RightImage  imgURL="media/console.png" pdtname="Console" pdtdesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." />

      <LeftImage imgURL="media/coin.png" pdtname="Coin" pdtdesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
      tryDemo="" learnMore="" 
      googleplay="" appstore="" />

      <RightImage imgURL="media/kiteconnect.png" pdtname="Kite Connect API" pdtdesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."/>

      <LeftImage imgURL="media/varsity.png" pdtname="Varsity Mobile" pdtdesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
      tryDemo="" learnMore="" 
      googleplay="" appstore="" />

      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out Zerodha.tech blog.
      </p>

      <Universe />

    </div>
  )
}

export default ProductPage