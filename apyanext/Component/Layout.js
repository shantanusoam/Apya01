import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
const Layout = ({children}) => {
    return ( 
        <div className="content">
         <Navbar/>
         {children}
         <Footer/>
        </div>
     );
}
 
export default Layout;