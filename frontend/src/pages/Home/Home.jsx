import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import GearDisplay from '../../components/GearDisplay/GearDisplay'
import Offer from '../../components/Offer/Offer'
import AppDownload from '../../components/AppDownload/AppDownload'
import Nutrition from '../../components/Nutrition/Nutrition'
import Calories from '../../components/Calories/Calories'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <GearDisplay category={category}/>
      <Offer endDate={'2024-06-30T23:59:59'}/>
      <AppDownload/>
      <Nutrition/>
      <Calories/>
      
    </>
  )
}

export default Home
