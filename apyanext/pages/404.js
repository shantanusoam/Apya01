import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {  
            router.push('/');
        },3000)
    });
    return ( 
        
        
        <div id="notfound">
        <div class="notfound">
        <div class="notfound-404">
        <h1>404</h1>
        <h2>Page not found</h2>
        </div>
        <Link href="/"><a >Homepage</a></Link>
        </div>
        </div>
     );
}
 
export default NotFound;