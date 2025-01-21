import React from 'react'
import style from './HomeCard.module.scss'

const HomeCard = ({item, AddBasket, goDetail}) => {
  return (
    <div className={style.card}>
      <img src={item.thumbnail} alt="" />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button onClick={AddBasket}>Add Basket</button>
      <button onClick={goDetail}>Details</button>
    </div>
  )
}

export default HomeCard
