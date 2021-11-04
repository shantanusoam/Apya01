import Link from "next/link"
const Footer = () => {
    return ( 
        <footer class="footer">
            <div class="footer__logo-box">
                <img src="../img/APYA.png" alt="Full logo" class="footer__logo"/>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <ul class="footer__list">
                            <li class="footer__item"><Link href="/"><a   class="footer__link">Company</a></Link></li>
                            <li class="footer__item"><Link href="/"><a   class="footer__link">Contact us</a></Link></li>
                            <li class="footer__item"><Link href="/"><a   class="footer__link">Carrers</a></Link></li>
                            <li class="footer__item"><Link href="/"><a   class="footer__link">Privacy policy</a></Link></li>
                            <li class="footer__item"><Link href="/" ><a  class="footer__link">Terms</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                        Built by <Link href="/" ><a  class="footer__link">Shantanu soam</a></Link> for Apya Industry <Link href="/"><a   class="footer__link">E commerce portfolio</a></Link>.
                        Copyright &copy; by Apya. You are not allowed to use this webpage for both personal
                        and commercial use, but NOT to claim it as your own design.
                    </p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;