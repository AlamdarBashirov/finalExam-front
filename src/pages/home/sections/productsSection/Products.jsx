import React, { useEffect, useState } from 'react'
import style from './Products.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsHomeThunk, postProductsBasketThunk } from '../../../../redux/reducers/productSlice'
import HomeCard from '../../../../components/cards/homeCard/HomeCard'
import { useNavigate } from 'react-router-dom'

const Products = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const products = useSelector((state) => state.products.products)
    const loading = useSelector((state) => state.products.loading)
    const error = useSelector((state) => state.products.error)
    
    
    const goDetail = (item) => {
      navigate("/detail", {state:{item}})
    }

    const AddBasket = (item) => {
        dispatch(postProductsBasketThunk(item))
    }

    useEffect(() => {
        dispatch(getProductsHomeThunk())
    }, [])

    if (error) return <h1>Xeta Bas Verdi</h1>
    if (loading) return <h1>Yuklenir</h1>

  return (
    <div className={style.section}>
      <div className={style.container}>
        {products && products.map(item => <HomeCard item={item} AddBasket={() => AddBasket(item)}  goDetail={() => goDetail(item)}  />)}
      </div>
    </div>
  )
}

export default Products
