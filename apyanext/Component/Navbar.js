import Link from "next/link"
import Image from "next/image"
const Navbar = () => (
    <nav class="navbarcontainer">
        <ul class="navbarcontainer_nav">
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/"><a>Company</a></Link></li>
            <li><Link href="/"><a>Shop</a></Link></li>
            <li><Link href="/"><a>Safety</a></Link></li>
            <li class="logo">
            <Link href="/"><Image src="/img/APYA.png" alt="Logo" class="header__logo" width={38} height={34}/></Link>
            </li>
            <li class="Push"><Link href="/"><a>sell</a></Link></li>
        </ul>

    </nav>
)
 
export default Navbar;