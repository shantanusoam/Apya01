
import './App.css';
import Navbar from './Component/Navbar';
import Navigation from './Component/Navigation';
import Popup from './Component/Popup';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Main from './Component/Main';
import HomePage from './pages/homepage/Homepage.component';


function App() {
  return (
    <div className="App">
      

          <Navigation/>
          <Navbar></Navbar> 
          <Header/>
          <HomePage/>
          
          <Main/>
          <Footer/>
          <Popup></Popup>
    </div>  
    
    

  );
}

export default App;
