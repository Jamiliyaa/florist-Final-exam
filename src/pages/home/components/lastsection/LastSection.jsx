import React from 'react';
import style from '../lastsection/LastSection.module.scss';

const LastSection = () => {
  return (
    <div className={style.container}>
         <div className={style.img}>
        <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt="quote" /></div>
     <div className={style.textbox}>
     <h1>"I just wanted to say thank you for making such gorgeous<br></br> arrangements for our birthday celebration. I couldn't get our<br></br>how perfect they were for the party. You did a fantastic job,<br></br>and i appreciate it very much."</h1>
         <p>Alejandro Houston</p>
         <span>BUSINESSMAN</span>
     </div>
    </div>
  )
}

export default LastSection