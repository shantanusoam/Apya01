import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// import Directory from '../../Component/directory/directory.componrnt';

import Header from '../Component/Header';
import Main from '../Component/Main';

import Navigation from '../Component/Navigation';
import Popup from '../Component/Popup';

export default function Home() {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="icon-font.css" />
    </Head>
    <div className="homepage">
        
      <Navigation/>
     
      <Header/>
      
      
      <Main/>
      {/* <Directory/> */}
      
      <Popup></Popup>
        
    </div>
     </>
  )
}
