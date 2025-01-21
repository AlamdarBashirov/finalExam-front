import React, { useEffect } from 'react'
import BasketCard from '../../../components/cards/basketCard/BasketCard'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductsFromBasketThunk, getProductsBasketThunk } from '../../../redux/reducers/basketSlice'
import style from './BasketSection.module.scss'
const BasketSection = () => {

    const dispatch = useDispatch()

    const products = useSelector((state) => state.basket.basket)
    const loading = useSelector((state) => state.basket.loading)
    const error = useSelector((state) => state.basket.error)

    const DeleteBasket = (id) => {
        dispatch(deleteProductsFromBasketThunk(id))
    }

    useEffect(() => {
        dispatch(getProductsBasketThunk())
    }, [])

  return (
    <div className={style.section}>
      <div className={style.container}>
        {products && products.map(item => <BasketCard item={item} DeleteBasket={() => DeleteBasket(item._id)}   />)}
      </div>
    </div>
  )
}

export default BasketSection
