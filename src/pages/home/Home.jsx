import React from 'react';
import style from '../home/Home.module.scss';
import Layout from '../../components/common/layout/Layout';
import Sectionone from './components/sectionone/Sectionone';
import Abouts from './components/abouts/Abouts';
import Section from './components/section/Section';
import LastSection from './components/lastsection/LastSection';

const Home = () => {
  return (
<Layout>
<Sectionone/>
<Abouts/>
<Section/>
<LastSection/>
</Layout>  
)
}

export default Home