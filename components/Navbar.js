import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar(){
  return (
      <div>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}><Link className={styles.active} href="/">🏠</Link></li>
          <li className={styles.li}><Link href="/posts/pre-rendering">Sobre nosotros</Link></li>
         <li className={styles.li}><Link href="#">Contacto</Link></li>
         <li className={styles.li}><Link href="#">About</Link></li>
        </ul>
      </nav>
      </div>
  );
}
    
