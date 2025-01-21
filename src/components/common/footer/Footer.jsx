import React from 'react';
import style from '../footer/Footer.module.scss';
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className={style.container}>
         <div className={style.textbox}>
            <span>Copyright ©2025 All rights reserved | This template is made with<FaHeart/>by<span className={style.spann}> Colorlib</span></span>
         </div>
        </div>
    </footer>
  )
}

export default Footer
