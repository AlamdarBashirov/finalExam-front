import React from 'react'
import style from './BasketCard.module.scss'

const BasketCard = ({item, DeleteBasket}) => {
  return (
    <div className={style.card}>
      <img src={item.thumbnail} alt="" />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button onClick={DeleteBasket}>delete</button>
    </div>
  )
}

export default BasketCard
