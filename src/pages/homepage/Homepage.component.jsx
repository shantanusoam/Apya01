import React from 'react';
import Directory from '../../Component/directory/directory.componrnt';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import Main from '../../Component/Main';

import Navigation from '../../Component/Navigation';
import Popup from '../../Component/Popup';
import './homepage.style.scss'
const HomePage = () => (
    <div className="homepage">
        
      <Navigation/>
      {/* <Navbar></Navbar>  */}
      <Header/>
      
      
      <Main/>
      <Directory/>
      <Footer/>
      <Popup></Popup>
        
    </div>
     
)
export default HomePage;