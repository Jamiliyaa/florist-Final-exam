import React from 'react';
import style from '../header/Header.module.scss';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  return (
    <header>
        <div className={style.container}>
          <div className={style.logobox}>
            <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="logoimg" />
          </div>
          <div className={style.navbar}>
            <button className={style.btn}>HOME</button>
            <button>ABOUT</button>
            <button>SERVICES</button>
            <button>SHOP</button>
            <button>PAGES</button>
            <button>BLOG</button>
            <button>CONTACT</button>
          </div>
          <div className={style.iconbox}>
             <button className={style.btn}> <CiSearch/></button>
             <button className={style.btn}><CiHeart/> </button>
             <button className={style.btn}><HiOutlineShoppingBag/> </button>
              <span>(01) <span className={style.spann}>$65.0</span></span>
          </div>
          <div className={style.hmbgr}>
                    <button><GiHamburgerMenu/></button>      
          </div>
        </div>
    </header>
  )
}

export default Header