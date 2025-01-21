import React from 'react';
import style from '../sectionone/Sectionone.module.scss';

const Sectionone = () => {
  return (
    <div className={style.container}>
      <div className={style.textbox}>
        <p>FRESH FLOWER AND GIFT SHOP</p>
        <h1>Making beautiful<br></br> flowers a part of<br></br>your life.</h1>
        <button>SHOP NOW</button>
      </div>
    </div>
  )
}

export default Sectionone