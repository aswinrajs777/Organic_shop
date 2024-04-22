import React from 'react'
import Hero from '../Components/Hero/hero'
import { Popular } from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop