import React from "react";
import style from "./Freeshipping.module.scss";
import { BsBoxSeam } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { CiUnlock } from "react-icons/ci";

const FreeShipping = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.card}>
          <BsBoxSeam />
          <h1>Free Shipping Method</h1>
          <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>
        <div className={style.card}>
        <CiUnlock />
          <h1>Secure Payment System</h1>
          <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>
        <div className={style.card}>
        <TfiReload />
          <h1>Secure Payment System</h1>
          <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
        </div>
      </div>
    </div>
  );
};

export default FreeShipping;
