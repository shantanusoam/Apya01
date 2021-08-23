import React from 'react';

import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import Main from '../../Component/Main';
import HeaderNav from "../../Component/header/headerNav.component";
import Navigation from '../../Component/Navigation';
import Popup from '../../Component/Popup';
import './homepage.style.scss'
const HomePage = () => (
    <div className="homepage">
    <HeaderNav ishome/>
      <Navigation/>
      {/* <Navbar></Navbar>  */}
      <Header/>
      
      
      <Main/>
      
      <Footer/>
      <Popup></Popup>
        
    </div>
     
)
export default HomePage;