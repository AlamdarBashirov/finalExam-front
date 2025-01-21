import React from 'react'
import style from './LatestNews.module.scss'

const LatestNews = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.text}>
            <div className={style.secName}>
                <h1>Get Our <br />
                Latest Offers News</h1>
                <p>Subscribe news latter</p>
            </div>
            <div className={style.inputBox}>
                <input type="text" placeholder='Your email here' />
                <button>Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
