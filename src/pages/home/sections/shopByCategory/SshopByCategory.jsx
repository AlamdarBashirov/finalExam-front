import React from "react";
import style from "./ShopByCategory.module.scss";

const SshopByCategory = () => {
  return (
    <div className={style.section}>
      <h1>Shop by Category</h1>
      <div className={style.container}>
        <div className={`${style.card} ${style.cardOne}`}>
          <div className={style.cardText}>
            <h3>Owmen'S</h3>
            <button>Best New Deals</button>
            <span>New Collection</span>
          </div>
        </div>
        <div className={`${style.card} ${style.cardTwo}`}>
          <div className={style.cardText}>
            <span>Discount!</span>
            <h3>Winter Cloth</h3>
            <p>New Collegtion</p>
          </div>
        </div>
        <div className={`${style.card} ${style.cardThree}`}>
          <div className={style.cardText}>
            <h3>Owmen'S</h3>
            <button>Best New Deals</button>
            <span>New Collection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SshopByCategory;
