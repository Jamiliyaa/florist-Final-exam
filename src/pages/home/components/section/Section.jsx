import React from 'react';
import style from '../section/Section.module.scss';

const Section = () => {
  return (
    <div className={style.container}>
     <div className={style.textbox}>
        <span>Custom flower</span>
        <h1>Let our flowers make your party more perfect.</h1>
      <div className={style.btn}>
      <button className={style.btn1}>ORDER NOW</button>
        <button className={style.btn2}>CONTACT US</button>
      </div>
     </div>
    </div>
  )
}

export default Section