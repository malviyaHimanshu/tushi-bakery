import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href='/'>
                    <h3 className="text-2xl font-bold">Tushi Bakery</h3>
                </Link>
            </div>
            <div className="menu">
                <Link href='/' legacyBehavior><a>Home</a></Link>
                <Link href='/about' legacyBehavior><a>About</a></Link>
                <Link href='/shop' legacyBehavior><a>Shop</a></Link>
                <Link href='/contact' legacyBehavior><a>Contact</a></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;