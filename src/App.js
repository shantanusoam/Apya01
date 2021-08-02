
import './App.css';
import Navbar from './Component/Navbar';
import navigation from './Component/navigation';
import popup from './Component/popup';
import footer from './Component/footer';
import header from './Component/header';
import main from './Component/main';
import HomePage from './pages/homepage/Homepage.component';


function App() {
  return (
    <div className="App">
      

          <navigation></navigation>
          <Navbar></Navbar>
          <HomePage/>
          {/* <header></header> */}
          {/* <main></main> */}
          {/* <footer></footer>
          <popup></popup> */}
    </div>  
    
    

  );
}

export default App;
