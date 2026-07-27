import React from 'react'
import Hero from './Hero'
import LeftImage from './LeftImage'
import RightImage from './RightImage'

function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftImage imgURL="media/kite.png" pdtname="Kite" pdtdesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your Android and iOS devices." 
      tryDemo="" learnMore="" 
      googleplay="" appstore="" />

      <RightImage />

      <LeftImage imgURL="media/coin.png" pdtname="Coin" pdtdesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
      tryDemo="" learnMore="" 
      googleplay="" appstore="" />

      <RightImage />

      <LeftImage imgURL="media/varsity.png" pdtname="Varsity Mobile" pdtdesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
      tryDemo="" learnMore="" 
      googleplay="" appstore="" />

    </div>
  )
}

export default ProductPage