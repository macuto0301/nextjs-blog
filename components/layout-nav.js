import styles from './layout-nav.module.css';
import Link from 'next/link';

export default function LayoutNav(){
  return (
      <div>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}><Link className={styles.active} href="/">Inicio</Link></li>
          <li className={styles.li}><Link href="/posts/first-post">Sobre nosotros</Link></li>
         <li className={styles.li}><Link href="#">Contacto</Link></li>
         <li className={styles.li}><Link href="#">About</Link></li>
        </ul>
      </nav>
      </div>
  );
}
    
