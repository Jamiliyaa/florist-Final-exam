import React from 'react';
import style from '../abouts/About.module.scss';

const Abouts = () => {
  return (
    <div className={style.container}>
       <div className={style.section}>
       <div className={style.firstabout}>
           <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png" alt="flower1" />
           <h3>100% Freshness</h3>
           <span>Most people are unaware<br></br> of the less common flower</span>
        </div>
        <div className={style.secondabout}>
        <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png" alt="flower2" />
           <h3>Made by artist</h3>
           <span>Most people are unaware<br></br> of the less common flower</span>
        </div>
        <div className={style.thirdabout}>
        <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png" alt="flower3" />
           <h3>Own courier</h3>
           <span>Most people are unaware<br></br> of the less common flower</span>
        </div>
        <div className={style.fourhabout}>
        <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png" alt="flower4" />
           <h3>100% Freshness</h3>
           <span>Most people are unaware<br></br> of the less common flower</span>
        </div>
       </div>
    </div>
  )
}

export default Abouts