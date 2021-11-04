import Link from "next/link"
const Header = () => {
    return ( 
        <header class="header">
        <div class="header__logo-box">
            <img src="/img/APYA.png" alt="Logo" class="header__logo"/>
        </div>

        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Apya</span>
                <span class="heading-primary--sub">SERVE THE PURPOSE</span>
            </h1>
            <Link href="#section-tours"><a  class="btn btn--white btn--animated">Discover</a></Link>
            
        </div>
        
    </header>
     );
}
 
export default Header;