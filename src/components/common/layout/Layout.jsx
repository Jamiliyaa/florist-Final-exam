import React from 'react';
import style from '../layout/Layout.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({children}) => {
  return (
    <div className={style.container}>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout