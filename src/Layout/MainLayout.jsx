import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import ScrollToTop from '../components/ScrollToTop';


const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}

export default MainLayout;

