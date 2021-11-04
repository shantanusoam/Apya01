import Link from "next/link"
const Navigation = () => {
    return ( 
        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><Link href="/"><a  class="navigation__link"><span>01</span>About Apya</a></Link></li>
                    <li class="navigation__item"><Link href="/"><a   class="navigation__link"><span>02</span>Your benfits</a></Link></li>
                    <li class="navigation__item"><Link href="/"><a   class="navigation__link"><span>03</span>Popular t-sirts</a></Link></li>
                    <li class="navigation__item"><Link href="/"><a   class="navigation__link"><span>04</span>Category</a></Link></li>
                    <li class="navigation__item"><Link href="/"><a  class="navigation__link"><span>05</span>Start</a></Link></li>
                    </ul>
            </nav>
        </div>
     );
}
 
export default Navigation;