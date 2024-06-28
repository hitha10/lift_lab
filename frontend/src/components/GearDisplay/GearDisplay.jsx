import React, { useContext } from 'react'
import './GearDisplay.css'
import GearItem from '../GearItem/GearItem'
import { StoreContext } from '../../Context/StoreContext'

const GearDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);

  return (
    <div className='gear-display' id='gear-display'>
      <h2>Top GYM GEARS for you!</h2>
      <div className='gear-display-list'>
        {food_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <GearItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default GearDisplay
