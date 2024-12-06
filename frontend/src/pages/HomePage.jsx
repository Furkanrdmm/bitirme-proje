import React from 'react'
import Header from '../components/Layout/Header/Header';
import Sliders from '../components/Slider/Sliders';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import Blogs from '../components/Blogs/Blogs';
import Brands from '../components/Brands/Brands';
import CampaignSingle from '../components/CampaignSingle/CampaignSingle';
import Campaigns from '../components/Campaigns/Campaigns';
import Policy from '../components/Layout/Policy/Policy';
import Footer from '../components/Layout/Footer/Footer';

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Campaigns />
      <Policy />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage