import React from "react";
import style from "./Header.module.scss";
import { MdShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { GiUsaFlag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.topHeader}>
        <div className={style.topContainer}>
          <div className={style.language}>
            <span><GiUsaFlag /> USA </span>
            <p>+777 2345 7886</p>
          </div>
          <div className={style.topNav}>
            <ul>
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Wishlist</a>
              </li>
              <li>
                <a href="">Shopping</a>
              </li>
              <li>
                <a href="">Cart</a>
              </li>
              <li>
                <a href="">Checkout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.bottomHeader}>
        <div className={style.bottomContainer}>
          <div className={style.logoBox}>
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png"
              alt="logo"
            />
          </div>
          <div className={style.navigation}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/basket">Basket</a>
              </li>
              <li>
                <a href="/adminpanel">Admin</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <GiHamburgerMenu className={style.burger} />
          </div>
          <div className={style.iconBox}>
            <input type="text" placeholder="Search Products" />
            <div className={style.icons}>
              <FaRegHeart />
              <Link to='/basket'>
              <MdShoppingCart />
              </Link>
              <button>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
