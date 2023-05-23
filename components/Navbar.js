import styles from '@/styles/Navbar.module.scss';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const Navbar = () => {
    return (
        <>
        <nav className={styles.nav}>
            <div className={styles.logo}><a href="/">DM</a></div>
            <ul  >
                <li ><h2 className={inter.className}>Compétences</h2></li>
                <li ><h2 className={inter.className}>Blog</h2></li>
                <li><h2 className={inter.className}>Contact</h2></li>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;