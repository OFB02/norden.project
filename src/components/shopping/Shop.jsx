import React, { useEffect } from 'react';
import OfficialHeader from '../official-landingpage/header';
import OfficialFooter from '../official-landingpage/footer';
import AboveTheFold from './Above-the-Fold';
import Anatomy from './Anatomy';
import VisualContext from './Visual-Context';
import Blueprint from './Blueprint';

const Shop = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OfficialHeader />
      <main className="shop-page">
        <AboveTheFold />
        <Anatomy />
        <VisualContext />
        <Blueprint />
      </main>
      <OfficialFooter />
    </>
  );
};

export default Shop;
