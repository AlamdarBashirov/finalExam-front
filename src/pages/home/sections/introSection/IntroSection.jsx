import React from 'react'
import style from './IntroSection.module.scss'

const IntroSection = () => {
  return (
    <div className={style.section}>
      <div className={style.photo}>

      </div>
      <div className={style.text}>
        <span>60% Discount</span>
        <h1>Winter Collection</h1>
        <p>Best Cloth Collection by 2020!</p>
        <button>Shop Now</button>
      </div>
    </div>
  )
}

export default IntroSection
